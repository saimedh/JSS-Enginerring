import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
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
  try {
    const { id, status, notes } = await req.json()
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

