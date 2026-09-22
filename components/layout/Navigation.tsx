'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/knowledge', label: 'Knowledge Hub' },
  { href: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-baseline gap-1" aria-label="Gedsliey Inc. home">
      <span className="font-display text-xl font-bold tracking-tight text-near-black">
        GEDSLIEY
      </span>
      <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gray">
        INC.
      </span>
    </Link>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '/consultation'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/95 backdrop-blur">
      <Container as="div" className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm transition-colors hover:text-brand-brown ${
                  active ? 'text-brand-brown' : 'text-near-black'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href={bookingUrl}
            className="bg-brand-brown px-5 py-2.5 text-sm font-medium text-off-white transition-colors hover:bg-brand-plum"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-near-black transition-transform duration-200 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-near-black transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-near-black transition-transform duration-200 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="overflow-hidden border-t border-gray-200 bg-gray-50 md:hidden"
          >
            <Container as="div" className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base text-near-black hover:text-brand-brown"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={bookingUrl}
                onClick={() => setOpen(false)}
                className="mt-2 bg-brand-brown px-5 py-3 text-center text-sm font-medium text-off-white"
              >
                Book a Consultation
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
