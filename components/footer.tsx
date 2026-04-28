'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { id: 'services-1', label: 'Residential Painting', href: '/services' },
    { id: 'services-2', label: 'Commercial Painting', href: '/services' },
    { id: 'services-3', label: 'Color Consultation', href: '/services' },
    { id: 'services-4', label: 'Maintenance', href: '/services' },
  ],
  Company: [
    { id: 'company-1', label: 'About Us', href: '/about' },
    { id: 'company-2', label: 'Gallery', href: '/gallery' },
    { id: 'company-3', label: 'Contact', href: '/contact' },
    { id: 'company-4', label: 'Blog', href: '#' },
  ],
  Legal: [
    { id: 'legal-1', label: 'Privacy Policy', href: '#' },
    { id: 'legal-2', label: 'Terms of Service', href: '#' },
    { id: 'legal-3', label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">C</div>
              </div>
              <span className="font-bold text-lg">ChromaElite</span>
            </div>
            <p className="text-sm text-foreground/60 mb-6">
              Professional paint solutions for residential and commercial spaces since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/60">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/60">hello@chromaelite.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/60">123 Paint Street<br />Design City, DC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              &copy; 2024 ChromaElite. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
