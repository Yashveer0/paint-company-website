'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { id: 'services-1', label: 'Residential Painting', href: '/services' },
    { id: 'services-2', label: 'Commercial Painting', href: '/services' },
    { id: 'services-3', label: 'Color Consultation', href: '/services' },
    { id: 'services-4', label: 'Protective Coatings', href: '/services' },
  ],
  Company: [
    { id: 'company-1', label: 'About Us', href: '/about' },
    { id: 'company-2', label: 'Gallery', href: '/gallery' },
    { id: 'company-3', label: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex w-fit items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#2563eb,#12b981,#f97316)] paint-flow">
                <div className="text-lg font-bold text-white">C</div>
              </div>
              <span className="text-lg font-bold">ChromaElite</span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              Premium paint solutions for residential and commercial spaces, built around sharp prep,
              expressive palettes, and durable finishes.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/75 transition-colors hover:border-secondary/60 hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-white/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-white/60">hello@chromaelite.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm leading-6 text-white/60">
                  123 Paint Street
                  <br />
                  Design City, DC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 ChromaElite. All rights reserved.</p>
            <p>Color guidance, preparation, painting, and coating support.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
