'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function AdminLogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch {
      router.push('/admin/login')
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="btn-outline text-sm py-2 px-3 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 flex items-center gap-1.5"
      title="Sign Out"
    >
      <LogOut size={15} />
      <span>Sign Out</span>
    </button>
  )
}

