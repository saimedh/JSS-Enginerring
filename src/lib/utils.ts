// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SERVICES = [
  {
    slug: 'turnkey-machinery-installation',
    title: 'Turnkey Machinery Installation',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=75&fit=crop',
    imageAlt: 'Heavy industrial machinery installation inside a steel plant',
  },
  {
    slug: 'industrial-civil-works',
    title: 'Industrial Civil Works',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&fit=crop',
    imageAlt: 'Industrial construction and civil works with scaffolding',
  },
  {
    slug: 'erection-commissioning-maintenance',
    title: 'Erection & Commissioning',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=75&fit=crop',
    imageAlt: 'Engineers commissioning industrial equipment at a plant',
  },
  {
    slug: 'plant-relocation-equipment-positioning',
    title: 'Plant Relocation',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=75&fit=crop',
    imageAlt: 'Heavy crane lifting large industrial equipment for relocation',
  },
  {
    slug: 'machinery-unloading-layout',
    title: 'Machinery Unloading & Layout',
    image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&q=75&fit=crop',
    imageAlt: 'Mobile crane unloading heavy machinery at an industrial site',
  },
  {
    slug: 'foundation-works',
    title: 'Foundation Works',
    image: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=600&q=75&fit=crop',
    imageAlt: 'Reinforced concrete machine foundation with anchor bolts',
  },
  {
    slug: 'utility-connections',
    title: 'Utility Connections',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=75&fit=crop',
    imageAlt: 'Electrical panel wiring and industrial utility connections',
  },
  {
    slug: 'oem-supervised-commissioning',
    title: 'OEM-Supervised Commissioning',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75&fit=crop',
    imageAlt: 'Engineers in control room overseeing plant commissioning',
  },
  {
    slug: 'structural-fabrication-erection',
    title: 'Structural Fabrication & Erection',
    image: 'https://images.unsplash.com/photo-1601904765950-50b66b35d571?w=600&q=75&fit=crop',
    imageAlt: 'Steel structural fabrication and welding in workshop',
  },
  {
    slug: 'operation-maintenance-dri-steel-power',
    title: 'O&M of DRI, Steel & Power',
    image: 'https://images.unsplash.com/photo-1534396428526-c9fa7f7c2ae0?w=600&q=75&fit=crop',
    imageAlt: 'DRI rotary kiln operation and maintenance at a steel plant',
  },
]

export const INDUSTRIES = [
  {
    slug: 'coal-mines',
    title: 'Coal Mines',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&fit=crop',
    imageAlt: 'Coal mine conveyor and handling plant at an open-cast mining site',
  },
  {
    slug: 'cement-plants',
    title: 'Cement Plants',
    image: 'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?w=600&q=75&fit=crop',
    imageAlt: 'Large cement plant with silos and industrial structures',
  },
  {
    slug: 'sponge-iron-dri',
    title: 'Sponge Iron (DRI)',
    image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?w=600&q=75&fit=crop',
    imageAlt: 'Sponge iron DRI rotary kiln at a steel plant',
  },
  {
    slug: 'furnaces',
    title: 'Furnaces & Induction Melting',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&fit=crop',
    imageAlt: 'Molten metal pouring from an induction furnace at a steel plant',
  },
  {
    slug: 'rolling-mills',
    title: 'Rolling Mills',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=75&fit=crop',
    imageAlt: 'Hot steel billet passing through rolling mill stands',
  },
]

export const CLIENTS = [
  { name: 'RVR Projects (Western Coalfields)', location: 'Nagpur' },
  { name: 'Agroha TMT', location: 'Raigarh' },
  { name: 'Singhal Enterprises', location: 'Raigarh' },
  { name: 'MSM & SNDB Ispat and Power', location: 'Tilda' },
  { name: 'Visalakshi Industries', location: 'Hyderabad' },
  { name: 'UltraTech Cement', location: 'Tadipatri' },
  { name: 'Rayalaseema Green Steel', location: 'Kurnool' },
  { name: 'Maruthi Ispat', location: 'Mantralayam' },
  { name: 'OSM Pvt Ltd', location: 'Visakhapatnam' },
]

export const STATS = [
  { value: '3+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '9+', label: 'Plants Served' },
  { value: '100%', label: 'Safety Record' },
]

export const WHY_CHOOSE = [
  { title: 'Precision & Accuracy', desc: 'Millimetre-level alignment and exacting quality standards on every installation.' },
  { title: 'Operational Efficiency', desc: 'Streamlined processes that minimise plant downtime and maximise throughput.' },
  { title: 'Timely Execution', desc: 'On-schedule delivery across turnkey projects with structured milestone tracking.' },
  { title: 'Highest Safety Standards', desc: 'Rigorous HSE protocols protecting our teams and your plant at all times.' },
  { title: 'Reliable Performance', desc: 'Long-term O&M contracts backed by proven performance records.' },
  { title: 'OEM-Qualified Teams', desc: 'Technicians trained and certified under OEM supervision for guaranteed results.' },
]

