# JSS Engineering – TRD, Brand Prompt & Web App Build Prompt

Source: JSS Engineering company profile PDF. Scope: corporate website + lead/admin system for a steel and power industrial contractor.

## 1. Technical Requirements Document (TRD)

### 1.1 Overview

JSS Engineering (Tadipatri, Anantapur, AP 515411) is a consultancy engineering and contracting firm. It does turnkey machinery installation, industrial civil works, erection and commissioning, plant relocation, and O&M of DRI, steel and power units. Clients include UltraTech Cement, Western Coalfields (via RVR Projects), Agroha TMT, Rayalaseema Green Steel and others.

Goal: B2B credibility site that wins tenders and enquiries, with an admin panel to manage content and leads.

### 1.2 Users

- Procurement and project managers at steel, cement, coal and power plants (primary).
- Tender and vendor-registration teams verifying credentials.
- Admin (JSS staff) managing projects, clients, enquiries.

### 1.3 Functional Requirements

**Public site**

- Home: hero, services summary, client logo strip, stats, CTA.
- About: vision, mission, values, company story.
- Services: one page per core service (turnkey installation, civil works, erection and commissioning, relocation, utility connections, OEM-supervised commissioning, structural fabrication, O&M).
- Industries: coal mines, cement plants, sponge iron, furnaces, rolling mills.
- Projects: filterable gallery with case-study detail pages.
- Clients: logos and locations.
- Policies: quality, health and safety, environment.
- Downloads: company profile PDF, turnover statement, certificates.
- Contact: enquiry form, map, phone, email, WhatsApp button.
- Request a Quote form with service, industry, location, timeline, file upload.

**Admin panel**

- Auth (email and password, JWT), role: admin and editor.
- CRUD: projects, services, clients, testimonials, downloads, team.
- Enquiry inbox: status (new, contacted, quoted, closed), notes, CSV export.
- Media library with image upload.
- Site settings: contact details, social links, SEO meta.

**System**

- Email notification to Jssengineering04@gmail.com on each enquiry.
- Auto-reply email to enquirer.
- Spam protection (honeypot plus rate limit, optional reCAPTCHA).

### 1.4 Non-Functional Requirements

- Performance: Lighthouse 90+ mobile, LCP under 2.5 s, images in WebP, lazy loading.
- Responsive: mobile first (field and plant managers browse on phones).
- SEO: SSR or SSG, sitemap.xml, robots.txt, schema.org Organization and Service markup, local keywords (Tadipatri, Anantapur, Andhra Pradesh, steel plant erection).
- Accessibility: WCAG 2.1 AA, contrast checked against palette.
- Security: HTTPS, helmet, input validation (zod), bcrypt, rate limiting, upload type and size limits, CORS allowlist.
- Availability: 99.5 percent, daily DB backup.

### 1.5 Recommended Stack

| Layer | Choice |
| --- | --- |
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion |
| Backend | Next.js Route Handlers (or Node.js + Express if separate API wanted) |
| Database | PostgreSQL with Prisma ORM (Supabase or Neon free tier) |
| Auth | NextAuth (credentials) or JWT |
| Storage | Cloudinary or Supabase Storage |
| Email | Resend or Nodemailer with Gmail SMTP |
| Hosting | Vercel (app), Supabase/Neon (DB) |
| Analytics | Google Analytics 4, Search Console |

### 1.6 Data Model

- User: id, name, email, passwordHash, role, createdAt.
- Service: id, slug, title, summary, body, icon, image, order, published.
- Industry: id, slug, title, summary, image.
- Project: id, slug, title, clientId, industryId, serviceId, location, year, description, images\[\], status, featured.
- Client: id, name, location, logoUrl, order.
- Testimonial: id, name, company, quote.
- Enquiry: id, name, company, phone, email, service, industry, location, message, fileUrl, status, notes, createdAt.
- Download: id, title, fileUrl.
- Setting: key, value.

### 1.7 API Endpoints

