'use server'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signIn(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email: String(formData.get('email') || ''), password: String(formData.get('password') || '') })
  if (error) redirect(`/auth?error=${encodeURIComponent(error.message || 'Could not sign in. Check your credentials.')}`)
  redirect('/onboarding')
}

export async function signUp(formData: FormData) {
  const supabase = await createClient()
  const email = String(formData.get('email') || '')
  const password = String(formData.get('password') || '')
  const displayName = String(formData.get('displayName') || '').trim()
  const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName } } })
  if (error) redirect(`/auth?error=${encodeURIComponent(error.message || 'Could not create account.')}`)
  if (!data.user) redirect('/auth?error=Account+creation+failed.+Please+try+again.')
  // This app never trusts user metadata for authorization. The database creates a customer profile.
  redirect('/auth?message=Account+created!+Check+your+email+to+confirm+your+account,+or+sign+in+if+confirmation+is+disabled.')
}
