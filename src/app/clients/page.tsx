import type { Metadata } from 'next'
import { CLIENTS } from '@/lib/utils'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Clients & Industrial Partners',
  description:
    "Trusted by leading industrial operators across India including UltraTech Cement, Western Coalfields (RVR Projects), Rayalaseema Green Steel, Agroha TMT, and Singhal Enterprises.",
  openGraph: {
    title: 'Client Portfolio | JSS Engineering',
    description:
      'Delivering plant erection and commissioning for UltraTech Cement, Western Coalfields, and major steel/power plants across India.',
    url: 'https://jssengineering.in/clients',
  },
  alternates: {
    canonical: 'https://jssengineering.in/clients',
  },
}

export default function ClientsPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-700 text-sm uppercase tracking-widest">Who We Work With</span>
          <h1 className="text-4xl md:text-5xl font-heading font-700 mt-3 mb-5">Our Clients</h1>
          <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
            From major cement manufacturers to emerging green-steel pioneers, JSS Engineering has delivered for some of India's most demanding industrial operators.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-ash rounded-xl p-7 card-hover"
              >
                {/* Logo placeholder */}
                <div className="w-16 h-16 rounded-lg bg-navy-700 flex items-center justify-center mb-4">
                  <span className="text-orange-400 font-heading font-700 text-xl">
                    {c.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading font-700 text-navy-700 text-lg leading-snug">{c.name}</h3>
                <p className="flex items-center gap-2 text-steel-500 text-sm mt-2">
                  <MapPin size={13} className="text-orange-400" /> {c.location}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-navy-700 text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-heading font-700 mb-3">Want to Join Our Client Portfolio?</h2>
            <p className="text-steel-200 mb-6">We're always looking for new partnerships with ambitious industrial operators.</p>
            <a href="/contact" className="btn-primary inline-flex">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

