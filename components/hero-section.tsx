'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const heroSlides = [
  {
    id: 1,
    title: 'Residential Excellence',
    subtitle: 'Transform your home with premium interior and exterior painting',
    bgColor: 'from-blue-600 to-blue-400',
    image: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9), rgba(59, 130, 246, 0.9))',
  },
  {
    id: 2,
    title: 'Commercial Perfection',
    subtitle: 'Professional painting solutions for businesses and enterprises',
    bgColor: 'from-purple-600 to-purple-400',
    image: 'linear-gradient(135deg, rgba(126, 34, 206, 0.9), rgba(147, 51, 234, 0.9))',
  },
  {
    id: 3,
    title: 'Creative Color Consultation',
    subtitle: 'Expert advice to choose the perfect colors for any space',
    bgColor: 'from-orange-600 to-orange-400',
    image: 'linear-gradient(135deg, rgba(194, 65, 12, 0.9), rgba(234, 88, 12, 0.9))',
  },
]

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[600px] md:h-[700px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ background: slide.image }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Content */}
              <motion.div
                className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  className="flex flex-col md:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-foreground rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats Section */}
      <motion.div
        className="relative z-20 bg-background -mt-20 pt-20 pb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 8px;
          margin: 0 20px;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }
      `}</style>
    </section>
  )
}
