import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with JSS Engineering for project enquiries, tender pre-qualification, or vendor registration. Call +91 94903 11640 or email Jssengineering04@gmail.com. Located in Tadipatri, Anantapur, Andhra Pradesh.',
  openGraph: {
    title: 'Contact JSS Engineering | Steel Plant Contractor India',
    description:
      'Reach JSS Engineering for steel plant erection, DRI commissioning, or industrial civil works enquiries. +91 94903 11640 | Tadipatri, AP.',
    url: 'https://jssengineering.in/contact',
  },
  alternates: {
    canonical: 'https://jssengineering.in/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

