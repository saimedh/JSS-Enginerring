'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react'

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Turnkey Installation', href: '/services/turnkey-machinery-installation', desc: 'End-to-end machinery setup' },
      { label: 'Civil Works', href: '/services/industrial-civil-works', desc: 'Foundations & heavy plant structures' },
      { label: 'Erection & Commissioning', href: '/services/erection-commissioning-maintenance', desc: 'Laser precision alignment & trial runs' },
      { label: 'Plant Relocation', href: '/services/plant-relocation-equipment-positioning', desc: 'Dismantling, heavy haul & reassembly' },
      { label: 'Foundation Works', href: '/services/foundation-works', desc: 'Equipment plinths & anchor bolt casting' },
      { label: 'Utility Connections', href: '/services/utility-connections', desc: 'High-voltage bus-bars & piping' },
      { label: 'O&M Services', href: '/services/operation-maintenance-dri-steel-power', desc: 'Long-term maintenance for kilns & mills' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-ash/80'
          : 'bg-white border-b border-ash shadow-xs'
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy-800 text-white text-xs py-2 px-4 hidden md:flex justify-between items-center border-b border-navy-700/60">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-body text-steel-200">
            Steel • Power • Machinery Installation Specialists — Tadipatri, AP
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-steel-300">Tender &amp; Project Desk:</span>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-white hover:text-orange-400 font-heading font-semibold tracking-wide transition-colors"
          >
            <Phone size={12} className="text-orange-500" /> +91 98765 43210
          </a>
        </div>
      </div>

      <nav className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-18' : 'h-20'}`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group py-1 transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform duration-500 group-hover:rotate-3">
            <Image
              src="/logo.png"
              alt="JSS Engineering Logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-heading font-bold text-navy-700 text-lg sm:text-xl leading-none group-hover:text-orange-500 transition-colors duration-200">
              JSS ENGINEERING
            </div>
            <div className="text-steel-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1">
              Steel &amp; Power Specialists
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group py-2">
                <button className="flex items-center gap-1.5 nav-link group-hover:text-orange-500">
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className="text-steel-400 group-hover:text-orange-500 transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* Animated sliding underline */}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />

                {/* Floating bridge to prevent hover loss */}
                <div className="absolute top-full left-0 w-80 h-3 pointer-events-auto" />

                {/* Mega Dropdown Menu */}
                <ul className="absolute top-[calc(100%+8px)] left-0 w-80 bg-white/98 backdrop-blur-xl border border-ash/90 rounded-2xl shadow-2xl p-2.5 opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-250 ease-out z-50 divide-y divide-ash/40">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-orange-50/80 transition-all duration-200 group/item"
                      >
                        <span className="text-sm font-heading font-bold text-navy-700 group-hover/item:text-orange-600 transition-colors">
                          {c.label}
                        </span>
                        <span className="text-[11px] text-steel-400 mt-0.5 font-body">
                          {c.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="relative group py-2">
                <Link href={item.href} className="nav-link block">
                  {item.label}
                </Link>
                {/* Animated sliding underline */}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
              </li>
            )
          )}
        </ul>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/quote"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 group shadow-sm"
          >
            <span>Request a Quote</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button
            className="lg:hidden p-2.5 text-navy-700 hover:text-orange-500 rounded-xl hover:bg-mill transition-all duration-200 active:scale-95"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-ash px-4 py-5 space-y-2.5 animate-fade-in shadow-2xl">
          {NAV.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-2 text-base font-heading font-bold text-navy-700 hover:text-orange-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 space-y-1.5 border-l-2 border-orange-300/80 pl-3.5 my-1.5">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block py-1 text-sm text-steel-600 hover:text-orange-500 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-ash">
            <Link
              href="/quote"
              className="btn-primary w-full justify-center text-center text-sm py-3"
              onClick={() => setOpen(false)}
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
