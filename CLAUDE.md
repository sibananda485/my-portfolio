# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sibananda Sahu. Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS 4, scaffolded from v0 with shadcn/ui. There is no backend, no database, and no test suite.

## Commands

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: serve the production build
- `npm run typecheck`: type-check with `tsc --noEmit`

Use npm (`package-lock.json` is the only lockfile). There is no lint setup (Next 16 removed `next lint`, and ESLint was never configured). `next build` type-checks and fails on type errors.

## Architecture

- **One page, two routes:** [components/portfolio.tsx](components/portfolio.tsx) composes every section (Background, ScrollProgress, Navigation, Hero, RecruiterBrief, Experience, OpenSource, Projects, Skills, About, Contact, Footer). [app/page.tsx](app/page.tsx) (`/`) and [app/recruiter/page.tsx](app/recruiter/page.tsx) (`/recruiter`) are server components that render it. When you add, remove, or reorder a section, update `portfolio.tsx` and `navItems` in [lib/nav.ts](lib/nav.ts) (it drives the navigation, its scroll-spy and the ⌘K command palette). Section `id`s must match `navItems`.
- **Recruiter gating:** The resume PDF URL lives in [lib/recruiter.ts](lib/recruiter.ts), imported **only** by `app/recruiter/page.tsx`, which passes it down as `recruiter`. Only then do the RecruiterBrief card and resume downloads render (phone and WhatsApp are public, in `profile` in `lib/data.ts`); on `/` the resume button becomes a "Resume request" mailto link ([components/resume-button.tsx](components/resume-button.tsx)). Never import `lib/recruiter.ts` from a component, or the data leaks into the HTML/JS of `/`. `/recruiter` is `noindex` and deliberately absent from the sitemap and robots.txt.
- **Content:** All copy and data (profile, stats, experience, projects, OSS, skills, about) lives in [lib/data.ts](lib/data.ts), so numbers stay consistent across sections. Headline figures (years, platforms) are in `figures` and rendered with `formatFigure`; the MUI-X version is `openSource.version`. Never hard-code them in components, metadata or the share image. Employer work (Finseal, Actify) is under NDA: describe it in prose only, never as screenshots, demos or mock UI.
- **Rendering:** Pages and most sections are server components, so all content is in the prerendered HTML. Client components are small islands: Navigation + CommandPalette (cmdk inside a native `<dialog>`), Background (cursor glow), ScrollProgress, CopyButton, MotionProvider, and the primitives in [components/ui/](components/ui/) (Reveal, NumberTicker, SpotlightCard, TiltCard, TracingBeam). Animations use `motion` (`motion/react`) under `<MotionConfig reducedMotion="user">`. `Reveal` renders with the `reveal` class, which the `<noscript>` style in `portfolio.tsx` and the print styles force visible. The hero headline and portrait are deliberately not wrapped in `Reveal`, so the Largest Contentful Paint is not delayed until hydration.
- **Styling:** Dark theme on `--color-canvas` with zinc greys and a single accent scale, `brand-*` (lime). Re-theme by editing that scale. Fonts are Geist Sans/Mono via `next/font` CSS variables. Tailwind v4 has no JS config: the theme is defined in the `@theme` blocks and the `@utility` rules (`eyebrow`, `spotlight-card`, `text-shine`) of [app/globals.css](app/globals.css), and PostCSS uses `@tailwindcss/postcss`. `components.json` remains so `npx shadcn add <component>` can bring a shadcn component back if needed (`@/*` path alias).
- **SEO:** Metadata and a JSON-LD `Person` are in [app/layout.tsx](app/layout.tsx); [app/opengraph-image.tsx](app/opengraph-image.tsx) generates the share card; `app/sitemap.ts` and `app/robots.ts` use `SITE_URL` from [lib/site.ts](lib/site.ts) (`NEXT_PUBLIC_SITE_URL`, else Vercel's production URL).
- **Static assets:** These are expected in `public/`: `favicon.svg`, `myImage.webp`, and project screenshots such as `entryedge.png` and `tailshop.png`. Images go through Next's image optimization; keep source files reasonably sized (the portrait is a 1536px square WebP).
- **Icons:** `lucide-react` v1 has no brand icons, so GitHub and LinkedIn are local SVGs in [components/brand-icons.tsx](components/brand-icons.tsx). Tech logos come from `simple-icons` (path data referenced in `lib/data.ts`, rendered by `components/ui/tech-icon.tsx`). It has no AWS icon.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
