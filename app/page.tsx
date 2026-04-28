import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  )
}
