'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Sparkles, Users, Zap } from 'lucide-react'

import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageIntro } from '@/components/page-intro'
import { paintImages } from '@/lib/paint-assets'

const values = [
  {
    icon: Award,
    title: 'Finish-First Quality',
    description: 'Every detail, from prep to final coat, is judged by how clean and durable the finish feels.',
  },
  {
    icon: Users,
    title: 'Clear Collaboration',
    description: 'We keep timelines, access needs, color decisions, and site expectations visible from day one.',
  },
  {
    icon: Zap,
    title: 'Reliable Execution',
    description: 'Our crews work with tight masking, tidy staging, and dependable scheduling for active spaces.',
  },
  {
    icon: Heart,
    title: 'Care for Space',
    description: 'Homes and businesses are treated with respect, protection, and thoughtful cleanup.',
  },
]

const stats = [
  { value: '15+', label: 'Years refining paint projects' },
  { value: '500+', label: 'Residential and commercial spaces' },
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '50+', label: 'Color and coating specialists' },
]

const process = [
  'Color direction and finish planning',
  'Surface prep, protection, and priming',
  'Precision application and final walkthrough',
]

export default function About() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      <PageIntro
        eyebrow="About ChromaElite"
        title="A painting team built around color, craft, and calm execution."
        description="Since 2010, we have helped homeowners and businesses turn practical paint work into polished, personality-rich spaces."
        image={paintImages.paintSplash}
      />

      <section className="bg-[#fffdf8] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg paint-shadow"
          >
            <Image
              src={paintImages.interiorPainter}
              alt="Painter preparing an interior wall"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Built on prep
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Sharp edges, protected rooms, and the quiet discipline that makes color look expensive.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Our story
            </p>
            <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Premium paint work should feel organized before it looks beautiful.
            </h2>
            <div className="mt-6 space-y-5 text-pretty text-lg leading-8 text-muted-foreground">
              <p>
                ChromaElite began as a small crew focused on careful residential repainting. The work
                grew because clients valued the same things we did: neat preparation, thoughtful color
                guidance, and spaces returned cleaner than we found them.
              </p>
              <p>
                Today, our team handles homes, offices, retail environments, and exterior refreshes with
                the same craft-first mindset. We pair premium materials with consistent communication so
                the experience feels as refined as the finish.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {process.map((item, index) => (
                <div key={item} className="rounded-lg border border-border bg-white/80 p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-secondary/35 text-sm font-bold text-foreground">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              What guides us
            </p>
            <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Values you can see in the finish
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="rounded-lg border border-white/80 bg-white/90 p-7 shadow-[0_20px_58px_-46px_rgba(15,23,42,0.55)] transition-all hover:-translate-y-1 hover:border-primary/25"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{value.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-lg border border-border bg-background/70 p-6 text-center"
            >
              <div className="mb-3 flex justify-center text-secondary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
