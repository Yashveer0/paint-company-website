'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PageIntro } from '@/components/page-intro'
import { paintImages } from '@/lib/paint-assets'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@chromaelite.com',
    href: 'mailto:hello@chromaelite.com',
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: '123 Paint Street, Design City, DC 12345',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri 8:00 AM-6:00 PM, Sat 9:00 AM-4:00 PM',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    }, 3000)
  }

  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      <PageIntro
        eyebrow="Contact"
        title="Tell us what your space needs next."
        description="Share a few project details and we will help you shape a clear paint plan, timeline, and quote."
        image={paintImages.paintBrushes}
      />

      <section className="bg-[#fffdf8] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg paint-shadow"
            >
              <Image
                src={paintImages.rollerTray}
                alt="Paint roller and tray prepared for a project"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                  Project clarity
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  The best quote starts with the right details: surfaces, timeline, color goals, and finish needs.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => {
                const Icon = info.icon

                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="rounded-lg border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.55)]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-semibold leading-6 text-foreground transition-colors hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold leading-6 text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-lg border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.65)] sm:p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Free estimate
            </p>
            <h2 className="text-3xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-3 text-pretty leading-7 text-muted-foreground">
              A project manager will review your details and follow up with next steps.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex min-h-[420px] items-center justify-center rounded-lg border border-primary/15 bg-primary/5"
              >
                <div className="max-w-sm text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Message sent</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    Thank you for reaching out. We will be in touch soon with a clear next step.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-sm font-semibold text-foreground">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Painting</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="consultation">Color Consultation</option>
                      <option value="coatings">Protective Coatings</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    placeholder="Tell us about your space, timeline, and color goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_34px_-22px_rgba(37,99,235,0.9)]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
