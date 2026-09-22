'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

const CREDENTIALS = [
  {
    label: 'PhD-qualified engineering',
    detail: 'Advanced academic and applied research grounding across materials and structures.',
  },
  {
    label: '20+ years of experience',
    detail: 'Decades investigating failures, materials, and complex engineering systems.',
  },
  {
    label: 'Independent assessment',
    detail: 'No predetermined conclusions and no conflict of interest — the evidence leads.',
  },
  {
    label: 'Evidence-based',
    detail: 'Every finding is grounded in data, testing, and the physical record.',
  },
  {
    label: 'Rigorous critical thinking',
    detail: 'Assumptions are challenged, not inherited. We ask the unasked question.',
  },
]

export default function WhyGedsliey() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-white py-24 md:py-32">
      <Container as="div">
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
              Why Gedsliey
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-near-black sm:text-4xl">
              Technical credibility built on evidence, not claims.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-gray">
              Independent, PhD-qualified expertise applied to complex engineering
              problems — with no predetermined conclusions.
            </p>
          </div>

          <ol className="space-y-0">
            {CREDENTIALS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: reduce ? 0.2 : 0.4, delay: reduce ? 0 : i * 0.06 }}
                className="grid gap-2 border-t border-brand-gray/15 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="font-display text-lg font-bold text-brand-brown">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-near-black">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                    {item.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
