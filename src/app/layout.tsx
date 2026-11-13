import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jssengineering.in'),
  title: {
    default: "JSS Engineering – Steel Plant Erection & Commissioning | Tadipatri, Anantapur",
    template: "%s | JSS Engineering",
  },
  description:
    "JSS Engineering is a specialist industrial contractor for steel plants, DRI units, power plants, and cement plants. Turnkey machinery installation, erection, commissioning, and O&M across India. Based in Tadipatri, Anantapur, Andhra Pradesh.",
  keywords: [
    "steel plant erection Anantapur",
    "turnkey machinery installation India",
    "DRI plant commissioning",
    "industrial civil works Tadipatri",
    "plant relocation Andhra Pradesh",
    "JSS Engineering",
    "steel plant contractor India",
  ],
  authors: [{ name: "JSS Engineering" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jssengineering.in",
    siteName: "JSS Engineering",
    title: "JSS Engineering – Steel Plant Erection & Commissioning",
    description:
      "Specialist industrial contractor for steel, DRI, power, and cement plants across India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JSS Engineering",
              url: "https://jssengineering.in",
              logo: "https://jssengineering.in/logo.png",
              description:
                "Specialist industrial contractor for steel plants, DRI units, power plants, and cement plants across India.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "#2/1035-4-3-A, Jayanagar Colony, Yellanur Road",
                addressLocality: "Tadipatri",
                addressRegion: "Andhra Pradesh",
                postalCode: "515411",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                email: "Jssengineering04@gmail.com",
              },
              areaServed: "India",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
