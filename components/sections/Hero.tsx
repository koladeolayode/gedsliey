'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay },
  })

  return (
    <section className="relative overflow-hidden bg-off-white tech-grid">
      {/* Inline technical line pattern */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 text-brand-gray/20"
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
            className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown"
          >
            Independent Technical Consulting
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] text-near-black sm:text-6xl md:text-7xl"
          >
            ASKING THE
            <br />
            UNASKED.
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-brand-gray"
          >
            The obvious question rarely reveals the full picture. We interrogate
            evidence, challenge assumptions, and surface the questions others miss —
            across materials, chemicals, bridge bearings, and R&amp;D.
          </motion.p>
          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap gap-4">
            <Button href="/expertise" variant="primary">
              Explore Expertise
            </Button>
            <Button href="/contact" variant="secondary">
              Start With a Question
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
