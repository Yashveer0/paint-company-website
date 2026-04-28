'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Modern Living Room', category: 'Residential', image: 'from-[#667eea] to-[#764ba2]' },
  { id: 2, title: 'Kitchen Makeover', category: 'Residential', image: 'from-[#f093fb] to-[#f5576c]' },
  { id: 3, title: 'Office Reception', category: 'Commercial', image: 'from-[#4facfe] to-[#00f2fe]' },
  { id: 4, title: 'Retail Display', category: 'Commercial', image: 'from-[#43e97b] to-[#38f9d7]' },
  { id: 5, title: 'Bedroom Accent', category: 'Residential', image: 'from-[#fa709a] to-[#fee140]' },
  { id: 6, title: 'Warehouse Paint', category: 'Commercial', image: 'from-[#30cfd0] to-[#330867]' },
  { id: 7, title: 'Exterior Refresh', category: 'Residential', image: 'from-[#a8edea] to-[#fed6e3]' },
  { id: 8, title: 'Industrial Coating', category: 'Commercial', image: 'from-[#ff9a56] to-[#ff6a88]' },
]

const categories = ['All', 'Residential', 'Commercial']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Project Gallery
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Browse our portfolio of completed projects and successful transformations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${item.image.split(' ').slice(1).join(' ')})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs font-semibold text-accent mb-1 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
