'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const IMAGES = [
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80&auto=format&fit=crop',  // city bridge
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop',  // suspension bridge cables
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop',  // structural steel materials
  'https://images.unsplash.com/photo-1565891741440-64078f9db925?w=1600&q=80&auto=format&fit=crop',  // chemical / industrial plant
  'https://images.unsplash.com/photo-1563089145-599997674d42?w=1600&q=80&auto=format&fit=crop',  // corrosion / rust on metal
  'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1600&q=80&auto=format&fit=crop',  // chemistry / research lab
]

export default function Hero() {
  const reduce = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (reduce) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [reduce])

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay },
  })

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-near-black">
      {/* Crossfading background images */}
      <AnimatePresence>
        <motion.div
          key={current}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IMAGES[current]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Directional gradient — stronger on left where text sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/40 to-transparent"
      />

      {/* Technical line pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 text-white/10"
        preserveAspectRatio="xMaxYMid slice"
        viewBox="0 0 400 400"
        fill="none"
      >
        <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="320" x2="400" y2="320" stroke="currentColor" strokeWidth="1" />
        <line x1="120" y1="0" x2="120" y2="400" stroke="currentColor" strokeWidth="1" />
        <line x1="280" y1="0" x2="280" y2="400" stroke="currentColor" strokeWidth="1" />
        <circle cx="280" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
        <circle cx="280" cy="200" r="4" fill="currentColor" />
      </svg>

      <Container as="div" className="relative py-28 md:py-40">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0)}
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60"
          >
            Independent Technical Consulting
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)' }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl"
          >
            ASKING THE
            <br />
            UNASKED.
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/80"
          >
            The obvious question rarely reveals the full picture. We interrogate
            evidence, challenge assumptions, and surface the questions others miss —
            across materials, chemicals, bridge bearings, and R&amp;D.
          </motion.p>
          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap gap-4">
            <Button href="/expertise" variant="primary">
              Explore Expertise
            </Button>
            <Link
              href="/contact"
              style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#ffffff' }}
              className="inline-flex items-center justify-center border px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-white/20 hover:border-white"
            >
              Start With a Question
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <div className="mt-10 flex gap-2" aria-hidden="true">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
