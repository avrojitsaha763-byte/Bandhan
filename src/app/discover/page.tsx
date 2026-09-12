import { SiteShell } from '@/components/site-shell'
import { featuredProviders } from '@/lib/demo-data'
import Link from 'next/link'
export default function DiscoverPage() { return <SiteShell><main className="shell section"><div className="eyebrow">Directory</div><h1>Find your event saathi</h1><p>Production data will be fetched from active provider services after Supabase is configured.</p><div className="grid">{featuredProviders.map((person) => <article className="card" key={person.name}><div className="avatar">{person.initials}</div><h3>{person.name}</h3><p className="meta">{person.city} · {person.service}</p><p><strong>{person.price}</strong></p><Link className="button accent" href="/auth">Sign in to request</Link></article>)}</div></main></SiteShell> }
