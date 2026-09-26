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

- **One page, two routes:** [components/portfolio.tsx](components/portfolio.tsx) composes every section (ScrollProgress, Navigation, Hero, About, Skills, Experience, OpenSource, Projects, Contact, Footer, ScrollAnimations). [app/page.tsx](app/page.tsx) (`/`) and [app/recruiter/page.tsx](app/recruiter/page.tsx) (`/recruiter`) are one-line server components that render it. When you add, remove, or reorder a section, update `portfolio.tsx` and the `navItems` array in [components/navigation.tsx](components/navigation.tsx) (it also drives the scroll-spy).
- **Resume gating:** The resume PDF URL lives in [lib/resume.ts](lib/resume.ts) and is imported **only** by `app/recruiter/page.tsx`, which passes it down as `resumeUrl` to Hero and Contact. They render it through [components/resume-button.tsx](components/resume-button.tsx): with a URL it is a download link; without one it is a button that shows an `alert`. Never import `lib/resume.ts` from a component, or the URL leaks into the HTML/JS of `/`.
- **Content is inline:** Section data (projects, experience, skills, OSS contributions) is hardcoded as arrays inside each component. There is no CMS and no data layer.
- **Rendering:** Pages and most sections are server components, so all content is in the prerendered HTML. Client components are only Navigation (scroll-spy, mobile menu), Hero (typewriter), ScrollProgress, ResumeButton, and [components/scroll-animations.tsx](components/scroll-animations.tsx), which uses an IntersectionObserver to add `animate-fade-in` to `.animate-on-scroll` elements. Smooth anchor scrolling is pure CSS (`scroll-behavior` + `scroll-margin-top` on `section[id]`). Section `id`s must match `navItems`. A `<noscript>` style and the `prefers-reduced-motion` block in `globals.css` make `.animate-on-scroll` content visible without JS or animation.
- **Styling:** The layout uses a dark theme with `neutral-950` backgrounds. Components use `primary-*`/`accent-*` color scales and custom animations (`fade-in`, `float`, etc.). Tailwind v4 has no JS config: the theme is defined in the `@theme` block and the `@utility` rules of [app/globals.css](app/globals.css), and PostCSS uses `@tailwindcss/postcss`. The unused v0/shadcn components (`components/ui/`, `hooks/`, `lib/utils`) and their dependencies were removed; `components.json` remains so `npx shadcn add <component>` can bring one back if needed (`@/*` path alias).
- **Static assets:** These are expected in `public/`: `favicon.svg`, `myImage.jpg`, and project screenshots such as `entryedge.png` and `tailshop.png`. Images are `unoptimized`.
- **Icons:** `lucide-react` v1 has no brand icons, so GitHub, LinkedIn, and Instagram are local SVGs in [components/brand-icons.tsx](components/brand-icons.tsx).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
