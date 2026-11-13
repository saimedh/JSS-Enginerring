import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'

export const metadata: Metadata = { title: 'Page Not Found' }

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-heading font-700 text-navy-700 opacity-10">404</div>
      <h1 className="text-3xl font-heading font-700 text-navy-700 mt-4 mb-3">Page Not Found</h1>
      <p className="text-steel-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-primary inline-flex">
        <Home size={18} /> Back to Home
      </Link>
    </div>
  )
}

