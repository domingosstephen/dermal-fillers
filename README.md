# AestheFill Pro — Dermal Fillers Wholesale Website

Premium wholesale dermal filler supplier site. Built with **Next.js 14 (App Router)**, TypeScript, and vanilla CSS design system.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Vanilla CSS design system (`src/app/globals.css`)
- **Fonts**: Google Fonts via `next/font` — Cormorant Garamond + Inter
- **Output**: Static export (`output: 'export'`) — deployable to Vercel, GitHub Pages, or any static host

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Complete design system
│   ├── page.tsx            # Homepage
│   ├── products/page.tsx   # Product catalogue
│   ├── about/page.tsx      # About / trust page
│   ├── contact/page.tsx    # Trade enquiry form
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt config
├── components/
│   ├── Nav.tsx             # Sticky nav + mobile menu
│   ├── Footer.tsx          # Site footer
│   └── StickyCTA.tsx       # Mobile sticky CTA bar
public/
└── assets/                 # Place photography here (WebP)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build (Static Export)

```bash
npm run build
```

The static site exports to `/out/` — ready to deploy.

## Before Going Live

1. Replace `yourdomain.com` with your real domain across all files
2. Replace the placeholder brand name if needed
3. Add real photography to `public/assets/` — see `role="img"` + `aria-label` on placeholders for shot briefs
4. Wire the contact form (`src/app/contact/page.tsx`) to a real backend (Formspree, server action, etc.)
5. Add real team names and headshots to `src/app/about/page.tsx`
6. Create `/privacy`, `/terms`, `/cookies` pages
7. Add real social media URLs in `src/components/Footer.tsx`
8. Add GA4 + Google Tag Manager
9. Submit sitemap to Google Search Console after launch

## SEO / GEO / AEO

- Full Schema.org structured data (Organization, FAQPage, Product ItemList, ContactPage, AboutPage)
- Auto-generated `sitemap.xml` and `robots.txt` via Next.js
- Unique meta titles + descriptions per page
- Open Graph tags on all pages
- All image placeholders have descriptive `alt` text ready for real photos
- FAQ structured data on homepage for AEO (AI-generated answers / featured snippets)
