import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@jssengineering.in'
    const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe123!'

    if (email === adminEmail && password === adminPassword) {
      const response = NextResponse.json({ ok: true, message: 'Logged in successfully' })
      // Simple auth cookie for session
      response.cookies.set('jss_admin_token', 'authenticated_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
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

