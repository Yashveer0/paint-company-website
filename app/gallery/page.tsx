'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageIntro } from '@/components/page-intro'
import { paintImages } from '@/lib/paint-assets'

const galleryItems = [
  {
    id: 1,
    title: 'Soft Neutral Living Room',
    category: 'Residential',
    image: paintImages.interior,
  },
  {
    id: 2,
    title: 'Warm Accent Finish',
    category: 'Residential',
    image: paintImages.yellowWall,
  },
  {
    id: 3,
    title: 'Office Refresh Prep',
    category: 'Commercial',
    image: paintImages.rollerTray,
  },
  {
    id: 4,
    title: 'Exterior Weather Coat',
    category: 'Exterior',
    image: paintImages.exteriorPainter,
  },
  {
    id: 5,
    title: 'Color Studio Palette',
    category: 'Residential',
    image: paintImages.paintBrushes,
  },
  {
    id: 6,
    title: 'Interior Site Work',
    category: 'Commercial',
    image: paintImages.interiorPainter,
  },
  {
    id: 7,
    title: 'Texture Detail Study',
    category: 'Residential',
    image: paintImages.textureWall,
  },
  {
    id: 8,
    title: 'Clean Roller Finish',
    category: 'Commercial',
    image: paintImages.rollerCloseup,
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Exterior']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      <PageIntro
        eyebrow="Gallery"
        title="A portfolio of color, finish, and surface transformations."
        description="Browse selected work across residential interiors, commercial refreshes, exterior coatings, and finish details."
        image={paintImages.paintSplash}
      />

      <section className="bg-[#fffdf8] px-4 pt-14 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-lg border border-border bg-white/80 p-2 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.6)]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted paint-shadow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white opacity-100 transition-all duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
