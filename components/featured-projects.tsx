'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Modern Residential Makeover',
    category: 'Residential',
    image: 'linear-gradient(135deg, from-[#667eea] to-[#764ba2])',
  },
  {
    id: 2,
    title: 'Corporate Office Refresh',
    category: 'Commercial',
    image: 'linear-gradient(135deg, from-[#f093fb] to-[#f5576c])',
  },
  {
    id: 3,
    title: 'Retail Store Transformation',
    category: 'Commercial',
    image: 'linear-gradient(135deg, from-[#4facfe] to-[#00f2fe])',
  },
  {
    id: 4,
    title: 'Heritage Home Restoration',
    category: 'Residential',
    image: 'linear-gradient(135deg, from-[#43e97b] to-[#38f9d7])',
  },
]

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/60 text-pretty">
              Showcase of our finest work and successful transformations
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl aspect-video bg-muted cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: project.image }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center sm:hidden"
        >
          <Link
            href="/gallery"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
