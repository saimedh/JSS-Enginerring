'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowLeft, Download, Search, Phone, Mail, MapPin, Calendar, RefreshCw, Save, Check } from 'lucide-react'
import AdminLogoutButton from '@/components/AdminLogoutButton'
import AdminAuthCheck from '@/components/AdminAuthCheck'

type Enquiry = {
  id: string
  name: string
  company: string | null
  phone: string
  email: string
  service: string | null
  industry: string | null
  location: string | null
  message: string
  status: 'NEW' | 'CONTACTED' | 'QUOTED' | 'CLOSED'
  createdAt: string
  notes?: string
}

// Initial fallback sample data
const SAMPLE_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Venkata Raman',
    company: 'Apex Sponge Iron Ltd',
    phone: '+91 94401 23456',
    email: 'v.raman@apexsponge.com',
    service: 'Operation & Maintenance of DRI, Steel & Power Units',
    industry: 'Sponge Iron (DRI) Units',
    location: 'Bellary, Karnataka',
    message: 'We require a full O&M proposal for a 350 TPD DRI kiln and 12 MW WHRB power plant starting next quarter.',
    status: 'NEW',
    createdAt: '2026-11-12T10:30:00Z',
    notes: 'Urgent tender enquiry. Follow up requested by Monday.',
  },
  {
    id: 'enq-2',
    name: 'Suresh Kumar',
    company: 'Vishwa TMT Steels',
    phone: '+91 98260 87654',
    email: 'suresh@vishwatmt.in',
    service: 'Turnkey Machinery Installation',
    industry: 'Rolling Mills',
    location: 'Raipur, Chhattisgarh',
    message: 'Looking for turnkey installation of new 16-stand high-speed bar rolling mill with automated cooling bed.',
    status: 'CONTACTED',
    createdAt: '2026-11-10T14:15:00Z',
    notes: 'Sent preliminary technical credentials and client reference list.',
  },
  {
    id: 'enq-3',
    name: 'Rajesh Varma',
    company: 'Deccan Cements Group',
    phone: '+91 98490 11223',
    email: 'rvarma@deccancement.com',
    service: 'Plant Relocation & Equipment Positioning',
    industry: 'Cement Plants',
    location: 'Nalgonda, Telangana',
    message: 'Need quotation for dismantling and shifting 45-tonne ball mill components to new expansion unit.',
    status: 'QUOTED',
    createdAt: '2026-11-08T09:00:00Z',
    notes: 'Formal commercial quote submitted. Awaiting purchase committee review.',
  },
]

