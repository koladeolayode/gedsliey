import type { ReactNode } from 'react'

const STEPS = [
  'The Question',
  'The Investigation',
  'The Evidence',
  'The Finding',
  'The Solution',
  'The Lesson',
]

interface TechnicalStoryProps {
  children?: ReactNode
}

export default function TechnicalStory({ children }: TechnicalStoryProps) {
  return (
    <div>
      <ol className="space-y-0">
        {STEPS.map((step, i) => (
          <li
            key={step}
            className="grid gap-2 border-t border-brand-gray/15 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
          >
            <span className="font-display text-lg font-bold text-brand-brown">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-wide text-near-black">
              {step}
            </span>
          </li>
        ))}
      </ol>
      {children}
    </div>
  )
}
