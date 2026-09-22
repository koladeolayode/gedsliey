'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/ui/Container'

const QUESTIONS = [
  'WHAT HAPPENED?',
  'WHY DID IT HAPPEN?',
  'WHAT WAS OVERLOOKED?',
  'WHAT DOES THE EVIDENCE TELL US?',
  'WHAT SHOULD HAPPEN NEXT?',
]

export default function AskingTheUnasked() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-off-white py-24 md:py-32">
      <Container as="div">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
              The Method
            </p>
            <h2 className="mt-6 max-w-md font-display text-3xl font-bold leading-tight text-near-black sm:text-4xl">
              THE OBVIOUS QUESTION ISN&rsquo;T ALWAYS THE RIGHT ONE.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-gray">
              Every technical problem hides a sequence of questions. We follow that
              sequence with discipline — refusing to stop at the first plausible answer.
            </p>
          </div>

          <ol className="space-y-6">
            {QUESTIONS.map((q, i) => (
              <motion.li
                key={q}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: reduce ? 0.2 : 0.5, delay: reduce ? 0 : i * 0.08 }}
                className="flex items-baseline gap-5 border-b border-brand-gray/15 pb-5"
              >
                <span className="font-display text-sm font-semibold text-brand-brown">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-xl font-semibold text-near-black sm:text-2xl">
                  {q}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
