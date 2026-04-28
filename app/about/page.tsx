import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { motion } from 'framer-motion'
import { Award, Users, Zap, Heart } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We never compromise on quality, using premium paints and materials for every project.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We listen, communicate, and deliver beyond expectations.',
  },
  {
    icon: Zap,
    title: 'Professional Service',
    description: 'Our experienced team brings expertise, reliability, and attention to detail to every job.',
  },
  {
    icon: Heart,
    title: 'Community Care',
    description: 'We invest in our communities through partnerships, sponsorships, and local support.',
  },
]

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            About ChromaElite
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Your trusted partner in professional paint solutions since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl aspect-square" />
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-foreground/70">
              <p className="text-pretty leading-relaxed">
                ChromaElite was founded in 2010 with a simple vision: to provide professional, high-quality painting services that transform spaces and exceed expectations. What started as a small team of passionate painters has grown into a trusted partner for hundreds of satisfied clients.
              </p>
              <p className="text-pretty leading-relaxed">
                Over the years, we&apos;ve perfected our craft, invested in the best tools and materials, and built a team of skilled professionals dedicated to delivering excellence. Today, we&apos;re proud to be a leading painting company serving residential and commercial clients across the region.
              </p>
              <p className="text-pretty leading-relaxed">
                Our commitment remains unchanged: quality craftsmanship, exceptional customer service, and transforming your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">15+</div>
            <p className="text-foreground/60">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">500+</div>
            <p className="text-foreground/60">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">98%</div>
            <p className="text-foreground/60">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-foreground/60">Team Members</p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
