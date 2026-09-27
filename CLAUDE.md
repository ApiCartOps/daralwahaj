# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js (App Router) marketing site for **DAW Tech Services** (Dar Alwahaj Technical Services LLC), converted from a single static `.dc.html` page into a proper React/TypeScript app organized by atomic design. It's a single marketing page (`/`) — no backend, no database.

The original static site (`index.html`, `support.js`, `image-slot.js`, the `_ds/` design system, and the original `assets/`) is preserved unmodified under [legacy-static/](legacy-static/) for reference; it is not part of the running app.

## Commands

```bash
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build (also type-checks)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint.config.mjs)
npx tsc --noEmit # type-check only, faster than a full build
```

There is no test suite.

## Architecture

Content flows one way: **data → atoms → molecules → organisms → templates → pages**.

- **`data/services.ts`** — the six service offerings (id, icon, name, description, checklist items) plus `N` (count) and `pad()` (zero-padded index labels like `01`). **`data/content.ts`** — everything else static: nav links, mission bullets, the service chain, "why us" cards, approach steps, quality checklist, client list. Editing page copy almost always means editing one of these two files, not the components.
- **`types/service.ts`** — the `Service` type shared by `data/services.ts` and the components that render it.
- **`lib/icons.tsx`** — the icon set (`Icon` component + `IconName` union), hand-ported from the original inline SVG path data. `lib/utils.ts` — `scrollToId()`, used for header-offset-aware smooth scrolling.
- **`hooks/useActiveService.tsx`** — a small context (`ActiveServiceProvider` / `useActiveService`) that is the *only* thing connecting `HeroSlider` to `ServicesSection`: the hero's "Explore service" button needs to select the matching tab in the services section and scroll there, so both organisms read/write this shared `{ index, setIndex }` instead of one reaching into the other.
- **`components/atoms/`** — smallest primitives: `Button`, `IconButton`, `BlueprintFrame` (see below), `SectionKicker`, `Field`/`Input`/`Textarea`/`Select`, `Logo`, `NavLink`, `CheckListItem`, `BulletListItem`.
- **`components/molecules/`** — small compositions with one job: `ServiceTabButton`, `HeroSlideCard`, `HeroPaginationTab`, `WhyCard`, `ApproachStep`, `ClientCell`, `ContactInfoItem`, `ServiceChainStep`, `DesktopNav`, `MobileNav`.
- **`components/organisms/`** — one per page section: `SiteHeader`, `HeroSlider`, `AboutSection`, `ServicesSection`, `WhyUsSection`, `ApproachSection`, `ClientsSection`, `FutureDirectionSection`, `ContactSection`, `SiteFooter`.
- **`components/templates/HomeTemplate.tsx`** — assembles the organisms in page order, wrapped in `ActiveServiceProvider`. `app/page.tsx` just renders it.

### `BlueprintFrame` and the wireframe look

The Industry design system's "blueprint" visual language (hairline border + a `+` registration mark just outside each corner) is ported as global CSS classes `.blueprint`/`.corner`/`.duotone` in [app/globals.css](app/globals.css), wrapped in Tailwind's `@layer components`. **That `@layer` placement matters**: it makes these classes sit *before* `@tailwind utilities` in the cascade, so a utility class on the same element (e.g. `border-white/30`) still wins over `.blueprint`'s own `border` declaration despite equal selector specificity. If you add another hand-written global class that a component also applies Tailwind utilities to, it needs the same `@layer components` treatment — otherwise the utility silently loses.

The `BlueprintFrame` atom (`components/atoms/BlueprintFrame.tsx`) is the component wrapper around this: a polymorphic (`as="div"|"button"|"a"|"form"`, forwards a typed `ref`) component that renders its children plus the four corner marks.

### Hero slider (`HeroSlider.tsx`)

The 3D coverflow hero is a direct, faithful port of the original DC page's imperative slider logic (parallax mouse-follow, autoplay progress bar via the Web Animations API, drag-to-navigate, keyboard arrows gated to when the hero is in view) — it deliberately keeps the same imperative-DOM-manipulation approach (`querySelectorAll('[data-card]')`, `querySelectorAll('[data-prog]')`) inside `useEffect`/`useLayoutEffect` rather than re-deriving it as pure-React state, since the math (translate/rotate/opacity per card offset) was already correct and re-deriving it would just be busywork with more chances to introduce bugs. The `sliderStyle`/`autoplay`/`interval` editor-only props from the original DC component schema were dropped — autoplay is hardcoded to `AUTOPLAY_MS = 6000` in that file.

### Layout breakpoint gotcha

`ServicesSection`'s two nested grids (tab list + panel, and inside the panel: image + text) must switch from stacked to side-by-side at the **same** breakpoint (`lg`). If the outer grid goes side-by-side before the inner one has enough room, the panel's own two columns get squeezed and an `aspect-ratio` + `min-h-*` image can compute a width wider than its grid track and overflow. Keep both grids' breakpoints in lockstep if you touch this section.

## Styling conventions

- Brand colors, fonts, etc. live in `tailwind.config.ts` (`theme.extend.colors`: `paper`, `ink`, `navy`, `navy-deep`, `navy-mid`, `accent`, `accent-600`, `accent-700`, `orange`, `orange-light`; `theme.extend.fontFamily`: `heading`/`body`, wired to the `next/font` CSS variables set in `app/layout.tsx`). Use these tokens (`bg-navy`, `text-accent`, etc.) rather than arbitrary hex values.
- Fonts are loaded via `next/font/google` (Barlow + Barlow Condensed), not a CDN `<link>`.
- Static assets (logos, per-service photos) live in `public/assets/`. The favicon / apple-touch-icon are Next's file-convention icons (`app/icon.png`, `app/apple-icon.png` — cropped from the logo's "D" mark) rather than a manual `metadata.icons` entry; Next auto-generates the `<link>` tags for these, so don't add an `icons` field back to `app/layout.tsx`'s metadata unless you're intentionally overriding the convention.
