'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function verify() {
      try {
        const res = await fetch('/api/admin/check')
        if (!res.ok) {
          if (isMounted) {
            router.push('/admin/login')
          }
          return
        }
        if (isMounted) {
          setAuthenticated(true)
          setChecking(false)
        }
      } catch {
        if (isMounted) {
          router.push('/admin/login')
        }
      }
    }

    verify()

    return () => {
      isMounted = false
    }
  }, [router])

  if (checking) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-mill">
        <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-steel-600 text-xs font-heading font-semibold">
          Verifying administrator credentials...
        </p>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return <>{children}</>
}

