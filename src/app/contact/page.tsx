'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, RotateCcw } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setForm({ name: '', company: '', phone: '', email: '', message: '' })
    setStatus('idle')
  }

  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest bg-orange-500/15 border border-orange-400/30 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-steel-200 text-lg max-w-xl leading-relaxed">
            Reach out for project enquiries, tender pre-qualification, vendor registration, or any questions about our industrial scopes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-ash p-8 shadow-xs">
              <h2 className="section-title mb-6">Contact Information</h2>
              <ul className="space-y-5">
                <li className="flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-mill border border-transparent hover:border-ash">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-700 text-sm uppercase tracking-wide">Registered Office</div>
                    <p className="text-steel-600 text-sm mt-1 leading-relaxed">
                      #2/1035-4-3-A, Jayanagar Colony, Yellanur Road,<br />
                      Tadipatri, Anantapur District, Andhra Pradesh 515411
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-mill border border-transparent hover:border-ash">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-700 text-sm uppercase tracking-wide">Phone Direct</div>
                    <a href="tel:+919490311640" className="text-steel-600 text-sm mt-1 hover:text-orange-500 transition-colors block font-medium">
                      +91 94903 11640
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-mill border border-transparent hover:border-ash">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-700 text-sm uppercase tracking-wide">Official Email</div>
                    <a href="mailto:Jssengineering04@gmail.com" className="text-steel-600 text-sm mt-1 hover:text-orange-500 transition-colors block font-medium">
                      Jssengineering04@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-green-50/50 border border-transparent hover:border-green-200">
                  <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle size={20} className="text-green-500" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-700 text-sm uppercase tracking-wide">WhatsApp Support</div>
                    <a
                      href="https://wa.me/919490311640"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel-600 text-sm mt-1 hover:text-green-600 transition-colors block font-medium"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Interactive Map */}
            <div className="rounded-2xl overflow-hidden border border-ash bg-steel-100 h-64 relative shadow-xs">
              <iframe
                title="JSS Engineering Location"
                src="https://maps.google.com/maps?q=Tadipatri%2C%20Anantapur%20District%2C%20Andhra%20Pradesh%20515411&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-ash p-8 shadow-xs">
            <h2 className="section-title mb-6">Send Us a Message</h2>
            {status === 'sent' ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="flex justify-center mb-5">
                  <div className="w-18 h-18 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center shadow-xs">
                    <CheckCircle2 size={36} className="text-green-500" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-navy-700 text-2xl mb-2">Message Sent!</h3>
                <p className="text-steel-500 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. Our engineering team will review your enquiry and respond within one business day.
                </p>
                <button
                  onClick={resetForm}
                  className="btn-outline text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <RotateCcw size={13} /> Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-700 uppercase tracking-wide mb-1.5">
                      Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      name="name" required value={form.name} onChange={handle}
                      className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-700 uppercase tracking-wide mb-1.5">
                      Company
                    </label>
                    <input
                      name="company" value={form.company} onChange={handle}
                      className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      placeholder="Organisation / Plant name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-700 uppercase tracking-wide mb-1.5">
                      Phone <span className="text-orange-500">*</span>
                    </label>
                    <input
                      name="phone" required value={form.phone} onChange={handle}
                      className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      placeholder="+91 …"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-700 uppercase tracking-wide mb-1.5">
                      Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handle}
                      className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-navy-700 uppercase tracking-wide mb-1.5">
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="message" required value={form.message} onChange={handle} rows={5}
                    className="w-full border border-ash rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none transition-all"
                    placeholder="Tell us about your project requirements or equipment scope…"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-alertred text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                    Submission failed. Please email us directly at Jssengineering04@gmail.com or call +91 94903 11640.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 text-base"
                >
                  {status === 'sending' ? 'Sending…' : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
