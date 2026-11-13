import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Heart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Industrial Engineering Contractor',
  description:
    'Learn about JSS Engineering — company history, leadership vision, mission, and core values. Trusted contractor for steel plant erection, civil works, and O&M based in Tadipatri, Anantapur, AP.',
  openGraph: {
    title: 'About JSS Engineering | Tadipatri, AP',
    description:
      'Industrial engineering contractor specialized in steel plant erection, DRI kilns, and machinery installation across India.',
    url: 'https://jssengineering.in/about',
  },
  alternates: {
    canonical: 'https://jssengineering.in/about',
  },
}

const VALUES = [
  {
    title: 'Precision',
    desc: 'Every weld, bolt, and alignment is executed to exact specification.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75&fit=crop',
    imageAlt: 'Engineer using precision measurement instrument on industrial equipment',
  },
  {
    title: 'Safety First',
    desc: 'HSE is non-negotiable. We protect our people, your plant, and the environment.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=75&fit=crop',
    imageAlt: 'Worker in full PPE safety gear at an industrial construction site',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We plan rigorously and execute with discipline to meet every milestone.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75&fit=crop',
    imageAlt: 'Project manager reviewing schedule and timeline at a desk',
  },
  {
    title: 'Client Partnership',
    desc: 'Long-term relationships built on transparency and consistent performance.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=75&fit=crop',
    imageAlt: 'Engineers and clients shaking hands at a project handover',
  },
  {
    title: 'Engineering Excellence',
    desc: 'OEM-qualified teams using proven methods for every scope of work.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&q=75&fit=crop',
    imageAlt: 'Engineers reviewing technical drawings and schematics at a plant',
  },
  {
    title: 'Sustainable Practices',
    desc: 'Responsible environmental stewardship in every project we undertake.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=75&fit=crop',
    imageAlt: 'Green industrial landscape with responsible environmental practices',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest">About JSS Engineering</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-5 max-w-2xl">
            Steel and Power Engineering, Done Right
          </h1>
          <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
            Founded in Tadipatri, Anantapur, Andhra Pradesh, JSS Engineering has established itself
            as a trusted industrial contractor for steel plants, DRI units, power plants, and cement plants
            across India — delivering projects with accuracy, efficiency, and an unblemished safety record.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-heading font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="section-title mt-2 mb-5">From Tadipatri to Plants Across India</h2>
            <div className="space-y-4 text-steel-600 leading-relaxed">
              <p>
                JSS Engineering was established with a single focus: to solve the most demanding machinery
                installation and commissioning challenges that India&apos;s steel and power sector faces.
              </p>
              <p>
                Starting with smaller erection scopes in Andhra Pradesh, we steadily built a reputation for
                precision alignment, disciplined project management, and zero-incident safety performance.
                That reputation opened doors at UltraTech Cement&apos;s Tadipatri plant, Western Coalfields
                (via RVR Projects), and green-steel pioneers like Rayalaseema Green Steel.
              </p>
              <p>
                Today, our teams operate from coal mines in Nagpur to rolling mills in Chhattisgarh —
                always delivering the same standard: engineered to spec, finished on time, handed over safe.
              </p>
            </div>
            <div className="mt-8 flex gap-10">
              <div>
                <div className="text-3xl font-heading font-bold text-orange-500">3+</div>
                <div className="text-sm text-steel-500">Years of Operation</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-orange-500">50+</div>
                <div className="text-sm text-steel-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-orange-500">9+</div>
                <div className="text-sm text-steel-500">Major Clients</div>
              </div>
            </div>
          </div>
          <div className="bg-navy-700 rounded-2xl p-8 text-white space-y-6">
            <div>
              <div className="flex items-center gap-2 text-orange-400 font-heading font-bold text-sm uppercase tracking-widest mb-2">
                <Eye size={16} /> Vision
              </div>
              <p className="text-steel-200 leading-relaxed">
                To be India&apos;s most reliable industrial engineering partner — the team plants call first
                when precision, safety, and timely execution matter most.
              </p>
            </div>
            <div className="border-t border-navy-600" />
            <div>
              <div className="flex items-center gap-2 text-orange-400 font-heading font-bold text-sm uppercase tracking-widest mb-2">
                <Target size={16} /> Mission
              </div>
              <p className="text-steel-200 leading-relaxed">
                To deliver end-to-end machinery installation, commissioning, and maintenance services
                that maximise plant uptime, protect people, and create lasting value for our clients.
              </p>
            </div>
            <div className="border-t border-navy-600" />
            <div>
              <div className="flex items-center gap-2 text-orange-400 font-heading font-bold text-sm uppercase tracking-widest mb-2">
                <Heart size={16} /> Values
              </div>
              <p className="text-steel-200 leading-relaxed">
                Precision. Safety. Integrity. Reliability. Continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-heading font-bold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white border border-ash rounded-xl overflow-hidden card-hover group shadow-sm flex flex-col justify-between">
                {/* Photo */}
                <div className="relative h-44 w-full overflow-hidden bg-navy-900">
                  <Image
                    src={v.image}
                    alt={v.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy-700 text-xl mb-2 group-hover:text-orange-500 transition-colors duration-200">{v.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-orange-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">Work With a Team That Delivers</h2>
          <p className="text-orange-100 mb-6">Get in touch to discuss your next project.</p>
          <Link href="/contact" className="bg-white text-orange-600 font-heading font-bold px-7 py-3 rounded hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
