import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(150).optional(),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(100),
  service: z.string().trim().max(150).optional(),
  industry: z.string().trim().max(150).optional(),
  location: z.string().trim().max(150).optional(),
  timeline: z.string().trim().max(100).optional(),
  message: z.string().trim().min(5).max(5000),
  website: z.string().optional(), // honeypot
  type: z.string().trim().max(50).optional(),
})

// Simple in-memory rate limit (per IP, 5 req/15 min)
const rateMap = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const window = 15 * 60 * 1000
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + window })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes before submitting again.' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })

  // Honeypot anti-spam check
  if (body.website) {
    return NextResponse.json({ ok: true }) // silently discard bot submission
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation error', issues: parsed.error.issues }, { status: 422 })
  }

  const data = parsed.data

  // Try to save to DB if Prisma is available
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    await prisma.enquiry.create({
      data: {
        name: data.name,
        company: data.company ?? null,
        phone: data.phone,
        email: data.email,
        service: data.service ?? null,
        industry: data.industry ?? null,
        location: data.location ?? null,
        message: data.message,
        status: 'NEW',
      },
    })
    await prisma.$disconnect()
  } catch (e) {
    // DB not configured yet — log and continue
    console.warn('DB save skipped:', e)
  }

  // Send notification email if SMTP is configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })

      const safeName = escapeHtml(data.name)
      const safeCompany = data.company ? escapeHtml(data.company) : '—'
      const safePhone = escapeHtml(data.phone)
      const safeEmail = escapeHtml(data.email)
      const safeService = data.service ? escapeHtml(data.service) : '—'
      const safeIndustry = data.industry ? escapeHtml(data.industry) : '—'
      const safeLocation = data.location ? escapeHtml(data.location) : '—'
      const safeMessage = escapeHtml(data.message)

      // Notification to JSS
      await transporter.sendMail({
        from: `"JSS Website" <${process.env.SMTP_USER}>`,
        to: 'Jssengineering04@gmail.com',
        subject: `New Enquiry from ${safeName} — ${safeCompany}`,
        html: `
          <h2>New Enquiry via jssengineering.in</h2>
          <table border="0" cellpadding="6">
            <tr><td><b>Name:</b></td><td>${safeName}</td></tr>
            <tr><td><b>Company:</b></td><td>${safeCompany}</td></tr>
            <tr><td><b>Phone:</b></td><td>${safePhone}</td></tr>
            <tr><td><b>Email:</b></td><td>${safeEmail}</td></tr>
            <tr><td><b>Service:</b></td><td>${safeService}</td></tr>
            <tr><td><b>Industry:</b></td><td>${safeIndustry}</td></tr>
            <tr><td><b>Location:</b></td><td>${safeLocation}</td></tr>
            <tr><td><b>Message:</b></td><td>${safeMessage}</td></tr>
          </table>
        `,
      })

      // Auto-reply to enquirer
      await transporter.sendMail({
        from: `"JSS Engineering" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: 'Thank you for your enquiry — JSS Engineering',
        html: `
          <p>Dear ${safeName},</p>
          <p>Thank you for reaching out to <strong>JSS Engineering</strong>. We have received your enquiry and our team will get back to you within one business day.</p>
          <p>If you need immediate assistance, please call us at <strong>+91 98765 43210</strong> or reply to this email.</p>
          <br>
          <p>Warm regards,<br><strong>JSS Engineering</strong><br>Steel • Power • Execution<br>Tadipatri, Anantapur, AP 515411</p>
        `,
      })
    } catch (e) {
      console.error('Email send failed:', e)
    }
  }

  return NextResponse.json({ ok: true })
}


