'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/knowledge', label: 'Knowledge Hub' },
  { href: '/contact', label: 'Contact' },
]

const EXPERTISE_LINKS = [
  {
    href: '/expertise/material-chemical-advisory',
    label: 'Material & Chemical Advisory',
    description: 'Failure investigation, corrosion, coatings and material integrity.',
  },
  {
    href: '/expertise/bridge-bearing-advisory',
    label: 'Bridge Bearing Advisory',
    description: 'Independent test review, forensic assessment and qualification.',
  },
  {
    href: '/expertise/research-development-consulting',
    label: 'Research & Development',
    description: 'Funding support, product development and technical due diligence.',
  },
]

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Gedsliey Inc. home"
      className="logo-link group relative flex items-baseline gap-1 rounded-md px-3 py-1.5 transition-all duration-300 hover:scale-[1.10]"
    >
      <span
        aria-hidden="true"
        className="liquid-glass pointer-events-none absolute inset-0 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100"
      />
      <span className="relative font-display text-xl font-bold tracking-tight text-near-black transition-colors duration-300 group-hover:text-brand-brown">
        GEDSLIEY
      </span>
      <span className="relative font-display text-xs font-semibold tracking-[0.2em] text-brand-gray transition-colors duration-300 group-hover:text-brand-brown/70">
        INC.
      </span>
    </Link>
  )
}

function ExpertiseDropdown() {
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const active = pathname.startsWith('/expertise')

  return (
    <div className="group relative">
      {/* Trigger */}
      <Link
        href="/expertise"
        aria-current={active ? 'page' : undefined}
        className={`flex items-center gap-1 text-sm transition-colors hover:text-brand-brown ${
          active ? 'text-brand-brown' : 'text-near-black'
        }`}
      >
        Expertise
        <svg
          className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* Dropdown panel */}
      <div
        className="invisible absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
        role="menu"
      >
        {/* Arrow */}
        <div className="mx-auto mb-0 h-2 w-4 overflow-hidden" aria-hidden="true">
          <div className="mx-auto h-3 w-3 origin-bottom-left rotate-45 border border-gray-200 bg-white" />
        </div>

        <div className="border border-gray-200 bg-white shadow-lg">
          {/* Header row */}
          <div className="border-b border-gray-100 px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown">
              Our Expertise
            </p>
          </div>

          {/* Items */}
          <ul>
            {EXPERTISE_LINKS.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className={`group/item flex flex-col gap-0.5 px-5 py-4 transition-colors hover:bg-gray-50 ${
                    i < EXPERTISE_LINKS.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="font-display text-sm font-semibold text-near-black group-hover/item:text-brand-brown transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs leading-relaxed text-brand-gray">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer row */}
          <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
            <Link
              href="/expertise"
              className="text-xs font-medium text-brand-brown hover:underline"
            >
              View all expertise →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '/consultation'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/95 backdrop-blur">
      <Container as="div" className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {/* Home */}
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`text-sm transition-colors hover:text-brand-brown ${
              pathname === '/' ? 'text-brand-brown' : 'text-near-black'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            aria-current={pathname === '/about' ? 'page' : undefined}
            className={`text-sm transition-colors hover:text-brand-brown ${
              pathname === '/about' ? 'text-brand-brown' : 'text-near-black'
            }`}
          >
            About
          </Link>

          {/* Expertise with dropdown */}
          <ExpertiseDropdown />

          {NAV_LINKS.filter(l => l.href !== '/' && l.href !== '/about').map((link) => {
            const active = pathname.startsWith(link.href)
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

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-near-black transition-transform duration-200 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-near-black transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-near-black transition-transform duration-200 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </Container>

      {/* Mobile menu */}
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
              <Link href="/" onClick={() => setOpen(false)} className="py-2 text-base text-near-black hover:text-brand-brown">Home</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-base text-near-black hover:text-brand-brown">About</Link>

              {/* Mobile expertise accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setExpertiseOpen(v => !v)}
                  className="flex w-full items-center justify-between py-2 text-base text-near-black hover:text-brand-brown"
                  aria-expanded={expertiseOpen}
                >
                  Expertise
                  <svg className={`h-4 w-4 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {expertiseOpen && (
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-gray-200 pl-4">
                    {EXPERTISE_LINKS.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setOpen(false); setExpertiseOpen(false) }}
                        className="py-1.5 text-sm text-brand-gray hover:text-brand-brown"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/expertise"
                      onClick={() => { setOpen(false); setExpertiseOpen(false) }}
                      className="py-1.5 text-sm font-medium text-brand-brown"
                    >
                      All Expertise →
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/knowledge" onClick={() => setOpen(false)} className="py-2 text-base text-near-black hover:text-brand-brown">Knowledge Hub</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="py-2 text-base text-near-black hover:text-brand-brown">Contact</Link>
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
