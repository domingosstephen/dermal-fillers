# DermalFillers Project — Memory

## Project Overview
- **Project path**: `C:\Users\Dell\Desktop\LK Digital Warehouse\Local Projects\DermalFillers`
- **Brand name used**: AestheFill Pro (placeholder — confirm with client)
- **Domain placeholder**: `https://www.yourdomain.com` — replace throughout all files when confirmed
- **Client segment**: B2B wholesale — selling to licensed aesthetic practitioners, not consumers

## Site Architecture
- `index.html` — Homepage (hero, trust bar, problem/solution, products overview, process, testimonials, FAQ, CTA)
- `products.html` — Full product catalogue (3 HA ranges: Soft, Volume, Deep + comparison table)
- `about.html` — Company trust page (mission, compliance, team, timeline, supply chain)
- `contact.html` — Trade enquiry form (main conversion page)
- `styles.css` — Global design system (all shared CSS — DO NOT duplicate styles in pages)
- `sitemap.xml` — SEO sitemap (update `lastmod` dates and domain when live)
- `robots.txt` — Crawl directives

## Brand / Design System
- **Palette**: Navy `#0d1b2a`, Gold `#c9a84c`, Off-white `#f8f9fc`
- **Fonts**: Cormorant Garamond (display/headings) + Inter (body) — loaded from Google Fonts
- **CTA colour**: Gold `#c9a84c` — only use for primary action buttons
- **Grid**: 8-point spacing system, max-width 1200px
- **Tone**: Formal / Expert / Rational / Conservative (B2B medical device)

## Products (Placeholders — confirm with client)
- AestheFill Soft — 16 mg/mL HA, superficial lines/lips
- AestheFill Volume — 22 mg/mL HA, midface/cheeks (most requested)
- AestheFill Deep — 24 mg/mL HA, jawline/chin/structural

## Image Placeholders
Every `<div class="img-placeholder ...">` has a descriptive `role="img"` `aria-label` with:
- What the photo should show
- Recommended dimensions and format (WebP)
- Background/lighting notes for photographer

## SEO Implementation
- Full Schema.org structured data on all pages (Organization, WebPage, FAQPage, ItemList, Product, ContactPage, AboutPage)
- Unique title tags + meta descriptions per page
- Semantic HTML with proper H1–H6 hierarchy
- All image placeholders have descriptive alt text ready for when real photos are added

## Key Pending Items (when client approves design)
1. Replace `yourdomain.com` across all files with real domain
2. Replace brand name if "AestheFill Pro" is not the final name
3. Add real team photos and names to `about.html`
4. Add real product photography to all product placeholders
5. Add hero photography to `index.html` hero section
6. Wire up contact form to real backend (Formspree / server action / CRM)
7. Create `privacy.html`, `terms.html`, `cookies.html` pages
8. Add real social media profile URLs in footers
9. Submit sitemap to Google Search Console once live
10. Add Google Analytics 4 + GTM tracking before launch

## SOPs Used
- CRO Checklist, LK_Digital_Copywriting_SOP, LK_Digital_Web_SOP — all applied
