'use server'
import { redirect } from 'next/navigation'
import { requireUser } from '@/lib/auth/guards'

export async function saveProfile(formData: FormData) {
  const { supabase, userId } = await requireUser()
  const displayName = String(formData.get('displayName') || '').trim()
  const role = formData.get('role') === 'provider' ? 'provider' : 'customer'
  const city = String(formData.get('city') || '').trim() || null
  if (displayName.length < 2 || displayName.length > 60) redirect('/onboarding?error=Please+use+a+name+between+2+and+60+characters.')
  const { error } = await supabase.from('profiles').upsert({ id: userId, display_name: displayName, city, role }, { onConflict: 'id' })
  if (error) redirect('/onboarding?error=Your+profile+could+not+be+saved.')
  redirect(role === 'provider' ? '/provider' : '/dashboard')
}
