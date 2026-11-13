'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-orange-50 border-4 border-orange-200 flex items-center justify-center mb-6">
        <AlertTriangle size={36} className="text-orange-500" />
      </div>
      <h1 className="text-2xl font-heading font-700 text-navy-700 mb-3">Something went wrong</h1>
      <p className="text-steel-500 mb-6">An unexpected error occurred. Please try again.</p>
      <div className="flex gap-4">
        <button onClick={reset} className="btn-primary">Try Again</button>
        <Link href="/" className="btn-outline">Go Home</Link>
      </div>
    </div>
  )
}

