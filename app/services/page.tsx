import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const serviceDetails = [
  {
    title: 'Residential Painting',
    description: 'Transform your home with our professional residential painting services. From fresh interior walls to stunning exterior finishes, we bring expertise and attention to detail to every project.',
    features: [
      'Interior wall painting',
      'Exterior house painting',
      'Cabinet refinishing',
      'Accent wall design',
      'Texture application',
      'Epoxy flooring',
    ],
  },
  {
    title: 'Commercial Painting',
    description: 'Keep your business looking professional with our comprehensive commercial painting solutions. We work efficiently to minimize disruption to your operations.',
    features: [
      'Office space painting',
      'Retail store refreshes',
      'Warehouse coating',
      'Industrial painting',
      'High-rise exterior work',
      'Emergency repairs',
    ],
  },
  {
    title: 'Color Consultation',
    description: 'Unsure about color choices? Our expert color consultants will guide you through the selection process to find the perfect palette for your space.',
    features: [
      'Color psychology guidance',
      'Trend analysis',
      'Virtual room visualization',
      'Sample preparation',
      'Lighting assessment',
      'Brand color matching',
    ],
  },
  {
    title: 'Surface Preparation',
    description: 'Quality painting starts with proper preparation. We invest time in thorough surface preparation to ensure flawless, long-lasting results.',
    features: [
      'Pressure washing',
      'Sanding & scraping',
      'Caulking & repair',
      'Primer application',
      'Drywall patching',
      'Metal preparation',
    ],
  },
]

export default function Services() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Comprehensive painting and coating solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-foreground/60 mb-8 text-pretty leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`bg-gradient-to-br ${
                index === 0 ? 'from-primary/20 to-accent/20' :
                index === 1 ? 'from-accent/20 to-secondary/20' :
                index === 2 ? 'from-secondary/20 to-primary/20' :
                'from-primary/20 to-secondary/20'
              } rounded-xl aspect-square ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