- Public: GET /api/services, /api/projects, /api/clients, /api/downloads; POST /api/enquiries.
- Admin (auth): full CRUD on /api/admin/{services,projects,clients,testimonials,downloads}; GET/PATCH /api/admin/enquiries; GET /api/admin/enquiries/export; POST /api/admin/upload.

### 1.8 Sitemap

/ , /about, /services, /services/\[slug\], /industries, /projects, /projects/\[slug\], /clients, /policies, /downloads, /contact, /quote, /admin/\*

### 1.9 Milestones

1. Week 1: brand, wireframes, DB schema.
2. Week 2: public pages and components.
3. Week 3: backend, enquiry flow, admin panel.
4. Week 4: SEO, QA, deploy, domain, analytics.

### 1.10 Open Items and Content Fixes

- Turnover conflict in profile: FY 2023-24 shows Rs.10 Crores on one page and Rs.8 Crores on another. Confirm correct figure before publishing.
- Typos to fix: "Anatapur" (Anantapur), "sollutions", "MAITANANCE", "bu ensuring", "safet", "corportate", "Planet and machinery" (Plant), "SHRI BENKI" is cut off.
- Turnover is declining (10 to 5 to 2 Cr). Consider showing project count and years of experience instead of a turnover chart on the public site.
- Need: phone number, GST/registration details, project photos, safety certifications (ISO if held), client permission to show logos.

## 2. Prompt: Logo and Color Palette

### 2.1 Existing Brand Read

Current logo: italic "JSS" wordmark, steel gear, transmission tower, I-beam, orange swoosh with sparkles. Colors: deep navy, orange, steel gray, bright cyan-blue. Concept is right but cluttered and has a stock-AI look. Needs simplification so it works small (favicon, stamp, helmet, letterhead).

### 2.2 Prompt for Logo (paste into Midjourney, Ideogram, or ChatGPT image)

```
Design a modern, minimal vector logo for "JSS Engineering – Steel and Power", an Indian industrial contractor (steel plants, power units, machinery erection).

Concept: bold geometric monogram "JSS" with a subtle gear tooth cut and an I-beam shape built into the letterforms; a single lightning-bolt negative space accent to signal power. Flat vector, no gradients, no 3D, no sparkles, no photo effects, no clutter.

Style: strong, industrial, trustworthy, engineered. Thick sans-serif letterforms (similar to Barlow Condensed / Rajdhani Bold). Works at 16px favicon size and embroidered on a helmet.

Colors: deep navy #0B2A4A, safety orange #F26B1D, steel gray #6B7785, on white background.

Deliver: 1) primary horizontal lockup (icon left, wordmark right, tagline "STEEL • POWER • EXECUTION" small beneath), 2) stacked lockup, 3) icon-only mark, 4) one-color black version, 5) white-on-navy reversed version. Clean vector, centered, plenty of padding, transparent or white background. No text errors, no extra letters.

Negative prompt: gradients, glow, sparkles, realistic textures, mockups, extra words, misspelled text, cartoon style, clip-art, watermark.
```

### 2.3 Color Palette

| Role | Name | Hex |
| --- | --- | --- |
| Primary | Forge Navy | #0B2A4A |
| Accent | Safety Orange | #F26B1D |
| Secondary | Steel Gray | #6B7785 |
| Highlight | Arc Blue | #1E88E5 |
| Dark surface | Furnace Black | #10151C |
| Light surface | Mill White | #F5F7FA |
| Border | Ash | #D9DFE6 |
| Success | Safe Green | #2E9E5B |
| Warning | Caution Yellow | #F2B01E |
| Error | Alert Red | #D64545 |

Usage: 60 percent Mill White and white, 25 percent Forge Navy, 10 percent Steel Gray, 5 percent Safety Orange (CTAs and key highlights only). Orange button text: use navy or white at 18px+ bold; check contrast. Body text Furnace Black on Mill White.

Fonts: Headings Barlow Condensed or Rajdhani (700). Body Inter or Source Sans 3 (400/500).

### 2.4 Palette Prompt (paste into AI tool)

