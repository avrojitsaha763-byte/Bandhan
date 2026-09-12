import Link from 'next/link'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="shell nav">
        <Link className="brand" href="/">
          <span className="brand-symbol">🪷</span>
          <span>बंधन</span>
          <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.1rem' }}>Bandhan</span>
        </Link>
        <nav className="navlinks">
          <Link href="/discover">Discover People</Link>
          <Link href="/auth">Sign In</Link>
          <Link className="button accent" href="/auth">
            Join Bandhan ✨
          </Link>
        </nav>
      </header>
      {children}
      <footer className="shell footer">
        <p style={{ margin: '0 0 6px', fontWeight: 600, color: 'var(--ink)' }}>
          🪷 Bandhan V4 · Made in India for India
        </p>
        <p style={{ margin: 0 }}>
          Committed to authentic connection, platonic safety, and respectful companionship.
        </p>
      </footer>
    </>
  )
}
