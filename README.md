# JSS Engineering — Full Stack Corporate Website & Admin Portal

Production-ready B2B corporate website and lead-management portal for **JSS Engineering** (industrial engineering contractor based in Tadipatri, Anantapur, Andhra Pradesh).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Industrial Palette (Navy `#0B2A4A`, Orange `#F26B1D`, Steel `#6B7785`)
- **Typography**: Rajdhani (Headings) + Inter (Body text)
- **Icons & Media**: Lucide Icons + Unsplash CDN Optimized Responsive Photography
- **Database & ORM**: PostgreSQL + Prisma ORM (Prisma Client 5.x)
- **Forms & Validation**: React State + Zod schema validation
- **Email Delivery**: Nodemailer with SMTP + Auto-responder to client + Honeypot anti-spam protection
- **Admin**: Split-pane Enquiry Inbox with Status Management, CSV Export, and Secure Session Logout

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Key variables configured in `.env`:
- `DATABASE_URL`: PostgreSQL connection string (Supabase / Neon)
- `ADMIN_EMAIL`: `admin@jssengineering.in`
- `ADMIN_PASSWORD`: `ChangeMe123!`
- `CONTACT_RECEIVER_EMAIL`: `Jssengineering04@gmail.com`
- `SMTP_*`: Gmail App Password or SMTP credentials for sending email notifications

### 3. Database Migration & Seed
```bash
npm run db:generate   # Generates Prisma Client
npm run db:push       # Syncs schema to PostgreSQL
npm run db:seed       # Populates 10 services, 5 industries, 9 clients, and settings
```

### 4. Development Server
```bash
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)

### 5. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🌐 Public Routes (All 100% SSG / Pre-rendered)

- `/` — Homepage: Hero with trust badges, stats strip, Services photo grid, Industries sector cards, Clients marquee, Why Choose Us, CTA band.
- `/about` — About Us: Company story from Tadipatri, Vision, Mission, and Core Values with high-resolution photography.
- `/services` — Services catalog index with indexed photo cards.
- `/services/[slug]` — 10 dedicated service detail pages with laser-alignment precision specs, key benefits, and clients served.
- `/industries` — Sectors We Serve (Coal Mines, Cement Plants, Sponge Iron DRI, Furnaces, Rolling Mills) with full-height photo banners and reference clients.
- `/projects` — Case study portfolio with featured tags, client names, and sector imagery.
- `/clients` — Verified client roster (UltraTech, Western Coalfields, Rayalaseema Green Steel, etc.).
- `/policies` — Quality, HSE, and Environmental policies with full-width banner images.
- `/downloads` — Technical resources, Capability statement, and Company Profile PDF.
- `/contact` — Interactive Tadipatri Google Maps embed, phone, email, WhatsApp link, and contact enquiry form.
- `/quote` — Comprehensive Request a Quote multi-field form with service selection, timeline, and location.
- `/sitemap.xml` & `/robots.txt` — Complete SEO index covering all routes.

---

## 🔐 Admin Console

- **URL**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Login URL**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Credentials**:
  - **Email**: `admin@jssengineering.in`
  - **Password**: `ChangeMe123!`
- **Enquiries Inbox**: [http://localhost:3000/admin/enquiries](http://localhost:3000/admin/enquiries)
  - Split-pane interface: list view on left, detailed enquiry inspection on right
  - Filter by status (`NEW`, `CONTACTED`, `QUOTED`, `CLOSED`)
  - Live status updater and internal notes persistence
  - 1-click **Export CSV** for offline spreadsheet reporting
  - One-click **Sign Out** button

---

## 🚢 Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Root Directory to `jss-engineering`.
4. Add the environment variables from `.env` in the Vercel project settings:
   - `DATABASE_URL` (from Neon or Supabase)
   - `ADMIN_EMAIL` & `ADMIN_PASSWORD`
   - `SMTP_USER` & `SMTP_PASS`
   - `NEXT_PUBLIC_SITE_URL` (your custom domain e.g. `https://jssengineering.in`)
5. Deploy! Automatic SSL, CDN, and high-performance edge distribution are included.
      enquiries/route.ts  ← POST enquiry (email + DB save)
    sitemap.ts
    robots.ts
  components/
    Header.tsx
    Footer.tsx
    WhatsAppButton.tsx
  lib/
    utils.ts              ← Constants + helpers
prisma/
  schema.prisma
  seed.ts
```

## Deployment (Vercel)

1. Push to GitHub
2. Import into Vercel
3. Add environment variables in Vercel dashboard
4. Set `DATABASE_URL` to your Supabase/Neon connection string
5. Run `npx prisma db push` and `npx prisma db seed` once from local or via Vercel build hook

## Email Setup

Use Gmail App Password (not your main password):
- Google Account → Security → 2-Step Verification → App passwords → Generate

## Content To Add Before Go-Live
- [ ] Real phone number (update in Header, Footer, Contact page, WhatsApp button)
- [ ] GST / registration number
- [ ] Project photos (replace placeholder cards)
- [ ] Client logos (add `logoUrl` to seed data)
- [ ] Google Maps embed URL in Contact page
- [ ] Confirm turnover figure (Rs.8 Cr or Rs.10 Cr for FY 2023-24)
- [ ] Safety certifications (ISO if held)
- [ ] Company profile PDF in `/public/downloads/`
