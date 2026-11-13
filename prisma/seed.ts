import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Admin user
  const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD ?? 'ChangeMe123!', 12)
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? 'admin@jssengineering.in' },
    update: {},
    create: {
      name: 'JSS Admin',
      email: process.env.ADMIN_EMAIL ?? 'admin@jssengineering.in',
      passwordHash,
      role: 'ADMIN',
    },
  })

  // Services
  const services = [
    {
      slug: 'turnkey-machinery-installation',
      title: 'Turnkey Machinery Installation',
      summary: 'Complete end-to-end machinery installation from planning to commissioning.',
      body: 'We handle every phase of machinery installation — from site survey and foundation design to equipment positioning, alignment, and final commissioning. Our turnkey approach ensures the plant is production-ready on day one.',
      icon: 'Settings',
      order: 1,
    },
    {
      slug: 'industrial-civil-works',
      title: 'Industrial Civil Works & Building Work',
      summary: 'Structural civil works including foundations, floors, and industrial buildings.',
      body: 'Our civil engineering team delivers robust industrial structures: machine foundations, equipment plinths, structural steel buildings, and all associated building work to support heavy-industry operations.',
      icon: 'Building2',
      order: 2,
    },
    {
      slug: 'erection-commissioning-maintenance',
      title: 'Erection, Commissioning & Maintenance',
      summary: 'Expert erection, commissioning, and ongoing maintenance of industrial plant and equipment.',
      body: 'From structural steel erection to final commissioning trials, our teams are trained in DRI, steel, and power unit technologies. We also provide long-term O&M contracts to keep plants running at peak efficiency.',
      icon: 'Wrench',
      order: 3,
    },
    {
      slug: 'plant-relocation-equipment-positioning',
      title: 'Plant Relocation & Equipment Positioning',
      summary: 'Safe and precise relocation of heavy plant, machinery, and equipment.',
      body: 'Relocating heavy industrial equipment demands precision planning and execution. JSS Engineering manages disassembly, transport, re-installation, and re-commissioning — minimising downtime and protecting asset integrity.',
      icon: 'MoveRight',
      order: 4,
    },
    {
      slug: 'machinery-unloading-layout',
      title: 'Machinery Unloading & Layout Marking',
      summary: 'Professional unloading, rigging, and accurate layout marking for new equipment.',
      body: 'Using hydra cranes, forklifts, and skilled riggers, we safely unload and position machinery exactly per OEM layout drawings, ensuring perfect alignment from day one.',
      icon: 'LayoutGrid',
      order: 5,
    },
    {
      slug: 'foundation-works',
      title: 'Foundation Works',
      summary: 'Precision machine foundations for heavy industrial equipment.',
      body: 'We design and construct machine foundations compliant with dynamic load requirements. Anchor bolt installation, grouting, and chequered plate works are included for a complete, ready-to-install foundation.',
      icon: 'Layers',
      order: 6,
    },
    {
      slug: 'utility-connections',
      title: 'Utility Connections (Electrical, Pneumatic, Hydraulic)',
      summary: 'Complete utility connectivity — electrical, pneumatic, and hydraulic — for industrial plant.',
      body: 'Our multi-discipline teams handle all utility hook-ups: LT/HT electrical cabling, compressed-air piping, hydraulic lines, and cooling-water circuits — all tested and commissioned to OEM specifications.',
      icon: 'Zap',
      order: 7,
    },
    {
      slug: 'oem-supervised-commissioning',
      title: 'Machinery Power-up & OEM-Supervised Commissioning',
      summary: 'Safe power-up and commissioning under OEM supervision for guaranteed performance.',
      body: 'We coordinate with equipment OEMs to ensure every machine is powered up, trialled, and handed over at guaranteed performance parameters, with all documentation and training delivered to the plant team.',
      icon: 'Power',
      order: 8,
    },
    {
      slug: 'structural-fabrication-erection',
      title: 'Structural Fabrication, Erection & Commissioning',
      summary: 'In-house structural steel fabrication and erection for industrial support structures.',
      body: 'Our workshop fabricates structural steel components — platforms, walkways, pipe racks, chutes — to IS standards. Field erection teams then install and commission these structures as part of a seamless package.',
      icon: 'Construction',
      order: 9,
    },
    {
      slug: 'operation-maintenance-dri-steel-power',
      title: 'Operation & Maintenance of DRI, Steel & Power Units',
      summary: 'Long-term O&M services for DRI kilns, steel plants, and captive power units.',
      body: 'JSS Engineering provides skilled operation and maintenance teams for DRI rotary kilns, induction furnaces, rolling mills, and captive power plants. Our contracts cover preventive maintenance schedules, breakdown response, and performance reporting.',
      icon: 'Activity',
      order: 10,
    },
  ]

  for (const s of services) {
    await prisma.service.upsert({ where: { slug: s.slug }, update: s, create: s })
  }

  // Industries
  const industries = [
    { slug: 'coal-mines', title: 'Coal Mines', summary: 'Supporting coal handling plant erection and conveyor systems for underground and open-cast mining operations.' },
    { slug: 'cement-plants', title: 'Cement Plants', summary: 'Machinery installation and civil works for cement clinker and grinding units across India.' },
    { slug: 'sponge-iron-dri', title: 'Sponge Iron (DRI) Units', summary: 'Specialist O&M and erection services for DRI rotary kilns and associated waste-heat recovery systems.' },
    { slug: 'furnaces', title: 'Furnaces & Induction Melting', summary: 'Installation and commissioning of induction furnaces, arc furnaces, and ladle refining units.' },
    { slug: 'rolling-mills', title: 'Rolling Mills', summary: 'Complete turnkey installation of TMT bar and structural steel rolling mills, including stands, shears, and cooling beds.' },
  ]

  for (const i of industries) {
    await prisma.industry.upsert({ where: { slug: i.slug }, update: i, create: i })
  }

  // Clients
  const clients = [
    { name: 'RVR Projects (Western Coalfields)', location: 'Nagpur, Maharashtra', order: 1 },
    { name: 'Agroha TMT', location: 'Raigarh, Chhattisgarh', order: 2 },
    { name: 'Singhal Enterprises', location: 'Raigarh, Chhattisgarh', order: 3 },
    { name: 'MSM & SNDB Ispat and Power', location: 'Tilda, Chhattisgarh', order: 4 },
    { name: 'Visalakshi Industries', location: 'Hyderabad, Telangana', order: 5 },
    { name: 'UltraTech Cement', location: 'Tadipatri, Andhra Pradesh', order: 6 },
    { name: 'Rayalaseema Green Steel Pvt Ltd', location: 'Kurnool, Andhra Pradesh', order: 7 },
    { name: 'Maruthi Ispat', location: 'Mantralayam, Andhra Pradesh', order: 8 },
    { name: 'OSM Pvt Ltd', location: 'Visakhapatnam, Andhra Pradesh', order: 9 },
  ]

  for (const c of clients) {
    await prisma.client.upsert({
      where: { id: c.name.toLowerCase().replace(/\s+/g, '-') },
      update: c,
      create: { ...c, id: c.name.toLowerCase().replace(/\s+/g, '-') },
    })
  }

  // Settings
  const settings = [
    { key: 'company_name', value: 'JSS Engineering' },
    { key: 'tagline', value: 'Steel • Power • Execution' },
    { key: 'phone', value: '+91 98765 43210' },
    { key: 'email', value: 'Jssengineering04@gmail.com' },
    { key: 'address', value: '#2/1035-4-3-A, Jayanagar Colony, Yellanur Road, Tadipatri, Anantapur, AP 515411' },
    { key: 'whatsapp', value: '919876543210' },
    { key: 'linkedin', value: '' },
    { key: 'established', value: '2021' },
  ]

  for (const s of settings) {
    await prisma.setting.upsert({ where: { key: s.key }, update: s, create: s })
  }

  console.log('✅ Seed complete')
}

main().catch(console.error).finally(() => prisma.$disconnect())

