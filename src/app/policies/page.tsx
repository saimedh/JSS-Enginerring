import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Quality, HSE & Environmental Policies',
  description:
    'JSS Engineering Quality Policy and Health, Safety & Environment (HSE) standards. Strict compliance, Zero-Harm commitment, and OEM-tolerance benchmarks across industrial sites.',
  openGraph: {
    title: 'Quality & HSE Policies | JSS Engineering',
    description:
      'Rigorous quality management and zero-harm safety standards for steel plant erection, civil works, and commissioning across India.',
    url: 'https://jssengineering.in/policies',
  },
  alternates: {
    canonical: 'https://jssengineering.in/policies',
  },
}

const POLICIES = [
  {
    id: 'quality',
    title: 'Quality Policy',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75&fit=crop',
    imageAlt: 'Quality inspection of industrial equipment with precision instruments',
    content: (
      <>
        <p>
          JSS Engineering is committed to delivering industrial engineering services that consistently meet
          or exceed the technical requirements, safety standards, and timelines agreed with our clients.
        </p>
        <p>
          We achieve this through rigorous planning, qualified personnel, OEM-compliant execution methods,
          and a culture of continuous improvement. Every project receives a formal quality plan, inspection
          hold points, and documented sign-off at each milestone.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Inspection and Test Plans (ITPs) for all major scopes</li>
          <li>Third-party inspection where specified by contract</li>
          <li>Non-conformance tracking and root-cause analysis</li>
          <li>Client feedback incorporated into project-close reviews</li>
        </ul>
      </>
    ),
  },
  {
    id: 'hse',
    title: 'Health, Safety & Environment Policy',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=75&fit=crop',
    imageAlt: 'Worker in hard hat and safety gear at an industrial plant site',
    content: (
      <>
        <p>
          The health and safety of our personnel, clients&apos; employees, and the public is our highest priority.
          JSS Engineering operates a zero-tolerance policy for unsafe acts and conditions.
        </p>
        <p>
          Every site operates under a Site Safety Plan (SSP) compliant with applicable Indian regulations
          (Factories Act, Building and Other Construction Workers Act, Environment Protection Act).
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Mandatory safety induction for all site personnel</li>
          <li>Daily toolbox talks and permit-to-work system</li>
          <li>Personal protective equipment (PPE) mandatory at all times</li>
          <li>Incident reporting and investigation within 24 hours</li>
          <li>Regular emergency-response drills</li>
        </ul>
      </>
    ),
  },
  {
    id: 'environment',
    title: 'Environment Policy',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=75&fit=crop',
    imageAlt: 'Green natural landscape representing environmental responsibility',
    content: (
      <>
        <p>
          We recognise our responsibility to minimise the environmental impact of our construction and
          maintenance activities. Our environmental management approach is integrated into every project plan.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Waste segregation and proper disposal at all sites</li>
          <li>Dust and noise mitigation during civil and erection works</li>
          <li>Spill prevention and containment for oils and chemicals</li>
          <li>Preference for local material and labour sourcing to reduce transport impact</li>
          <li>Compliance with all applicable environmental regulations</li>
        </ul>
      </>
    ),
  },
]

export default function PoliciesPage() {
  return (
    <>
      <section className="bg-navy-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest">Our Commitments</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-5">Policies</h1>
        </div>
      </section>

      <section className="py-16 bg-mill">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
          {POLICIES.map((policy) => (
            <div key={policy.id} id={policy.id} className="bg-white border border-ash rounded-2xl overflow-hidden scroll-mt-20">
              {/* Full-width banner photo */}
              <div className="relative h-52 w-full">
                <Image
                  src={policy.image}
                  alt={policy.imageAlt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-700/80 to-navy-700/30 flex items-end p-6">
                  <h2 className="text-2xl font-heading font-bold text-white">{policy.title}</h2>
                </div>
              </div>
              {/* Body */}
              <div className="p-8 text-steel-600 leading-relaxed space-y-4">
                {policy.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
