export type AppRole = 'customer' | 'provider' | 'admin'
export type BookingStatus = 'requested' | 'confirmed' | 'declined' | 'cancelled' | 'completed'

export interface Profile { id: string; role: AppRole; display_name: string; city: string | null; avatar_url: string | null; bio: string | null }
export interface Service { id: string; provider_id: string; title: string; description: string | null; duration_minutes: number; price_inr: number; is_active: boolean }
export interface Booking { id: string; customer_id: string; provider_id: string; service_id: string; starts_at: string; ends_at: string; status: BookingStatus; total_inr: number; notes: string | null }