export default function EnquiriesInboxPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(SAMPLE_ENQUIRIES)
  const [filterStatus, setFilterStatus] = useState<string>('ALL')
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(SAMPLE_ENQUIRIES[0].id)
  const [activeNotes, setActiveNotes] = useState<string>('')
  const [savingNotes, setSavingNotes] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // Fetch real database enquiries
  const loadEnquiries = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/enquiries')
      if (res.status === 401) {
        window.location.href = '/admin/login'
        return
      }
      if (res.ok) {
        const data = await res.json()
        if (data.enquiries && data.enquiries.length > 0) {
          setEnquiries(data.enquiries)
          setSelectedId((prev) => {
            if (!prev || !data.enquiries.some((e: Enquiry) => e.id === prev)) {
              return data.enquiries[0].id
            }
            return prev
          })
        }
      }
    } catch (err) {
      console.warn('Could not fetch remote enquiries, keeping sample fallback:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadEnquiries()
  }, [loadEnquiries])

  const filtered = enquiries.filter((e) => {
    const matchesStatus = filterStatus === 'ALL' || e.status === filterStatus
    const matchesSearch =
      search === '' ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      (e.company && e.company.toLowerCase().includes(search.toLowerCase())) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      (e.service && e.service.toLowerCase().includes(search.toLowerCase()))
    return matchesStatus && matchesSearch
  })

  const selected = enquiries.find((e) => e.id === selectedId) || filtered[0]

  useEffect(() => {
    if (selected) {
      setActiveNotes(selected.notes || '')
    }
  }, [selected])

  const updateStatus = async (id: string, newStatus: Enquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    )
    try {
      await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
    } catch (err) {
      console.error('Failed to update status on server:', err)
    }
  }

  const handleSaveNotes = async () => {
    if (!selected) return
    setSavingNotes(true)
    try {
      await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selected.id, notes: activeNotes }),
      })
      setEnquiries((prev) =>
        prev.map((item) => (item.id === selected.id ? { ...item, notes: activeNotes } : item))
      )
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 2000)
    } catch (err) {
      console.error('Failed to save notes:', err)
    } finally {
      setSavingNotes(false)
    }
  }

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Company', 'Phone', 'Email', 'Service', 'Industry', 'Location', 'Status', 'Message']
    const rows = filtered.map((e) => [
      e.id,
      new Date(e.createdAt).toLocaleDateString(),
      `"${e.name.replace(/"/g, '""')}"`,
      `"${(e.company || '').replace(/"/g, '""')}"`,
      e.phone,
      e.email,
      `"${(e.service || '').replace(/"/g, '""')}"`,
      `"${(e.industry || '').replace(/"/g, '""')}"`,
      `"${(e.location || '').replace(/"/g, '""')}"`,
      e.status,
      `"${e.message.replace(/"/g, '""')}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `jss-enquiries-${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const statusBadge = (st: Enquiry['status']) => {
    switch (st) {
      case 'NEW':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'CONTACTED':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'QUOTED':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'CLOSED':
        return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  return (
    <AdminAuthCheck>
      <div className="py-8 bg-mill min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-ash gap-4">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="p-2 rounded-lg bg-white border border-ash hover:bg-mill transition-colors shadow-xs">
              <ArrowLeft size={18} className="text-navy-700" />
            </Link>
            <div>
              <h1 className="text-2xl font-heading font-bold text-navy-700">Enquiries &amp; Leads</h1>
              <p className="text-steel-500 text-xs mt-0.5">Manage and track inbound project requests</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={loadEnquiries}
              disabled={loading}
              className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
              title="Refresh inbox"
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
            <button
              onClick={exportCSV}
              className="btn-outline text-xs py-2 px-3.5 flex items-center gap-2"
            >
              <Download size={14} /> Export CSV
            </button>
            <AdminLogoutButton />
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {['ALL', 'NEW', 'CONTACTED', 'QUOTED', 'CLOSED'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                  filterStatus === st
                    ? 'bg-navy-700 text-white shadow-xs'
                    : 'bg-white border border-ash text-steel-600 hover:bg-mill'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3 top-2.5 text-steel-400" />
            <input
              type="text"
              placeholder="Search enquiries…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-ash rounded-lg pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Main split-pane content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* List panel */}
          <div className="lg:col-span-5 bg-white border border-ash rounded-xl p-3 max-h-[640px] overflow-y-auto space-y-2 shadow-xs">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-steel-400 text-sm">
                No enquiries matching your search or filter.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    selected?.id === item.id
                      ? 'border-orange-500 bg-orange-50/30 shadow-xs'
                      : 'border-ash hover:border-steel-300 hover:bg-mill'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-heading font-bold text-navy-700 text-sm">{item.name}</span>
                    <span className={`text-[10px] font-heading font-bold px-2 py-0.5 rounded border ${statusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs text-steel-500 truncate mb-1">
                    {item.company || 'Direct Contact'} · {item.email}
                  </div>
                  <div className="text-xs text-steel-600 line-clamp-2 mb-2 font-body">
                    {item.message}
                  </div>
                  <div className="text-[10px] text-steel-400 flex items-center justify-between pt-1 border-t border-ash/60">
                    <span>{item.service || 'General Scope'}</span>
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-7 bg-white border border-ash rounded-xl p-6 shadow-xs flex flex-col justify-between">
            {selected ? (
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-ash gap-3">
                  <div>
                    <h2 className="text-xl font-heading font-bold text-navy-700">{selected.name}</h2>
                    <p className="text-steel-500 text-sm">{selected.company || 'Individual / Contractor'}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-heading font-semibold text-steel-500">Status:</label>
                    <select
                      value={selected.status}
                      onChange={(e) => updateStatus(selected.id, e.target.value as Enquiry['status'])}
                      className="bg-white border border-ash rounded-lg px-2.5 py-1 text-xs font-heading font-semibold text-navy-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUOTED">QUOTED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>
                </div>

                {/* Contact information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2 text-steel-600 bg-mill p-3 rounded-lg border border-ash">
                    <Phone size={15} className="text-orange-500" />
                    <a href={`tel:${selected.phone}`} className="hover:underline font-medium">
                      {selected.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-steel-600 bg-mill p-3 rounded-lg border border-ash">
                    <Mail size={15} className="text-orange-500" />
                    <a href={`mailto:${selected.email}`} className="hover:underline font-medium truncate">
                      {selected.email}
                    </a>
                  </div>
                  {selected.location && (
                    <div className="flex items-center gap-2 text-steel-600 bg-mill p-3 rounded-lg border border-ash">
                      <MapPin size={15} className="text-orange-500" />
                      <span>{selected.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-steel-600 bg-mill p-3 rounded-lg border border-ash">
                    <Calendar size={15} className="text-orange-500" />
                    <span>Submitted: {new Date(selected.createdAt).toLocaleString()}</span>
                  </div>
                </div>

                {/* Scope details */}
                <div className="space-y-3 bg-mill p-4 rounded-xl border border-ash text-xs">
                  <div>
                    <span className="font-heading font-bold text-steel-500 uppercase tracking-wide">Required Service:</span>
                    <p className="font-medium text-navy-700 mt-0.5">{selected.service || 'Not specified'}</p>
                  </div>
                  {selected.industry && (
                    <div>
                      <span className="font-heading font-bold text-steel-500 uppercase tracking-wide">Industry Sector:</span>
                      <p className="font-medium text-navy-700 mt-0.5">{selected.industry}</p>
                    </div>
                  )}
                </div>

                {/* Full Message */}
                <div>
                  <h3 className="font-heading font-bold text-xs uppercase tracking-wide text-steel-500 mb-2">
                    Enquiry Details &amp; Scope Message
                  </h3>
                  <div className="p-4 rounded-xl border border-ash bg-white text-sm text-steel-700 leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wide text-steel-500">
                      Internal Admin Notes
                    </h3>
                    {saveSuccess && (
                      <span className="text-xs text-green-600 flex items-center gap-1 font-medium">
                        <Check size={13} /> Notes saved
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={3}
                    value={activeNotes}
                    onChange={(e) => setActiveNotes(e.target.value)}
                    placeholder="Add follow-up notes, tender deadlines, or quotation reference numbers..."
                    className="w-full border border-ash rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={handleSaveNotes}
                      disabled={savingNotes}
                      className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <Save size={13} />
                      <span>{savingNotes ? 'Saving…' : 'Save Notes'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-steel-400 text-sm">
                Select an enquiry from the list to view full details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </AdminAuthCheck>
)
}
