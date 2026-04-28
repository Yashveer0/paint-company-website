'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.16,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/45 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.7)]'
          : 'bg-white/60 shadow-[0_12px_40px_-36px_rgba(15,23,42,0.65)]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2" aria-label="ChromaElite home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#2563eb,#12b981,#f97316)] paint-flow shadow-sm">
                <div className="text-lg font-bold text-white">C</div>
              </div>
              <span className="hidden text-lg font-bold text-foreground sm:inline">ChromaElite</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === item.href : pathname.startsWith(item.href)

              return (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-white/75 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_12px_26px_-16px_rgba(37,99,235,0.95)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_34px_-18px_rgba(37,99,235,0.9)]"
            >
              Get Quote
            </Link>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-white/75 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="overflow-hidden border-t border-white/45 md:hidden"
        >
          <div className="space-y-1 px-2 pt-3 pb-4">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === item.href : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-white/75 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="block rounded-lg bg-primary px-3 py-2 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
