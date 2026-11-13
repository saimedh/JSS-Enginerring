'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { SERVICES, INDUSTRIES } from '@/lib/utils'

export default function QuotePage() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    service: '', industry: '', location: '', timeline: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'quote' }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-700 text-sm uppercase tracking-widest">Start a Project</span>
          <h1 className="text-4xl md:text-5xl font-heading font-700 mt-3 mb-5">Request a Quote</h1>
          <p className="text-steel-200 text-lg max-w-xl leading-relaxed">
            Fill in the details below and our team will respond with a preliminary assessment within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl border border-ash p-8 md:p-10">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                </div>
                <h2 className="font-heading font-700 text-navy-700 text-2xl mb-3">Quote Request Received!</h2>
                <p className="text-steel-500 max-w-sm mx-auto">
                  Thank you. Our team will review your requirements and reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <h2 className="font-heading font-700 text-navy-700 text-lg mb-4 pb-3 border-b border-ash">
                    Your Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Your name', required: true },
                      { name: 'company', label: 'Company / Plant Name', placeholder: 'Organisation', required: true },
                      { name: 'phone', label: 'Phone', placeholder: '+91 …', required: true },
                      { name: 'email', label: 'Email', placeholder: 'you@company.com', required: true, type: 'email' },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                          {f.label} {f.required && <span className="text-orange-500">*</span>}
                        </label>
                        <input
                          type={f.type ?? 'text'}
                          name={f.name}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.name]}
                          onChange={handle}
                          className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-700 text-navy-700 text-lg mb-4 pb-3 border-b border-ash">
                    Project Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="service" value={form.service} onChange={handle}
                        className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                      >
                        <option value="">Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                        Industry
                      </label>
                      <select
                        name="industry" value={form.industry} onChange={handle}
                        className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                      >
                        <option value="">Select industry…</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i.slug} value={i.title}>{i.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                        Project Location
                      </label>
                      <input
                        name="location" value={form.location} onChange={handle}
                        placeholder="City, State"
                        className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                        Expected Timeline
                      </label>
                      <select
                        name="timeline" value={form.timeline} onChange={handle}
                        className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                      >
                        <option value="">Select timeline…</option>
                        <option>Immediately (within 2 weeks)</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>Planning phase only</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-heading font-700 text-navy-700 uppercase tracking-wide mb-1.5">
                      Project Description <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message" required value={form.message} onChange={handle} rows={5}
                      placeholder="Describe the scope of work, equipment involved, and any specific requirements…"
                      className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-alertred text-sm">Submission failed. Please email us directly at Jssengineering04@gmail.com</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center text-base disabled:opacity-60"
                >
                  {status === 'sending' ? 'Submitting…' : <><Send size={18} /> Submit Quote Request</>}
                </button>
                <p className="text-steel-400 text-xs text-center">
                  Your details are kept confidential and used only for responding to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

