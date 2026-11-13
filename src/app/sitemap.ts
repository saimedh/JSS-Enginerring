import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jssengineering.in'
  const services = [
    'turnkey-machinery-installation',
    'industrial-civil-works',
    'erection-commissioning-maintenance',
    'plant-relocation-equipment-positioning',
    'machinery-unloading-layout',
    'foundation-works',
    'utility-connections',
    'oem-supervised-commissioning',
    'structural-fabrication-erection',
    'operation-maintenance-dri-steel-power',
  ]

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${base}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/policies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/downloads`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]
}

