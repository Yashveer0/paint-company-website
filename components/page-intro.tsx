'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  image: string
}

export function PageIntro({ eyebrow, title, description, image }: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,0.92),rgba(15,23,42,0.74)_48%,rgba(15,23,42,0.36))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/80 sm:text-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
