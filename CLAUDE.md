# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Sibananda Sahu. Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS 4, scaffolded from v0 with shadcn/ui. There is no backend, no database, and no test suite.

## Commands

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: serve the production build

Both `package-lock.json` and `pnpm-lock.yaml` exist. There is no lint setup (Next 16 removed `next lint`, and ESLint was never configured). `next.config.mjs` sets `typescript.ignoreBuildErrors`, so **`next build` succeeds even with type errors**. To type-check, run `npx tsc --noEmit`.

## Architecture

- **Two routes that render the same page:** [app/page.tsx](app/page.tsx) (`/`) and [app/recruiter/page.tsx](app/recruiter/page.tsx) (`/recruiter`) are nearly identical copies. Each one composes the section components from `components/` (ScrollProgress, Navigation, Hero, About, Skills, Experience, OpenSource, Projects, Contact, Footer). When you add, remove, or reorder a section, **update both files** and the `navItems` array in [components/navigation.tsx](components/navigation.tsx). A past commit fixed a section that had been left out of the recruiter page.
- **Resume gating:** [components/hero.tsx](components/hero.tsx) and [components/contact.tsx](components/contact.tsx) use `usePathname()` to check for `/recruiter`. On any other path, the resume link (a PDF hosted on S3) is blocked with an `alert`. The resume URL is hardcoded in both components.
- **Content is inline:** Section data (projects, experience, skills, OSS contributions) is hardcoded as arrays inside each component. There is no CMS and no data layer.
- **Client-only rendering:** Both pages are `"use client"` and return `null` until mounted. On mount, they add smooth scrolling for `#anchor` links and set up an IntersectionObserver that adds `animate-fade-in` to elements with the `.animate-on-scroll` class. Section `id`s must match the anchors used in `navigation.tsx`.
- **Styling:** The layout uses a dark theme with `neutral-950` backgrounds. Components use `primary-*`/`accent-*` color scales and custom animations (`fade-in`, `float`, etc.). Tailwind v4 has no JS config: the theme is defined in the `@theme` block and the `@utility` rules of [app/globals.css](app/globals.css), and PostCSS uses `@tailwindcss/postcss`. The older hand-written CSS in that file sits inside `@layer utilities`, which keeps its v3 cascade order. The unused v0/shadcn components (`components/ui/`, `hooks/`, `lib/utils`) and their dependencies were removed; `components.json` remains so `npx shadcn add <component>` can bring one back if needed (`@/*` path alias).
- **Static assets:** These are expected in `public/`: `favicon.svg`, `myImage.jpg`, and project screenshots such as `entryedge.png` and `tailshop.png`. Images are `unoptimized`.
- **Icons:** `lucide-react` v1 has no brand icons, so GitHub, LinkedIn, and Instagram are local SVGs in [components/brand-icons.tsx](components/brand-icons.tsx).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
