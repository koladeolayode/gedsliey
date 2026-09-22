'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ROWS = [
  {
    label: 'The Obvious Question',
    text: 'What is the immediate cause of the failure?',
    accent: false,
  },
  {
    label: 'Obvious Answer',
    text: 'The component exceeded its rated load.',
    accent: false,
  },
  {
    label: 'The Unasked Question',
    text: 'Why did the design permit that load path in the first place?',
    accent: true,
  },
  {
    label: 'The Gedsliey Approach',
    text: 'Trace the evidence to the decision — not just the defect — and define what should change.',
    accent: true,
  },
]

export default function QuestionSequence() {
  const reduce = useReducedMotion()

  return (
    <div className="divide-y divide-brand-gray/15 border-y border-brand-gray/15">
      {ROWS.map((row, i) => (
        <motion.div
          key={row.label}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reduce ? 0.2 : 0.45, delay: reduce ? 0 : i * 0.06 }}
          className={`grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8 ${
            row.accent ? 'bg-brand-brown/[0.03]' : ''
          }`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${
              row.accent ? 'text-brand-brown' : 'text-brand-gray'
            }`}
          >
            {row.label}
          </p>
          <p
            className={`text-lg leading-relaxed ${
              row.accent ? 'font-medium text-near-black' : 'text-brand-gray'
            }`}
          >
            {row.text}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
