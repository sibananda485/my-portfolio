# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sibananda Sahu. Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3, scaffolded from v0 with shadcn/ui. There is no backend, no database, and no test suite.

## Commands

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: serve the production build
- `npm run lint`: `next lint`

Both `package-lock.json` and `pnpm-lock.yaml` exist. `next.config.mjs` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`, so **`next build` succeeds even with type errors**. To type-check, run `npx tsc --noEmit`.

## Architecture

- **Two routes that render the same page:** [app/page.tsx](app/page.tsx) (`/`) and [app/recruiter/page.tsx](app/recruiter/page.tsx) (`/recruiter`) are nearly identical copies. Each one composes the section components from `components/` (Navigation, Hero, About, Skills, Experience, OpenSource, Projects, Contact, Footer). When you add, remove, or reorder a section, **update both files**. A past commit fixed a section that had been left out of the recruiter page.
- **Resume gating:** [components/hero.tsx](components/hero.tsx) and [components/contact.tsx](components/contact.tsx) use `usePathname()` to check for `/recruiter`. On any other path, the resume link (a PDF hosted on S3) is blocked with an `alert`. The resume URL is hardcoded in both components.
- **Content is inline:** Section data (projects, experience, skills, OSS contributions) is hardcoded as arrays inside each component. There is no CMS and no data layer.
- **Client-only rendering:** Both pages are `"use client"` and return `null` until mounted. On mount, they add smooth scrolling for `#anchor` links and set up an IntersectionObserver that adds `animate-fade-in` to elements with the `.animate-on-scroll` class. Section `id`s must match the anchors used in `navigation.tsx`.
- **Styling:** The layout uses a dark theme with `neutral-950` backgrounds. Components use `primary-*`/`accent-*` color scales and custom animations (`fade-in`, `float`, etc.) defined in [tailwind.config.ts](tailwind.config.ts), with CSS variables in [app/globals.css](app/globals.css). The unused v0/shadcn components (`components/ui/`, `hooks/`, `lib/utils`) and their dependencies were removed; `components.json` remains so `npx shadcn add <component>` can bring one back if needed (`@/*` path alias).
- **Static assets:** These are expected in `public/`: `favicon.svg`, `myImage.jpg`, and project screenshots such as `entryedge.png` and `tailshop.png`. Images are `unoptimized`.
