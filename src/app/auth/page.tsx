import { SiteShell } from '@/components/site-shell'
import { AuthForm } from './auth-form'

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const query = await searchParams
  return (
    <SiteShell>
      <main className="shell auth-wrapper">
        <AuthForm error={query.error} message={query.message} />
      </main>
    </SiteShell>
  )
}
