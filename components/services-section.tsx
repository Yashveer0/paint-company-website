'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Home, Paintbrush, Palette, Shield, Wrench } from 'lucide-react'

import { paintImages } from '@/lib/paint-assets'

const services = [
  {
    icon: Home,
    title: 'Residential Painting',
    description: 'Interior and exterior finishes planned around daily living, natural light, and long-term durability.',
    image: paintImages.interior,
  },
  {
    icon: Building2,
    title: 'Commercial Painting',
    description: 'Efficient paint programs for offices, retail spaces, hospitality, and active business environments.',
    image: paintImages.rollerTray,
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Confident palette direction with swatches, finish recommendations, and room-by-room cohesion.',
    image: paintImages.paintBrushes,
  },
  {
    icon: Paintbrush,
    title: 'Surface Preparation',
    description: 'Detailed patching, sanding, priming, masking, and cleanup that protects the final result.',
    image: paintImages.rollerCloseup,
  },
  {
    icon: Shield,
    title: 'Protective Coatings',
    description: 'Washable, weather-ready, and specialty coatings selected for the way each surface is used.',
    image: paintImages.textureWall,
  },
  {
    icon: Wrench,
    title: 'Maintenance & Touch-ups',
    description: 'Smart refresh plans for rentals, offices, and homes that need to stay sharp year-round.',
    image: paintImages.yellowWall,
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.16,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#f7f6ed_100%)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            What we craft
          </p>
          <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
            Paint services shaped for polished spaces
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            From the first swatch to the final walkthrough, every service is structured for clean lines,
            richer color, and a smooth client experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="group overflow-hidden rounded-lg border border-white/80 bg-white/90 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_26px_80px_-46px_rgba(37,99,235,0.5)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-70" />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-pretty leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_18px_34px_-22px_rgba(37,99,235,0.9)]"
          >
            Explore services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
