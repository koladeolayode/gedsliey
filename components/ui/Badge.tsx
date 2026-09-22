import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border border-brand-gray/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-gray ${className}`}
    >
      {children}
    </span>
  )
}
