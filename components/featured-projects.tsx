'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { paintImages } from '@/lib/paint-assets'

const projects = [
  {
    id: 1,
    title: 'Soft Neutral Living Room',
    category: 'Residential',
    image: paintImages.interior,
    summary: 'A calmer wall palette with crisp trim and a washable finish.',
  },
  {
    id: 2,
    title: 'High-Performance Workspace',
    category: 'Commercial',
    image: paintImages.rollerTray,
    summary: 'Fast-turnaround coating for a working office refresh.',
  },
  {
    id: 3,
    title: 'Warm Accent Wall',
    category: 'Residential',
    image: paintImages.yellowWall,
    summary: 'Color-blocked warmth with clean roller texture and sharp edges.',
  },
  {
    id: 4,
    title: 'Exterior Weather Finish',
    category: 'Exterior',
    image: paintImages.exteriorPainter,
    summary: 'Durable exterior coating selected for sun, rain, and curb appeal.',
  },
]

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <section className="bg-[#f7f6ed] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Recent transformations
            </p>
            <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Finished spaces with depth, texture, and restraint
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              A quick look at the kind of surfaces, palettes, and detail work we bring into homes and
              business spaces.
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden items-center gap-2 rounded-lg border border-primary/20 bg-white/75 px-5 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white sm:inline-flex"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative aspect-[16/11] overflow-hidden rounded-lg bg-muted paint-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="mb-3 inline-flex rounded-md bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 flex justify-center sm:hidden"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
