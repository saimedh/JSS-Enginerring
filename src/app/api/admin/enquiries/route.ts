import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

function isAuthorized(req: NextRequest): boolean {
  const token = req.cookies.get('jss_admin_token')?.value
  return token === 'authenticated_admin'
}

const patchSchema = z.object({
  id: z.string().min(1),
  status: z.enum(['NEW', 'CONTACTED', 'QUOTED', 'CLOSED']).optional(),
  notes: z.string().max(5000).optional(),
})

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      { error: 'Unauthorized: Admin authentication required' },
      { status: 401 }
    )
  }

  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    })
    await prisma.$disconnect()
    return NextResponse.json({ enquiries })
  } catch {
    // If database connection is not active yet, return empty list cleanly
    return NextResponse.json({ enquiries: [] })
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      { error: 'Unauthorized: Admin authentication required' },
      { status: 401 }
    )
  }

  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
    }

    const parsed = patchSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Validation error', issues: parsed.error.issues },
        { status: 422 }
      )
    }

    const { id, status, notes } = parsed.data
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const updated = await prisma.enquiry.update({
      where: { id },
      data: {
        ...(status ? { status } : {}),
        ...(notes !== undefined ? { notes } : {}),
      },
    })
    await prisma.$disconnect()
    return NextResponse.json({ ok: true, enquiry: updated })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Failed to update enquiry' }, { status: 500 })
  }
}


