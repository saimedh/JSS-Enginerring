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
    "JSS Engineering is a specialist industrial engineering contractor for steel plants, DRI units, power plants, and cement plants. Turnkey machinery installation, plant erection, commissioning, and O&M across India. Based in Tadipatri, Anantapur, Andhra Pradesh. Call +91 94903 11640.",
  keywords: [
    "steel plant erection Anantapur",
    "turnkey machinery installation India",
    "DRI plant commissioning",
    "industrial civil works Tadipatri",
    "plant relocation Andhra Pradesh",
    "JSS Engineering",
    "steel plant contractor India",
    "industrial engineering contractor Tadipatri",
    "sponge iron plant contractor",
    "cement plant erection India",
    "coal plant commissioning India",
    "O&M services DRI steel",
    "plant commissioning Andhra Pradesh",
    "heavy machinery installation India",
    "power plant erection India",
  ],
  authors: [{ name: "JSS Engineering", url: "https://jssengineering.in" }],
  creator: "JSS Engineering",
  publisher: "JSS Engineering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://jssengineering.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jssengineering.in",
    siteName: "JSS Engineering",
    title: "JSS Engineering – Steel Plant Erection & Commissioning | Tadipatri",
    description:
      "Specialist industrial engineering contractor for steel, DRI, power, and cement plants across India. Turnkey machinery installation, erection & O&M services. Call +91 94903 11640.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JSS Engineering – Steel Plant Contractor India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSS Engineering – Steel Plant Erection & Commissioning",
    description: "Specialist industrial contractor for steel, DRI, power and cement plants across India.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-google-site-verification-token",
  },
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
              alternateName: "JSS Engineering Tadipatri",
              url: "https://jssengineering.in",
              logo: "https://jssengineering.in/logo.png",
              image: "https://jssengineering.in/logo.png",
              description:
                "JSS Engineering is a specialist industrial engineering contractor for steel plants, DRI units, power plants, and cement plants across India. Services include turnkey machinery installation, plant erection, commissioning, and O&M. Based in Tadipatri, Anantapur, Andhra Pradesh.",
              foundingDate: "2004",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "#2/1035-4-3-A, Jayanagar Colony, Yellanur Road",
                addressLocality: "Tadipatri",
                addressRegion: "Andhra Pradesh",
                postalCode: "515411",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-94903-11640",
                  contactType: "customer service",
                  email: "Jssengineering04@gmail.com",
                  areaServed: "IN",
                  availableLanguage: ["English", "Telugu"],
                },
              ],
              knowsAbout: [
                "Steel plant erection",
                "DRI plant commissioning",
                "Turnkey machinery installation",
                "Industrial civil works",
                "Plant relocation",
                "O&M services",
                "Power plant erection",
                "Cement plant installation",
              ],
              sameAs: ["https://github.com/saimedh/JSS-Enginerring"],
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
