import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/utils'
import { notFound } from 'next/navigation'

// All service detail data
const SERVICE_DETAILS: Record<string, {
  summary: string
  body: string[]
  benefits: string[]
  clients: string[]
}> = {
  'turnkey-machinery-installation': {
    summary: 'Complete end-to-end machinery installation from planning to commissioning.',
    body: [
      'JSS Engineering manages every phase of machinery installation projects under a single contract — giving you one accountable point of contact from start to handover.',
      'We begin with a detailed site survey and project execution plan aligned to your construction schedule. Our civil teams prepare foundations and equipment plinths while mechanical teams begin pre-assembly.',
      'Equipment is installed to millimetre-level accuracy using laser alignment tools. After mechanical completion, our commissioning team runs dry tests, load trials, and OEM acceptance checks before formal handover.',
    ],
    benefits: [
      'Single contract for civil, mechanical, electrical, and commissioning phases',
      'Laser-alignment precision on all rotating equipment',
      'OEM-supervised final commissioning and performance tests',
      'Full documentation: as-built drawings, test records, maintenance manuals',
    ],
    clients: ['UltraTech Cement', 'Rayalaseema Green Steel', 'Agroha TMT'],
  },
  'industrial-civil-works': {
    summary: 'Structural civil works including foundations, floors, and industrial buildings.',
    body: [
      'Industrial civil works require the same precision as mechanical installation — a foundation poured 10 mm off spec can misalign equipment permanently. Our civil teams understand this.',
      'We deliver machine foundations, equipment plinths, structural steel buildings, chequered-plate flooring, sumps, drains, and all associated building work. All concrete mixes are designed and tested to load specifications.',
    ],
    benefits: [
      'Foundations designed to dynamic load and vibration criteria',
      'Pre-pour inspection with QA sign-off documentation',
      'Coordinated with mechanical teams to ensure zero interference',
      'RCC and structural steel construction capabilities',
    ],
    clients: ['MSM & SNDB Ispat', 'Visalakshi Industries'],
  },
  'erection-commissioning-maintenance': {
    summary: 'Expert erection, commissioning, and ongoing maintenance of industrial plant and equipment.',
    body: [
      'Our erection teams are trained on DRI rotary kilns, induction furnaces, rolling mill stands, conveyors, and dust-extraction systems. We follow safe erection sequences that protect personnel and equipment.',
      'Commissioning is a phased process: pre-commissioning checks, cold commissioning, hot trials, and performance acceptance. We coordinate with equipment OEMs at each stage.',
      'Once handed over, we offer long-term maintenance contracts: planned preventive maintenance, spares management, and 24/7 breakdown response.',
    ],
    benefits: [
      'Phased commissioning reducing risk and rework',
      'Skilled teams for DRI, steel, and power equipment',
      'Preventive maintenance scheduling to maximise uptime',
      'Emergency breakdown response anywhere in India',
    ],
    clients: ['Maruthi Ispat', 'Singhal Enterprises', 'OSM Pvt Ltd'],
  },
  'plant-relocation-equipment-positioning': {
    summary: 'Safe and precise relocation of heavy plant, machinery, and equipment.',
    body: [
      'Relocating a 50-tonne rolling mill stand or a DRI kiln shell is not a logistics job — it is an engineering project. JSS Engineering plans every lift, transport route, and re-erection sequence before a single bolt is loosened.',
      'We handle disassembly, dimensional surveys, skidding and jacking, flatbed transport, and re-installation at the new location with full recommissioning.',
    ],
    benefits: [
      'Pre-move dimensional survey and rigging plan',
      'Hydra crane and heavy-transport coordination',
      'Minimal downtime through parallel planning',
      'Recommissioning to original performance levels',
    ],
    clients: ['RVR Projects', 'Agroha TMT'],
  },
  'machinery-unloading-layout': {
    summary: 'Professional unloading, rigging, and accurate layout marking for new equipment.',
    body: [
      'The first step in any installation project is the most critical: getting heavy equipment off a truck or railcar and into position without damage or misalignment.',
      'We provide hydra cranes, forklifts, and skilled riggers. Layout marking is performed from certified survey benchmarks, ensuring every anchor bolt and equipment centre-line is exactly where the OEM drawing specifies.',
    ],
    benefits: [
      'Certified riggers and mobile crane operators',
      'Survey-grade layout marking from established benchmarks',
      'Zero-damage unloading protocols',
      'First-fix accuracy that prevents rework downstream',
    ],
    clients: ['Visalakshi Industries', 'Agroha TMT'],
  },
  'foundation-works': {
    summary: 'Precision machine foundations for heavy industrial equipment.',
    body: [
      'A machine is only as good as its foundation. JSS Engineering designs and constructs machine foundations compliant with IS code dynamic load requirements and OEM anchor-bolt layouts.',
      'We handle shuttering, reinforcement, concrete pouring, anchor-bolt setting, grouting, and chequered-plate works — all inspected and signed off before the machine arrives.',
    ],
    benefits: [
      'Dynamic load design compliant with IS 2974',
      'High-strength grouting for precision levelling',
      'Anchor-bolt installation to OEM template',
      'Full QA documentation for client records',
    ],
    clients: ['UltraTech Cement', 'MSM & SNDB Ispat'],
  },
  'utility-connections': {
    summary: 'Complete utility connectivity — electrical, pneumatic, and hydraulic — for industrial plant.',
    body: [
      'Modern industrial equipment requires flawless utility connections before it will operate. Our multi-discipline teams handle all hook-ups under a single work order.',
      'Electrical: LT/HT cabling, motor terminations, panel wiring, earthing. Pneumatic: compressed-air piping, valve assemblies, instrumentation. Hydraulic: high-pressure hose and tubing, power-packs, actuators.',
    ],
    benefits: [
      'Multi-discipline team (electrical, mechanical, instrumentation)',
      'Certified electricians for LT and HT installations',
      'Pressure-tested hydraulic and pneumatic systems',
      'Formal commissioning test certificates for all utilities',
    ],
    clients: ['Rayalaseema Green Steel', 'Maruthi Ispat'],
  },
  'oem-supervised-commissioning': {
    summary: 'Safe power-up and commissioning under OEM supervision for guaranteed performance.',
    body: [
      'OEM-supervised commissioning is mandatory for equipment warranty validation and insurance compliance. JSS Engineering coordinates with OEM engineers to plan and execute every step.',
      'We prepare the commissioning checklist, manage the power-up sequence, record all parameters, and witness OEM acceptance trials — then hand over a complete commissioning dossier to the client.',
    ],
    benefits: [
      'OEM liaison management from pre-commissioning to acceptance',
      'Full parameter logging during all trial runs',
      'Commissioning dossier for warranty and insurance records',
      'Post-handover snag resolution',
    ],
    clients: ['UltraTech Cement', 'Singhal Enterprises'],
  },
  'structural-fabrication-erection': {
    summary: 'In-house structural steel fabrication and erection for industrial support structures.',
    body: [
      'Our fabrication workshop produces structural steel components to IS 2062 standards: platforms, walkways, guardrails, pipe racks, chutes, hoppers, and bespoke support frames.',
      'Field erection teams then install and grout these structures as an integrated package — no coordination gaps between fabricator and erector.',
    ],
    benefits: [
      'In-house fabrication to IS 2062 grade steel',
      'Third-party inspection and paint certification available',
      'Field erection to design drawings with as-built record',
      'Single-source accountability for quality and schedule',
    ],
    clients: ['OSM Pvt Ltd', 'Visalakshi Industries'],
  },
  'operation-maintenance-dri-steel-power': {
    summary: 'Long-term O&M services for DRI kilns, steel plants, and captive power units.',
    body: [
      'Running a DRI rotary kiln or captive power plant profitably depends as much on O&M discipline as on the initial installation quality. JSS Engineering provides resident operation and maintenance teams on annual contracts.',
      'We deploy plant operators, maintenance technicians, and shift supervisors. Our preventive maintenance schedules follow OEM recommendations. Breakdown response is managed by on-site spares holdings and rapid-response call-outs.',
    ],
    benefits: [
      'Resident O&M teams on annual/multi-year contracts',
      'Preventive maintenance to OEM schedules',
      'On-site spares inventory management',
      'Monthly performance and downtime reporting',
    ],
    clients: ['Maruthi Ispat', 'MSM & SNDB Ispat', 'RVR Projects'],
  },
}

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.title,
    description: SERVICE_DETAILS[params.slug]?.summary ?? '',
  }
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const detail = SERVICE_DETAILS[params.slug]
  if (!detail) notFound()

  const idx = SERVICES.findIndex((s) => s.slug === params.slug)
  const prev = SERVICES[idx - 1]
  const next = SERVICES[idx + 1]

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-700 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Link href="/services" className="inline-flex items-center gap-1 text-steel-300 hover:text-orange-400 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-700 mb-5 max-w-2xl">{service.title}</h1>
            <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">{detail.summary}</p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-navy-500 shadow-xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5">
            {detail.body.map((para, i) => (
              <p key={i} className="text-steel-600 leading-relaxed">{para}</p>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-mill border border-ash rounded-xl p-6">
              <h3 className="font-heading font-700 text-navy-700 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {detail.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-steel-600">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-700 text-white rounded-xl p-6">
              <h3 className="font-heading font-700 mb-3 text-orange-400 text-sm uppercase tracking-widest">Clients Served</h3>
              <ul className="space-y-2 text-sm text-steel-200">
                {detail.clients.map((c) => (
                  <li key={c} className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/quote" className="btn-primary w-full justify-center block text-center">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      {/* Nav between services */}
      <section className="border-t border-ash py-8 bg-mill">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between gap-4">
          {prev ? (
            <Link href={`/services/${prev.slug}`} className="flex items-center gap-2 text-sm text-navy-700 hover:text-orange-500 transition-colors">
              <ArrowLeft size={14} /> {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/services/${next.slug}`} className="flex items-center gap-2 text-sm text-navy-700 hover:text-orange-500 transition-colors">
              {next.title} <ArrowRight size={14} />
            </Link>
          ) : <span />}
        </div>
      </section>
    </>
  )
}

