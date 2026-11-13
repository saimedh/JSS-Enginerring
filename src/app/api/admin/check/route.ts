import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('jss_admin_token')?.value

  if (token === 'authenticated_admin') {
    return NextResponse.json({ authenticated: true })
  }

  return NextResponse.json({ authenticated: false, error: 'Unauthorized' }, { status: 401 })
}

