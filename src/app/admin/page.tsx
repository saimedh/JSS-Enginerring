import Link from 'next/link'
import Image from 'next/image'
import { Inbox, FolderKanban, Users, FileText, ArrowRight } from 'lucide-react'
import AdminLogoutButton from '@/components/AdminLogoutButton'
import AdminAuthCheck from '@/components/AdminAuthCheck'

export const metadata = {
  title: 'Admin Dashboard | JSS Engineering',
}

export default function AdminDashboardPage() {
  const cards = [
    {
      title: 'Enquiries Inbox',
      desc: 'View, filter, update statuses, and export client requests & quotes.',
      icon: Inbox,
      href: '/admin/enquiries',
      count: 'Active',
      color: 'bg-orange-500 text-white',
    },
    {
      title: 'Projects Directory',
      desc: 'Manage completed plant installations, erection case studies, and specs.',
      icon: FolderKanban,
      href: '/projects',
      count: '6 Items',
      color: 'bg-navy-700 text-white',
    },
    {
      title: 'Clients & Partners',
      desc: 'Manage client logos, references (UltraTech, Western Coalfields, etc.).',
      icon: Users,
      href: '/clients',
      count: '9 Clients',
      color: 'bg-navy-700 text-white',
    },
    {
      title: 'Services & Scopes',
      desc: 'Update turnkey service descriptions, capabilities, and equipment lists.',
      icon: FileText,
      href: '/services',
      count: '10 Services',
      color: 'bg-navy-700 text-white',
    },
  ]

  return (
    <AdminAuthCheck>
      <div className="py-10 bg-mill min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-ash gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 bg-white border border-ash rounded-xl p-1 shrink-0 shadow-sm overflow-hidden hidden sm:block">
              <Image
                src="/logo.png"
                alt="JSS Engineering Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <span className="text-orange-500 font-heading font-700 text-xs uppercase tracking-widest">
                Management Console
              </span>
              <h1 className="text-3xl font-heading font-700 text-navy-700 mt-1">
                JSS Admin Dashboard
              </h1>
              <p className="text-steel-500 text-sm mt-1">
                Manage website leads, project records, client references, and industrial scopes.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Link href="/" className="btn-outline text-sm py-2 px-4">
              View Public Site
            </Link>
            <AdminLogoutButton />
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.title}
                href={c.href}
                className="bg-white border border-ash rounded-xl p-6 card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-heading font-700 text-steel-400 bg-mill px-2 py-1 rounded">
                      {c.count}
                    </span>
                  </div>
                  <h2 className="font-heading font-700 text-navy-700 text-lg group-hover:text-orange-500 transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-steel-500 text-xs mt-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-ash flex items-center justify-between text-xs font-heading font-700 text-navy-700 group-hover:text-orange-500">
                  <span>Manage</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick info panel */}
        <div className="mt-10 bg-navy-700 text-white rounded-2xl p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="font-heading font-700 text-xl text-orange-400 mb-2">Lead & Enquiry Pipeline</h2>
            <p className="text-steel-200 text-sm leading-relaxed">
              Enquiries submitted through the website Request a Quote and Contact forms are automatically stored in the database and dispatched directly to <span className="text-white font-medium">Jssengineering04@gmail.com</span> with rate-limiting and anti-spam protection.
            </p>
          </div>
          <div className="text-md-right">
            <Link href="/admin/enquiries" className="btn-primary inline-flex text-sm py-2.5 px-5">
              Open Enquiries Inbox
            </Link>
          </div>
        </div>
      </div>
    </div>
  </AdminAuthCheck>
)
}
