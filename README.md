# drewswanigan.dev

Personal portfolio - Next.js 15 / TypeScript / Tailwind

## Setup

```bash
npm install
npm run dev
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind + shadcn/ui
- framer-motion for animations
- Geist fonts

## Structure

Single-page portfolio. Main content is in `app/page.tsx` - update the `productionSystems` and `engineeringProjects` arrays to change what's displayed.

Contact links (email, GitHub, LinkedIn) are defined as constants near the top of `page.tsx`.

## Deploy

Built for Vercel but works anywhere that supports Next.js.
