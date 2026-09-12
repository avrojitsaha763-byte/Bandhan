-- Bandhan V4: run with `supabase db push` after linking a project.
-- Roles are application data. Never authorize from user_metadata or expose service_role keys.
create type public.app_role as enum ('customer', 'provider', 'admin');
create type public.booking_status as enum ('requested', 'confirmed', 'declined', 'cancelled', 'completed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.app_role not null default 'customer',
  display_name text not null check (char_length(display_name) between 2 and 60),
  city text check (char_length(city) <= 80),
  avatar_url text check (char_length(avatar_url) <= 2048),
  bio text check (char_length(bio) <= 1000),
  is_public boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.services (
  id uuid primary key default gen_random_uuid(), provider_id uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 100), description text check (char_length(description) <= 1000),
  duration_minutes integer not null check (duration_minutes between 30 and 720), price_inr integer not null check (price_inr >= 0),
  is_active boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.availability_slots (
  id uuid primary key default gen_random_uuid(), provider_id uuid not null references public.profiles(id) on delete cascade,
  starts_at timestamptz not null, ends_at timestamptz not null, is_available boolean not null default true,
  created_at timestamptz not null default now(), check (ends_at > starts_at)
);
create table public.bookings (
  id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.profiles(id), provider_id uuid not null references public.profiles(id),
  service_id uuid not null references public.services(id), starts_at timestamptz not null, ends_at timestamptz not null,
  status public.booking_status not null default 'requested', total_inr integer not null check (total_inr >= 0), notes text check (char_length(notes) <= 1000),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  check (ends_at > starts_at), check (customer_id <> provider_id)
);
create table public.booking_events (
  id uuid primary key default gen_random_uuid(), booking_id uuid not null references public.bookings(id) on delete cascade,
  actor_id uuid not null references public.profiles(id), event_type text not null check (char_length(event_type) between 3 and 50),
  created_at timestamptz not null default now()
);
create index services_provider_active_idx on public.services(provider_id) where is_active;
create index availability_provider_starts_idx on public.availability_slots(provider_id, starts_at);
create index bookings_customer_idx on public.bookings(customer_id, starts_at desc);
create index bookings_provider_idx on public.bookings(provider_id, starts_at desc);

alter table public.profiles enable row level security; alter table public.services enable row level security; alter table public.availability_slots enable row level security; alter table public.bookings enable row level security; alter table public.booking_events enable row level security;
revoke all on public.profiles, public.services, public.availability_slots, public.bookings, public.booking_events from anon, authenticated;
grant select on public.profiles, public.services to anon, authenticated;
grant insert, update on public.profiles, public.services, public.availability_slots, public.bookings, public.booking_events to authenticated;
grant select on public.availability_slots, public.bookings, public.booking_events to authenticated;

create policy "Public profiles are discoverable" on public.profiles for select to anon, authenticated using (is_public or (select auth.uid()) = id);
create policy "Users create their own profile" on public.profiles for insert to authenticated with check ((select auth.uid()) = id and role in ('customer', 'provider'));
create policy "Users update their own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id and role in ('customer', 'provider'));
create policy "Active services are public and providers see their own" on public.services for select to anon, authenticated using (is_active or (select auth.uid()) = provider_id);
create policy "Providers create their own services" on public.services for insert to authenticated with check ((select auth.uid()) = provider_id);
create policy "Providers update their own services" on public.services for update to authenticated using ((select auth.uid()) = provider_id) with check ((select auth.uid()) = provider_id);
create policy "Providers manage their availability" on public.availability_slots for all to authenticated using ((select auth.uid()) = provider_id) with check ((select auth.uid()) = provider_id);
create policy "Booking participants can read" on public.bookings for select to authenticated using ((select auth.uid()) in (customer_id, provider_id));
create policy "Customers request correctly priced bookings" on public.bookings for insert to authenticated with check (
  (select auth.uid()) = customer_id and status = 'requested' and starts_at > now()
  and exists (select 1 from public.services s where s.id = service_id and s.provider_id = provider_id and s.is_active and s.price_inr = total_inr)
);
create policy "Booking participants can read events" on public.booking_events for select to authenticated using (exists (select 1 from public.bookings b where b.id = booking_id and (select auth.uid()) in (b.customer_id, b.provider_id)));
-- Booking mutations are intentionally server-mediated until an audited state-transition RPC is added. No update/delete policy is granted.
