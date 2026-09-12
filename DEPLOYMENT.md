# 🚀 Bandhan V4 — Hosting & Deployment Guide

This guide details everything you need to deploy and host **Bandhan V4** smoothly.

---

## 📋 Pre-Flight Checklist

- [x] **TypeScript check**: `npm run typecheck` (Passed cleanly)
- [x] **Domain test suite**: `npm run test` (6/6 tests passing)
- [x] **Production build**: `npm run build` (Turbopack optimized bundle verified)
- [x] **Security headers**: Configured in [`vercel.json`](file:///c:/Users/AVROJIT/OneDrive/Desktop/personal%20project/vercel.json)
- [x] **Next.js 16 Proxy**: Session sync in [`proxy.ts`](file:///c:/Users/AVROJIT/OneDrive/Desktop/personal%20project/proxy.ts) with defensive env checks
- [x] **Ignored files**: Clean [`.gitignore`](file:///c:/Users/AVROJIT/OneDrive/Desktop/personal%20project/.gitignore) protecting local credentials and caches

---

## 🔑 Required Environment Variables

Configure these two environment variables in your hosting provider's dashboard:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project API URL | `https://xyzcompany.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase Anon / Publishable Key | `sb_publishable_...` or JWT anon key |

> [!IMPORTANT]
> Never place `SUPABASE_SERVICE_ROLE_KEY` in `NEXT_PUBLIC_` variables or frontend code.

---

## 🌐 Option 1: Deploy to Vercel (Recommended)

Next.js 16 is natively optimized for Vercel:

### Method A: Via Git (GitHub / GitLab / Bitbucket)
1. Push this repository to GitHub/GitLab.
2. Log in to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." -> "Project"**.
3. Import your Bandhan repository.
4. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
5. Click **Deploy**.

### Method B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🌲 Option 2: Deploy to Netlify

1. Push your repository to your Git provider.
2. In Netlify, click **"Add new site" -> "Import an existing project"**.
3. Select your repository.
4. Set Build command to: `npm run build`
5. Set Publish directory to: `.next`
6. Add the two environment variables in **Site configuration -> Environment variables**.
7. Deploy.

---

## 🐳 Option 3: Deploy via Node / VPS / Docker (Render, Railway, Fly.io)

You can run the standard Next.js standalone or production server:

```bash
# Install dependencies
npm ci

# Build the project
npm run build

# Start production server (default port 3000)
npm run start
```

For custom port:
```bash
PORT=8080 npm run start
```

---

## 🗄️ Supabase Configuration for Production

Once your app is hosted and has a public domain (e.g., `https://bandhan.vercel.app`):

### 1. Database Schema
Ensure the migration in [`supabase/migrations/20260912000000_bandhan_v4.sql`](file:///c:/Users/AVROJIT/OneDrive/Desktop/personal%20project/supabase/migrations/20260912000000_bandhan_v4.sql) has been applied to your database via Supabase SQL Editor or:
```bash
npx supabase link --project-ref <your-supabase-project-id>
npx supabase db push
```

### 2. Configure Auth Redirect URLs
1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **Authentication** -> **URL Configuration**.
3. Set **Site URL** to your hosted domain (e.g. `https://your-domain.vercel.app`).
4. In **Redirect URLs**, add:
   - `https://your-domain.vercel.app/auth`
   - `https://your-domain.vercel.app/onboarding`
   - `https://your-domain.vercel.app/**`

---

## 🛠️ Verification Commands

```bash
# 1. Type validation
npm run typecheck

# 2. Domain test runner
npm run test

# 3. Production bundle build
npm run build
```
