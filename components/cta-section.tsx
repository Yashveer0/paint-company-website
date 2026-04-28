'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { paintImages } from '@/lib/paint-assets'

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <Image
        src={paintImages.paintStrokes}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.94),rgba(15,23,42,0.72)_55%,rgba(15,23,42,0.4))]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
            Start with color
          </p>
          <h2 className="text-balance text-4xl font-bold text-white sm:text-5xl">
            Ready for a smoother, more beautiful paint project?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-white/80">
            Tell us what you want the space to feel like. We will translate that into surfaces,
            finishes, and a clear plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground"
          >
            Get your free quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
