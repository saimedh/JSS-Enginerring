'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ChevronRight, Phone, Mail, MessageCircle, Clock, ShieldCheck } from 'lucide-react'
import { SERVICES, INDUSTRIES, CLIENTS, STATS, WHY_CHOOSE } from '@/lib/utils'

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-navy-900 text-white overflow-hidden min-h-[90vh] md:min-h-0 flex flex-col justify-between">
      {/* Background industrial plant photography */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop"
          alt="Heavy industrial steel plant erection and machinery installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-center"
        />
        {/* Layered cinematic dark gradient overlays for maximum contrast, depth, and mobile legibility */}
        <div className="absolute inset-0 bg-navy-950/85 sm:bg-gradient-to-r sm:from-navy-950/95 sm:via-navy-900/85 sm:to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-navy-950/60" />
      </div>

      {/* Dynamic ambient glow orbs */}
      <div className="absolute -top-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-orange-500/15 sm:bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow z-1" />
      <div className="absolute top-1/2 -left-32 w-64 sm:w-80 h-64 sm:h-80 bg-arcblue/15 sm:bg-arcblue/20 rounded-full blur-3xl pointer-events-none z-1" />

      {/* Safety orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-14 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 bg-orange-500 text-white text-[11px] sm:text-xs md:text-sm font-heading font-bold uppercase tracking-wider sm:tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-5 sm:mb-6 shadow-lg shadow-orange-500/25 border border-orange-400">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white animate-pulse shrink-0" />
            <span className="truncate sm:whitespace-normal">Industrial Engineering Contractor · Tadipatri, AP</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 sm:mb-6 tracking-tight animate-fade-in-up">
            Steel Plant Erection &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Commissioning
            </span>{' '}
            Specialists
          </h1>
          <p className="text-steel-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fade-in-up">
            JSS Engineering delivers turnkey machinery installation, plant erection, industrial civil works,
            and long-term O&amp;M for DRI, steel, and power plants across India.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up">
            <Link href="/quote" className="btn-primary w-full sm:w-auto justify-center group text-base sm:text-lg py-2.5 sm:py-3">
              Request a Quote 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/projects" className="btn-secondary w-full sm:w-auto justify-center group text-base sm:text-lg py-2.5 sm:py-3">
              View Our Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-steel-300">
            {['UltraTech Cement', 'Western Coalfields', 'Rayalaseema Green Steel'].map((c) => (
              <span key={c} className="flex items-center gap-1.5 sm:gap-2 transition-transform duration-300 hover:text-white hover:translate-x-0.5">
                <CheckCircle2 size={14} className="text-orange-400 shrink-0" /> {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip with hover transitions */}
      <div className="relative z-10 border-t border-navy-700/80 bg-navy-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="group p-2 sm:p-3 rounded-xl transition-all duration-300 hover:bg-navy-800/60 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                {s.value}
              </div>
              <div className="text-steel-300 text-xs sm:text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES GRID ──────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="py-20 bg-mill">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-heading font-bold text-sm uppercase tracking-widest bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="section-title mt-3">Industrial Engineering Services</h2>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            From ground-breaking to handover — we cover every phase of heavy-industry plant setup and operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white border border-ash rounded-xl overflow-hidden card-hover group shadow-sm flex flex-col justify-between"
            >
              {/* Photo with smooth zoom transition */}
              <div className="relative h-48 w-full overflow-hidden bg-navy-900">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-heading font-bold text-navy-700 text-lg group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                  {s.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-4 text-orange-500 text-xs font-heading font-bold uppercase tracking-wider">
                  <span>Learn More</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-outline group">
            All Services 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── INDUSTRIES STRIP ───────────────────────────────────────────────────────
function IndustriesSection() {
  return (
    <section className="py-20 bg-navy-700 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-orange-400 font-heading font-bold text-sm uppercase tracking-widest">
              Sectors We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 tracking-tight">
              Industries
            </h2>
          </div>
          <Link href="/industries" className="btn-secondary text-sm py-2 px-5 self-start md:self-auto group">
            Explore All Industries
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries#${ind.slug}`}
              className="rounded-xl overflow-hidden border border-navy-500 hover:border-orange-400 transition-all duration-400 group shadow-md hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-40 w-full overflow-hidden bg-navy-900">
                <Image
                  src={ind.image}
                  alt={ind.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              </div>
              {/* Label */}
              <div className="bg-navy-600 group-hover:bg-orange-500 transition-colors duration-300 px-4 py-3.5 text-center">
                <h3 className="font-heading font-bold text-sm tracking-wide leading-tight">
                  {ind.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CLIENT MARQUEE ─────────────────────────────────────────────────────────
function ClientsSection() {
  const doubled = [...CLIENTS, ...CLIENTS]
  return (
    <section className="py-18 bg-white border-y border-ash">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 text-center">
        <span className="text-orange-500 font-heading font-bold text-sm uppercase tracking-widest bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full">
          Trusted By
        </span>
        <h2 className="section-title mt-3">Our Clients &amp; Partners</h2>
      </div>
      <div className="overflow-hidden py-2">
        <div className="marquee-track gap-8 px-4">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-mill border border-ash rounded-xl px-7 py-5 min-w-[220px] text-center mx-2 shadow-xs transition-all duration-300 hover:border-orange-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="font-heading font-bold text-navy-700 text-sm tracking-wide">{c.name}</div>
              <div className="text-steel-500 text-xs mt-1 font-medium">{c.location}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/clients" className="btn-outline group">
          View All Clients 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )
}

// ─── WHY CHOOSE US ──────────────────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-20 bg-mill">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-heading font-bold text-sm uppercase tracking-widest bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full">
            Why JSS Engineering
          </span>
          <h2 className="section-title mt-3">Built for Industrial Demands</h2>
          <p className="section-subtitle mt-3 max-w-xl mx-auto">
            Six core strengths that make us the preferred partner for India&apos;s steel and power sector.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((w) => (
            <div key={w.title} className="bg-white rounded-xl border border-ash p-7 card-hover group shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-xs">
                  <CheckCircle2 size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-navy-700 text-xl mb-2.5 group-hover:text-orange-500 transition-colors duration-200">
                  {w.title}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA BAND ───────────────────────────────────────────────────────────────
function CTABand() {
  return (
    <section className="py-20 bg-mill">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden p-8 sm:p-12 lg:p-16 border border-navy-700 shadow-2xl">
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 30px,
                rgba(255,255,255,0.04) 30px,
                rgba(255,255,255,0.04) 60px
              )`,
            }}
          />
          {/* Ambient orange glow orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-arcblue/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Top pill badge */}
            <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/30 text-orange-400 text-xs font-heading font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs">
              <Clock size={13} className="text-orange-400" />
              Fast Proposal Turnaround · 24-Hour Technical Assessment
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 tracking-tight leading-tight">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
                Next Project?
              </span>
            </h2>

            <p className="text-steel-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Talk to our engineering team about your requirements. We&apos;ll assess, propose, and deliver — on time, within budget, and to exacting OEM tolerances.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-steel-300 mb-10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                Millimetre Laser Alignment
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-orange-400 shrink-0" />
                100% Zero-Harm HSE Standards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                Turnkey Single-Contract Delivery
              </span>
            </div>

            {/* Action Buttons with high contrast and tactile hover */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto btn-primary text-base sm:text-lg py-4 px-8 justify-center shadow-lg shadow-orange-500/20 group"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white text-white hover:text-navy-900 border border-white/20 hover:border-white font-heading font-bold text-base sm:text-lg py-4 px-8 rounded-lg shadow-md backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
              >
                <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Phone size={14} />
                </div>
                <span>Call Us Now: +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20JSS%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-white border border-green-500/40 font-heading font-bold text-sm py-4 px-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Contact details subtext */}
            <div className="mt-10 pt-8 border-t border-navy-700/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-steel-400">
              <span>Office: Tadipatri, Anantapur District, AP 515411</span>
              <span>·</span>
              <a href="mailto:Jssengineering04@gmail.com" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                <Mail size={13} /> Jssengineering04@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <WhyChooseUs />
      <CTABand />
    </>
  )
}
