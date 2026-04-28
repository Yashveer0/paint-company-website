'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Layers, ShieldCheck, Sparkles } from 'lucide-react'

import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageIntro } from '@/components/page-intro'
import { paintImages } from '@/lib/paint-assets'

const serviceDetails = [
  {
    title: 'Residential Painting',
    description:
      'A refined painting process for bedrooms, kitchens, living spaces, exteriors, cabinets, and accent walls.',
    image: paintImages.interior,
    features: [
      'Interior and exterior painting',
      'Cabinet refinishing',
      'Accent wall design',
      'Trim, doors, and detail work',
      'Low-odor finish options',
      'Clean masking and daily reset',
    ],
  },
  {
    title: 'Commercial Painting',
    description:
      'Durable, professional finishes delivered around business hours, access needs, and brand standards.',
    image: paintImages.exteriorPainter,
    features: [
      'Office and retail refreshes',
      'Hospitality and common areas',
      'Warehouse and utility spaces',
      'After-hours scheduling',
      'Brand color matching',
      'Phased project planning',
    ],
  },
  {
    title: 'Color Consultation',
    description:
      'Palette support that considers light, furnishings, mood, maintenance needs, and the flow between rooms.',
    image: paintImages.paintBrushes,
    features: [
      'Color psychology guidance',
      'Swatch and sample planning',
      'Finish recommendations',
      'Room-to-room palette mapping',
      'Exterior color coordination',
      'Trend-aware neutral palettes',
    ],
  },
  {
    title: 'Surface Preparation',
    description:
      'The quiet work that makes a finish last: repair, sanding, caulking, priming, masking, and protection.',
    image: paintImages.rollerCloseup,
    features: [
      'Drywall patching',
      'Sanding and scraping',
      'Caulking and gap repair',
      'Primer selection',
      'Surface protection',
      'Final cleanup walkthrough',
    ],
  },
]

const paintSystems = [
  {
    icon: Layers,
    title: 'Interior Washable Finish',
    description: 'Smooth, low-sheen systems for busy rooms that need color depth and easy maintenance.',
  },
  {
    icon: ShieldCheck,
    title: 'Exterior Weather Coat',
    description: 'UV-aware, moisture-resistant coatings selected for siding, trim, doors, and masonry.',
  },
  {
    icon: Sparkles,
    title: 'Specialty Texture & Accent',
    description: 'Statement finishes, accent treatments, and texture refinements for memorable focal areas.',
  },
]

export default function Services() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      <PageIntro
        eyebrow="Services"
        title="Professional paint services with premium materials and precise process."
        description="Choose a service path, then let our crew handle the prep, color, finish, and clean execution."
        image={paintImages.paintStrokes}
      />

      <section className="bg-[#fffdf8] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {serviceDetails.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-border bg-white/80 px-4 py-3"
                    >
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg paint-shadow ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f6ed] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Paint systems
            </p>
            <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Finishes selected for how the space lives
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {paintSystems.map((system, index) => {
              const Icon = system.icon

              return (
                <motion.article
                  key={system.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="rounded-lg border border-white/80 bg-white/90 p-7 shadow-[0_20px_58px_-46px_rgba(15,23,42,0.55)] transition-all hover:-translate-y-1 hover:border-primary/25"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/35 text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{system.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{system.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
