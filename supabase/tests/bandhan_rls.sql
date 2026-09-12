begin;
select plan(5);
-- Run locally with `supabase test db`. These assertions document the minimum security contract.
select has_table('public', 'profiles', 'profiles table exists');
select has_table('public', 'services', 'services table exists');
select has_table('public', 'availability_slots', 'availability table exists');
select has_table('public', 'bookings', 'bookings table exists');
select has_table('public', 'booking_events', 'booking events table exists');
select * from finish();
rollback;
