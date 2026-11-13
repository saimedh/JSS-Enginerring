import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'JSS Engineering serves heavy industrial sectors across India: Coal Mines, Cement Plants, Sponge Iron (DRI), Induction Furnaces, and Rolling Mills. Turnkey plant engineering and commissioning.',
  openGraph: {
    title: 'Industries We Serve | JSS Engineering',
    description:
      'Serving coal mines, cement plants, sponge iron (DRI) units, furnaces, and rolling mills across India with turnkey engineering and O&M.',
    url: 'https://jssengineering.in/industries',
  },
  alternates: {
    canonical: 'https://jssengineering.in/industries',
  },
}

const INDUSTRY_DETAILS = [
  {
    slug: 'coal-mines',
    title: 'Coal Mines',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&fit=crop',
    imageAlt: 'Coal mine conveyor and handling plant at an open-cast mining site',
    summary: 'Supporting coal handling plant erection and conveyor systems for underground and open-cast mining operations.',
    detail: 'Coal handling plants demand robust conveyor systems, crusher installations, and dust-suppression infrastructure. JSS Engineering provides erection and commissioning of coal handling plant (CHP) equipment, including belt conveyors, bucket elevators, vibrating screens, and dust-extraction systems.',
    client: 'RVR Projects (Western Coalfields, Nagpur)',
  },
  {
    slug: 'cement-plants',
    title: 'Cement Plants',
    image: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?w=600&q=75&fit=crop',
    imageAlt: 'Large cement plant with silos and industrial structures',
    summary: 'Machinery installation and civil works for cement clinker and grinding units across India.',
    detail: 'Cement plants require precise installation of ball mills, roller presses, separators, and pyro-process equipment. Our teams have worked at UltraTech Cement\'s Tadipatri integrated plant, gaining deep expertise in cement plant installation standards and safety protocols.',
    client: 'UltraTech Cement (Tadipatri)',
  },
  {
    slug: 'sponge-iron-dri',
    title: 'Sponge Iron (DRI) Units',
    image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=600&q=75&fit=crop',
    imageAlt: 'Sponge iron DRI rotary kiln at a steel plant',
    summary: 'Specialist O&M and erection services for DRI rotary kilns and waste-heat recovery systems.',
    detail: 'Direct Reduced Iron (DRI) rotary kilns are among the most demanding pieces of industrial equipment to operate and maintain. JSS Engineering provides erection, alignment, and commissioning of DRI kilns and coolers, along with long-term O&M contracts that include shell inspection, tyre and thrust-roller maintenance, and refractory management.',
    client: 'Rayalaseema Green Steel (Kurnool)',
  },
  {
    slug: 'furnaces',
    title: 'Furnaces & Induction Melting',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&fit=crop',
    imageAlt: 'Molten metal pouring from an induction furnace at a steel plant',
    summary: 'Installation and commissioning of induction furnaces, arc furnaces, and ladle refining units.',
    detail: 'Induction furnaces and electric arc furnaces require precise electrical and mechanical installation to operate safely and efficiently. We coordinate with power electronics OEMs, install bus-bars and cable trays, commission cooling circuits, and conduct load trials — all within tight safety envelopes.',
    client: 'MSM & SNDB Ispat and Power (Tilda)',
  },
  {
    slug: 'rolling-mills',
    title: 'Rolling Mills',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=75&fit=crop',
    imageAlt: 'Hot steel billet passing through rolling mill stands',
    summary: 'Complete turnkey installation of TMT bar and structural steel rolling mills.',
    detail: 'Rolling mill installation demands millimetre-level alignment of mill stands, shears, cooling beds, and coiling equipment. JSS Engineering has installed and commissioned TMT bar rolling mills for clients in Chhattisgarh and Andhra Pradesh, delivering plants that meet production targets from first heat.',
    client: 'Agroha TMT (Raigarh) · Singhal Enterprises',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-700 text-sm uppercase tracking-widest">Sectors We Serve</span>
          <h1 className="text-4xl md:text-5xl font-heading font-700 mt-3 mb-5">Industries</h1>
          <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
            Our expertise spans five core heavy-industry verticals across India — each with its own technical demands and safety requirements.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          {INDUSTRY_DETAILS.map((ind) => (
            <div
              key={ind.slug}
              id={ind.slug}
              className="bg-white border border-ash rounded-2xl overflow-hidden grid md:grid-cols-3 scroll-mt-20 card-hover group shadow-sm hover:shadow-xl transition-all duration-400"
            >
              {/* Photo column */}
              <div className="relative h-56 md:h-auto md:col-span-1 overflow-hidden bg-navy-900">
                <Image
                  src={ind.image}
                  alt={ind.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-800/70 via-navy-800/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              {/* Text + aside */}
              <div className="md:col-span-2 p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="section-title mb-3">{ind.title}</h2>
                  <p className="text-steel-500 mb-4">{ind.summary}</p>
                  <p className="text-steel-600 text-sm leading-relaxed">{ind.detail}</p>
                </div>
                <div className="bg-mill rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-heading font-700 text-orange-500 uppercase tracking-widest mb-2">Reference Client</div>
                    <p className="text-navy-700 font-heading font-700 text-sm">{ind.client}</p>
                  </div>
                  <Link href="/contact" className="btn-outline mt-6 justify-center">
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

