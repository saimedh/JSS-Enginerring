import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(7),
  email: z.string().email(),
  service: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(5),
  website: z.string().optional(), // honeypot
  type: z.string().optional(),
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
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 })

  // Honeypot
  if (body.website) {
    return NextResponse.json({ ok: true }) // silently discard
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

      // Notification to JSS
      await transporter.sendMail({
        from: `"JSS Website" <${process.env.SMTP_USER}>`,
        to: 'Jssengineering04@gmail.com',
        subject: `New Enquiry from ${data.name} — ${data.company ?? 'Unknown Company'}`,
        html: `
          <h2>New Enquiry via jssengineering.in</h2>
          <table border="0" cellpadding="6">
            <tr><td><b>Name:</b></td><td>${data.name}</td></tr>
            <tr><td><b>Company:</b></td><td>${data.company ?? '—'}</td></tr>
            <tr><td><b>Phone:</b></td><td>${data.phone}</td></tr>
            <tr><td><b>Email:</b></td><td>${data.email}</td></tr>
            <tr><td><b>Service:</b></td><td>${data.service ?? '—'}</td></tr>
            <tr><td><b>Industry:</b></td><td>${data.industry ?? '—'}</td></tr>
            <tr><td><b>Location:</b></td><td>${data.location ?? '—'}</td></tr>
            <tr><td><b>Message:</b></td><td>${data.message}</td></tr>
          </table>
        `,
      })

      // Auto-reply to enquirer
      await transporter.sendMail({
        from: `"JSS Engineering" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: 'Thank you for your enquiry — JSS Engineering',
        html: `
          <p>Dear ${data.name},</p>
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

