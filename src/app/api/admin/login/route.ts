import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// In-memory rate limiter for login brute-force prevention (5 attempts per 15 minutes)
const loginAttempts = new Map<string, { count: number; reset: number }>()

function checkLoginRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 mins
  const record = loginAttempts.get(ip)

  if (!record || now > record.reset) {
    loginAttempts.set(ip, { count: 1, reset: now + windowMs })
    return true
  }

  if (record.count >= 5) {
    return false
  }

  record.count++
  return true
}

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA)
    return false
  }
  return crypto.timingSafeEqual(bufA, bufB)
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'

  if (!checkLoginRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Too many failed login attempts. Please try again in 15 minutes.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body.email !== 'string' || typeof body.password !== 'string') {
      return NextResponse.json({ ok: false, message: 'Invalid credentials payload' }, { status: 400 })
    }

    const { email, password } = body
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@jssengineering.in'
    const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe123!'

    const emailMatches = safeCompare(email.trim().toLowerCase(), adminEmail.trim().toLowerCase())
    const passwordMatches = safeCompare(password, adminPassword)

    if (emailMatches && passwordMatches) {
      // Clear failed attempts upon successful login
      loginAttempts.delete(ip)

      const response = NextResponse.json({ ok: true, message: 'Logged in successfully' })
      response.cookies.set('jss_admin_token', 'authenticated_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
      return response
    }

    return NextResponse.json({ ok: false, message: 'Invalid email or password' }, { status: 401 })
  } catch {
    return NextResponse.json({ ok: false, message: 'Authentication error' }, { status: 500 })
  }
}


