import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'JSS Engineering project portfolio — machinery installation, plant erection, and O&M across India.',
}

// Static projects – replace with DB data once backend is live
const PROJECTS = [
  {
    id: 1,
    title: 'TMT Bar Rolling Mill — Complete Turnkey Installation',
    client: 'Agroha TMT',
    location: 'Raigarh, Chhattisgarh',
    year: 2023,
    industry: 'Rolling Mills',
    service: 'Turnkey Installation',
    featured: true,
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=75&fit=crop',
    imageAlt: 'Hot steel billet rolling through mill stands',
    desc: 'Full turnkey installation of a TMT bar rolling mill including mill stands, shears, cooling beds, and coiling equipment. Commissioned within agreed schedule.',
  },
  {
    id: 2,
    title: 'Coal Handling Plant Erection',
    client: 'RVR Projects (Western Coalfields)',
    location: 'Nagpur, Maharashtra',
    year: 2024,
    industry: 'Coal Mines',
    service: 'Erection & Commissioning',
    featured: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&fit=crop',
    imageAlt: 'Coal handling plant conveyor system at mining site',
    desc: 'Erection and commissioning of coal handling plant equipment including belt conveyors, bucket elevators, and dust-extraction systems.',
  },
  {
    id: 3,
    title: 'DRI Rotary Kiln — O&M Contract',
    client: 'Rayalaseema Green Steel',
    location: 'Kurnool, Andhra Pradesh',
    year: 2024,
    industry: 'Sponge Iron (DRI)',
    service: 'O&M Services',
    featured: true,
    image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=600&q=75&fit=crop',
    imageAlt: 'DRI rotary kiln operation and maintenance at steel plant',
    desc: 'Long-term operation and maintenance contract for DRI rotary kiln and waste-heat recovery system, including preventive maintenance and breakdown response.',
  },
  {
    id: 4,
    title: 'Cement Plant Machinery Installation',
    client: 'UltraTech Cement',
    location: 'Tadipatri, Andhra Pradesh',
    year: 2022,
    industry: 'Cement Plants',
    service: 'Civil Works & Erection',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?w=600&q=75&fit=crop',
    imageAlt: 'Cement plant machinery and industrial structures',
    desc: 'Foundation works, machinery erection, and utility connections for cement plant expansion at Tadipatri integrated plant.',
  },
  {
    id: 5,
    title: 'Induction Furnace Installation',
    client: 'MSM & SNDB Ispat and Power',
    location: 'Tilda, Chhattisgarh',
    year: 2023,
    industry: 'Furnaces',
    service: 'Turnkey Installation',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&fit=crop',
    imageAlt: 'Induction furnace installation at a steel melting shop',
    desc: 'Complete installation and OEM-supervised commissioning of induction furnace including power electronics, cooling circuit, and ladle handling.',
  },
  {
    id: 6,
    title: 'Rolling Mill Stand Relocation',
    client: 'Singhal Enterprises',
    location: 'Raigarh, Chhattisgarh',
    year: 2024,
    industry: 'Rolling Mills',
    service: 'Plant Relocation',
    featured: false,
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=75&fit=crop',
    imageAlt: 'Heavy crane lifting large industrial equipment for relocation',
    desc: 'Disassembly, transport, and re-installation of rolling mill stands at new facility location, including full recommissioning.',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-700 text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-heading font-700 mt-3 mb-5">Projects</h1>
          <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
            A selection of completed projects demonstrating our expertise across steel, DRI, cement, and coal sectors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.id} className="bg-white border border-ash rounded-xl overflow-hidden card-hover group">
                {/* Photo header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/20 to-transparent" />
                  {p.featured && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-heading font-700 px-2.5 py-1 rounded shadow">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-mill text-steel-500 border border-ash px-2 py-0.5 rounded font-heading">
                      {p.industry}
                    </span>
                    <span className="text-xs bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded font-heading">
                      {p.service}
                    </span>
                  </div>
                  <h3 className="font-heading font-700 text-navy-700 text-lg leading-snug mb-2">{p.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="border-t border-ash pt-4 flex justify-between text-xs text-steel-400">
                    <span>{p.client}</span>
                    <span>{p.location} · {p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-steel-500 mb-4">
              More project details available on request for tender prequalification.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Request Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

