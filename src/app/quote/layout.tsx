import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a fast, preliminary commercial and technical quotation from JSS Engineering for plant erection, machinery installation, civil works, or O&M across India. Call +91 94903 11640.',
  openGraph: {
    title: 'Request an Engineering Quote | JSS Engineering',
    description:
      'Submit your technical and commercial requirements for turnkey plant setup, machinery installation, and O&M. Rapid 24-hour assessment.',
    url: 'https://jssengineering.in/quote',
  },
  alternates: {
    canonical: 'https://jssengineering.in/quote',
  },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

