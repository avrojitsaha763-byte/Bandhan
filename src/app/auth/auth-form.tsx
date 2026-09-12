'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signIn, signUp } from './actions'

interface AuthFormProps {
  error?: string
  message?: string
}

export function AuthForm({ error, message }: AuthFormProps) {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin')

  return (
    <div className="auth-card">
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div className="eyebrow">🪷 Bandhan Authentication</div>
        <h1 style={{ margin: '8px 0 6px', fontSize: '1.9rem' }}>
          {activeTab === 'signin' ? 'Welcome Back' : 'Create Your Profile'}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.94rem', margin: 0 }}>
          {activeTab === 'signin'
            ? 'Sign in to access your companion bookings and workspace'
            : 'Join a respectful, vetted community for meaningful connections'}
        </p>
      </div>

      {error && (
        <div className="notice error" style={{ marginBottom: '20px' }}>
          <strong>Notice:</strong> {error}
        </div>
      )}

      {message && (
        <div className="notice success" style={{ marginBottom: '20px' }}>
          <strong>Success:</strong> {message}
        </div>
      )}

      <div className="auth-tabs">
        <button
          type="button"
          className={`auth-tab-btn ${activeTab === 'signin' ? 'active' : ''}`}
          onClick={() => setActiveTab('signin')}
        >
          Sign In
        </button>
        <button
          type="button"
          className={`auth-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}
        >
          Create Account
        </button>
      </div>

      {activeTab === 'signin' ? (
        <form action={signIn}>
          <div className="field">
            <label htmlFor="signin-email">Email Address</label>
            <input
              id="signin-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              minLength={8}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="button accent full" style={{ marginTop: '12px' }}>
            Sign in to Bandhan →
          </button>
        </form>
      ) : (
        <form action={signUp}>
          <div className="field">
            <label htmlFor="signup-name">Display Name</label>
            <input
              id="signup-name"
              name="displayName"
              placeholder="e.g. Aarav Sharma"
              required
              maxLength={60}
              autoComplete="name"
            />
            <span className="field-helper">This name will be visible to companions and matches.</span>
          </div>

          <div className="field">
            <label htmlFor="signup-email">Email Address</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="At least 8 characters"
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="button accent full" style={{ marginTop: '12px' }}>
            Complete Registration →
          </button>
        </form>
      )}

      <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
        <p className="meta" style={{ margin: '0 0 10px' }}>
          Offering event companionship? Join here, then complete verified provider onboarding in your workspace.
        </p>
        <Link href="/" style={{ color: 'var(--saffron)', fontWeight: 700, fontSize: '0.9rem' }}>
          ← Return to Home
        </Link>
      </div>
    </div>
  )
}
