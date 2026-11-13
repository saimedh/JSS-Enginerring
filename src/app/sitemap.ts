import { MetadataRoute } from 'next'

const BASE = 'https://jssengineering.in'

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/clients`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.85 },
    { url: `${BASE}/quote`, lastModified: now, changeFrequency: 'yearly', priority: 0.95 },
    { url: `${BASE}/policies`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/downloads`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}

