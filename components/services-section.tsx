'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Home, Building2, Palette, Wrench, Shield } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Painting',
    description: 'Transform your home with premium interior and exterior painting services tailored to your style.',
  },
  {
    icon: Building2,
    title: 'Commercial Painting',
    description: 'Professional painting solutions for offices, retail spaces, and industrial facilities.',
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert guidance on selecting the perfect colors to match your vision and space.',
  },
  {
    icon: Paintbrush,
    title: 'Surface Preparation',
    description: 'Meticulous preparation and priming for flawless, long-lasting paint application.',
  },
  {
    icon: Shield,
    title: 'Protective Coatings',
    description: 'Advanced protective solutions to extend the life of your painted surfaces.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Touch-ups',
    description: 'Regular maintenance programs to keep your spaces looking fresh and well-maintained.',
  },
]

export function ServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
            Comprehensive painting and coating solutions for residential and commercial projects
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/60">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
