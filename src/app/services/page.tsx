import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Complete industrial engineering services from JSS Engineering — turnkey machinery installation, plant erection, civil works, O&M, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-5">Our Services</h1>
          <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
            End-to-end industrial engineering — from site survey and civil works to full commissioning and long-term O&amp;M.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-ash rounded-xl overflow-hidden card-hover group"
              >
                {/* Photo */}
                <div className="relative h-52 w-full overflow-hidden bg-navy-900">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Index badge */}
                  <span className="absolute top-3.5 left-3.5 bg-navy-700/85 backdrop-blur-xs text-white text-xs font-heading font-bold px-3 py-1 rounded-md shadow-sm border border-white/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h2 className="font-heading font-bold text-navy-700 text-xl mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                    {s.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-orange-500 text-sm font-heading font-bold mt-4">
                    <span>Learn More</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-700 text-white py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Need a Custom Scope?</h2>
          <p className="text-steel-200 mb-6">Our team handles bespoke industrial engineering challenges. Let&apos;s talk.</p>
          <Link href="/quote" className="btn-primary">Request a Quote <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
