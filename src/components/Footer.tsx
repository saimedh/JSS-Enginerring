import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-14 w-14 bg-white rounded-xl p-1.5 shrink-0 shadow-md overflow-hidden">
              <Image
                src="/logo.png"
                alt="JSS Engineering Logo"
                fill
                sizes="56px"
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white">JSS Engineering</div>
              <div className="text-orange-400 text-xs uppercase tracking-wide font-semibold">Steel • Power • Execution</div>
            </div>
          </div>
          <p className="text-steel-300 text-sm leading-relaxed">
            Consultancy engineering and contracting specialists in steel plant erection, 
            DRI operations, and industrial civil works across India.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-700 text-sm uppercase tracking-widest text-orange-400 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-steel-200">
            {[
              ['Turnkey Installation', '/services/turnkey-machinery-installation'],
              ['Industrial Civil Works', '/services/industrial-civil-works'],
              ['Erection & Commissioning', '/services/erection-commissioning-maintenance'],
              ['Plant Relocation', '/services/plant-relocation-equipment-positioning'],
              ['Foundation Works', '/services/foundation-works'],
              ['O&M Services', '/services/operation-maintenance-dri-steel-power'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-700 text-sm uppercase tracking-widest text-orange-400 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-steel-200">
            {[
              ['About Us', '/about'],
              ['Industries', '/industries'],
              ['Projects', '/projects'],
              ['Clients', '/clients'],
              ['Downloads', '/downloads'],
              ['Policies', '/policies'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400 transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-700 text-sm uppercase tracking-widest text-orange-400 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-steel-200">
            <li className="flex gap-3">
              <MapPin size={16} className="text-orange-400 mt-0.5 shrink-0" />
              <span>#2/1035-4-3-A, Jayanagar Colony, Yellanur Road, Tadipatri, Anantapur, AP 515411</span>
            </li>
            <li>
              <a href="tel:+919490311640" className="flex gap-3 hover:text-orange-400 transition-colors">
                <Phone size={16} className="text-orange-400 mt-0.5 shrink-0" /> +91 94903 11640
              </a>
            </li>
            <li>
              <a href="mailto:Jssengineering04@gmail.com" className="flex gap-3 hover:text-orange-400 transition-colors">
                <Mail size={16} className="text-orange-400 mt-0.5 shrink-0" /> Jssengineering04@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919490311640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-orange-400 transition-colors"
              >
                <MessageCircle size={16} className="text-orange-400 mt-0.5 shrink-0" /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-600 max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-steel-400">
        <span>© {new Date().getFullYear()} JSS Engineering. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/policies" className="hover:text-orange-400 transition-colors">Quality Policy</Link>
          <Link href="/policies#hse" className="hover:text-orange-400 transition-colors">HSE Policy</Link>
          <Link href="/admin" className="hover:text-orange-400 transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  )
}

