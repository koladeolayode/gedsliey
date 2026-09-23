import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'

interface CommonProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

interface LinkButtonProps extends CommonProps {
  href: string
  external?: boolean
  type?: never
  onClick?: never
  disabled?: never
}

interface NativeButtonProps extends CommonProps {
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

type ButtonProps = LinkButtonProps | NativeButtonProps

const base =
  'inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown focus-visible:ring-offset-2 focus-visible:ring-offset-off-white disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-brown text-off-white hover:bg-brand-plum',
  secondary:
    'border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-off-white',
  ghost:
    'text-brand-brown underline-offset-4 hover:underline px-0 py-0 hover:text-brand-plum',
  inverse: 'bg-white text-brand-brown hover:bg-off-white',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
