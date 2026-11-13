import type { Metadata } from 'next'
import Image from 'next/image'
import { FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downloads & Technical Credentials',
  description:
    'Download JSS Engineering corporate profile, technical capability statement, and tender pre-qualification credentials for steel plant erection, civil works, and O&M.',
  openGraph: {
    title: 'Downloads & Credentials | JSS Engineering',
    description:
      'Corporate brochure, technical capability statement, and vendor qualification sheets for JSS Engineering.',
    url: 'https://jssengineering.in/downloads',
  },
  alternates: {
    canonical: 'https://jssengineering.in/downloads',
  },
}

const DOWNLOADS = [
  {
    title: 'Company Profile (PDF)',
    desc: 'Full corporate profile including services, clients, and project credentials.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=160&q=75&fit=crop',
    imageAlt: 'Corporate document folder representing company profile',
    href: '/downloads/jss-engineering-company-profile.pdf',
    size: '2.4 MB',
  },
  {
    title: 'Capability Statement',
    desc: 'Two-page summary of our technical capabilities for tender pre-qualification.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=160&q=75&fit=crop',
    imageAlt: 'Engineer reviewing technical capability documents at a desk',
    href: '/downloads/jss-engineering-capability-statement.pdf',
    size: '0.8 MB',
  },
  {
    title: 'HSE Policy Document',
    desc: 'Full Health, Safety and Environment policy for contractor evaluation.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=160&q=75&fit=crop',
    imageAlt: 'Worker in hard hat and safety gear representing HSE policy',
    href: '/policies#hse',
    size: 'View Online',
  },
]

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-700 text-sm uppercase tracking-widest">Resources</span>
          <h1 className="text-4xl md:text-5xl font-heading font-700 mt-3">Downloads</h1>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-4">
          {DOWNLOADS.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-ash rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center gap-4">
                {/* Square photo thumbnail */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-ash">
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-700 text-navy-700 group-hover:text-orange-500 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-steel-500 text-sm mt-0.5">{d.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-steel-400 text-sm shrink-0 ml-4">
                <span>{d.size}</span>
                <FileDown size={18} className="text-orange-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </a>
          ))}

          <div className="bg-navy-700 text-white rounded-xl p-6 mt-8">
            <p className="text-steel-200 text-sm">
              Need additional documentation for vendor registration or tender prequalification?{' '}
              <a href="/contact" className="text-orange-400 hover:text-orange-300 transition-colors font-heading font-700">
                Contact us
              </a>{' '}
              and we'll prepare the required documents.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

