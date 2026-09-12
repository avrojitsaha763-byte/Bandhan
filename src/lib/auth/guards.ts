import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { AppRole } from '@/types/database'

export async function requireUser() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const userId = data?.claims?.sub
  if (!userId) redirect('/auth')
  return { supabase, userId }
}

export async function requireRole(required: AppRole) {
  const { supabase, userId } = await requireUser()
  const { data: profile } = await supabase.from('profiles').select('role, display_name').eq('id', userId).single()
  if (!profile || (profile.role !== required && profile.role !== 'admin')) redirect('/dashboard')
  return { supabase, userId, profile }
}
