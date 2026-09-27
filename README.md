# DAW Tech Services

A modern, responsive marketing website for **Dar Alwahaj Technical Services LLC** (DAW Tech Services) — built with Next.js, React, and Tailwind CSS following atomic design principles.

## Overview

This is a single-page Next.js application that showcases the company's technical services including data center solutions, CCTV systems, fiber optics, HVAC systems, electrical maintenance, and facility cleaning. The site was migrated from a static HTML page to a full-stack React application with a robust component architecture.

**Live Site:** [dawtechservices.com](https://dawtechservices.com)

## Tech Stack

- **Framework:** Next.js 16.3.6 (App Router)
- **UI Library:** React 19.3.0
- **Styling:** Tailwind CSS 3.4.7
- **Language:** TypeScript
- **Linting:** ESLint 9.13.0
- **Icons:** Custom SVG icon library
- **Fonts:** Google Fonts (Barlow, Barlow Condensed)
- **Hosting:** Vercel
- **Repository:** GitHub (ApiCartOps/daralwahaj)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ApiCartOps/daralwahaj.git
cd daralwahaj
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Create optimized production build (includes type checking)
- `npm run start` — Serve production build locally
- `npm run lint` — Run ESLint code quality checks
- `npx tsc --noEmit` — Type-check without building

## Project Structure

This project follows **atomic design principles**, organizing components from smallest to largest:

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts, metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles (@layer components)
│   ├── icon.png             # Favicon
│   └── apple-icon.png       # Apple touch icon
├── components/
│   ├── atoms/               # Smallest UI primitives
│   │   ├── Button.tsx
│   │   ├── IconButton.tsx
│   │   ├── BlueprintFrame.tsx
│   │   ├── Logo.tsx
│   │   ├── Field.tsx
│   │   └── ...
│   ├── molecules/           # Small compositions
│   │   ├── ServiceTabButton.tsx
│   │   ├── HeroSlideCard.tsx
│   │   ├── WhyCard.tsx
│   │   └── ...
│   ├── organisms/           # Page sections
│   │   ├── SiteHeader.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   └── templates/
│       └── HomeTemplate.tsx # Assembles page layout
├── data/
│   ├── services.ts          # Service definitions
│   └── content.ts           # Static page copy
├── hooks/
│   └── useActiveService.tsx # Context for hero ↔ services
├── lib/
│   ├── icons.tsx            # Icon component library
│   └── utils.ts             # Utility functions
├── types/
│   └── service.ts           # TypeScript interfaces
└── public/
    └── assets/
        ├── photos/          # Service photos (from Unsplash)
        └── ...
```

## Key Features

### Atomic Design Architecture
Components are organized by complexity level, making the codebase maintainable and scalable. Data flows one direction: **data → atoms → molecules → organisms → templates → pages**.

### 3D Hero Slider
An interactive coverflow-style hero section with:
- Parallax mouse-follow effect
- Autoplay with progress bar (Web Animations API)
- Keyboard navigation
- Drag-to-navigate support

### Responsive Grid Layouts
- Synchronized breakpoints across nested grids
- Mobile-first design approach
- Optimized for all screen sizes

### Blueprint Design System
The Industry design system "blueprint" visual language featuring:
- Hairline borders with registration marks
- Custom duotone image treatment (via `mix-blend-mode`)
- Consistent wireframe aesthetic

### State Management
- `ActiveServiceContext` bridges the hero slider and services section
- Enables "Explore service" button to select matching service tab
- Clean, minimal state pattern

## Configuration

### Brand Colors
Defined in `tailwind.config.ts`:
- `paper` — Background color
- `ink` — Text color
- `navy` / `navy-deep` / `navy-mid` — Primary blues
- `accent` / `accent-600` / `accent-700` — Accent colors
- `orange` / `orange-light` — Supporting colors

### Fonts
Loaded via `next/font/google`:
- **Barlow** — Body text
- **Barlow Condensed** — Headings and labels

### Favicon
Auto-generated from `app/icon.png` and `app/apple-icon.png` using Next.js file conventions. No manual metadata entry needed.

## Content Management

Page content is centralized in the `data/` directory for easy updates:

- **`data/services.ts`** — Service offerings (title, description, icons, checklists)
- **`data/content.ts`** — All static copy (nav, mission, sections, clients, contact)

To update page copy, edit these files rather than modifying components.

## Deployment

### Vercel (Recommended)

The project is deployed on Vercel and automatically redeploys on every push to the main branch.

**Dashboard:** [https://vercel.com/apicartops-projects/daralwahaj](https://vercel.com/apicartops-projects/daralwahaj)

**Environment:** Production deployments are generated from the `main` branch.

### Custom Domain

The site is accessible at **dawtechservices.com** via Vercel's DNS configuration.

### Build Details

- Build command: `next build`
- Start command: `next start`
- Output directory: `.next`

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `npm run dev`
3. Run linting: `npm run lint`
4. Run type-check: `npx tsc --noEmit`
5. Commit with descriptive messages
6. Push and create a pull request
7. Vercel auto-generates preview deployments for review
8. Once approved, merge to main — auto-deployment to production

## Performance Optimization

- **Image Optimization:** Next.js Image component for automatic optimization
- **Code Splitting:** Automatic per-route code splitting via Next.js
- **CSS:** Tailwind CSS purges unused styles in production
- **Font Loading:** Optimized font loading via `next/font`

## Browser Support

Supports all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Build Fails
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (must be 18+)

### Type Errors
Run type-check separately: `npx tsc --noEmit`

### Port Already in Use
Change the port: `npm run dev -- -p 3001`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Atomic Design](https://atomicdesign.bradfrost.com/)

## License

This project is proprietary software for Dar Alwahaj Technical Services LLC.

## Support

For issues or questions about the codebase, refer to [CLAUDE.md](./CLAUDE.md) for architecture guidance.

---

**Built with ❤️ for DAW Tech Services**