```
Create a brand color system for JSS Engineering (steel and power industrial contractor, India). Base on navy #0B2A4A, safety orange #F26B1D, steel gray #6B7785. Output: 10-step tints and shades for each, semantic colors (success, warning, error, info), WCAG AA contrast pairs for text on each background, CSS variables, and a Tailwind config extension. Industrial, trustworthy, high contrast.
```

## 3. Prompt: Full Stack Web App (paste into Claude Code, Cursor, Lovable, Bolt, v0)

```
Build a production-ready full stack website for "JSS Engineering" – Consultancy Engineering & Contractor, specialists in all kinds of steel and power technologies. Office: #2/1035-4-3-A, Jayanagar Colony, Yellanur Road, Tadipatri, Anantapur, AP 515411. Email: Jssengineering04@gmail.com.

STACK: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Prisma + PostgreSQL, NextAuth (credentials), zod validation, Resend or Nodemailer for email, Cloudinary for images. Deployable on Vercel.

BRAND: Navy #0B2A4A, Safety Orange #F26B1D, Steel Gray #6B7785, Arc Blue #1E88E5, Mill White #F5F7FA, Furnace Black #10151C. Headings Barlow Condensed 700, body Inter. Industrial, bold, trustworthy look. Orange only for CTAs and highlights. Mobile first, WCAG AA.

PUBLIC PAGES: Home (hero with CTA "Request a Quote", services grid, industries strip, client logo marquee, stats [3+ years, projects delivered, plants served], why choose us [accuracy, efficiency, timely execution, highest safety standards, reliable performance], CTA band), About (vision, mission, values), Services (list + detail pages), Industries (coal mines, cement plants, sponge iron units, furnaces, rolling mills), Projects (filterable grid + detail), Clients, Policies (quality, health and safety, environment), Downloads, Contact, Quote.

SERVICES (seed data): Turnkey Machinery Installation; Industrial Civil Works and Building Work; Erection, Commissioning and Maintenance; Plant Relocation and Equipment Positioning; Machinery Unloading and Layout Marking; Foundation Works; Utility Connections (Electrical, Pneumatic, Hydraulic); Machinery Power-up and Commissioning under OEM Supervision; Structural Fabrication, Erection and Commissioning; Operation and Maintenance of DRI, Steel and Power Units.

CLIENTS (seed data): RVR Projects (Western Coalfields, Nagpur); Agroha TMT (Raigarh); Singhal Enterprises (Raigarh); MSM and SNDB Ispat and Power (Tilda); Visalakshi Industries (Hyderabad); UltraTech Cement (Tadipatri); Rayalaseema Green Steel Pvt Ltd (Kurnool); Maruthi Ispat (Mantralayam); OSM Pvt Ltd (Visakhapatnam).

FEATURES: enquiry and quote forms saved to DB, emailed to company inbox, auto-reply to sender, honeypot + rate limit; floating WhatsApp button; sticky header; click-to-call; Google Map embed; JSON-LD Organization and Service schema; sitemap.xml; robots.txt; OpenGraph tags; next/image optimization.

ADMIN (/admin, protected): login; dashboard with enquiry counts; CRUD for services, projects, clients, testimonials, downloads; enquiry inbox with status (new, contacted, quoted, closed), notes, CSV export; image upload; site settings.

DATA MODEL (Prisma): User, Service, Industry, Project, Client, Testimonial, Enquiry, Download, Setting. Include seed script with all data above and an admin user from env vars.

QUALITY: strict TypeScript, server-side validation, bcrypt, helmet-style security headers, env example file, README with setup and deploy steps, Lighthouse 90+. Use clean folder structure, reusable components, no placeholder lorem ipsum; write real concise B2B copy. Fix spelling in source copy (Anantapur, solutions, maintenance).

OUTPUT: complete working code, file by file, plus .env.example, prisma/schema.prisma, seed.ts, and run commands.
```

## 4. Next Steps

1. Generate logo with prompt 2.2, pick one, vectorize in Figma or Illustrator.
2. Lock palette in 2.3.
3. Run prompt 3 in Claude Code to scaffold the app.
4. Collect missing content from 1.10.
