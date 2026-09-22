import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
  className?: string
}

export default function FormField({
  label,
  htmlFor,
  required = false,
  error,
  hint,
  children,
  className = '',
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-near-black"
      >
        {label}
        {required && <span className="ml-1 text-brand-brown" aria-hidden="true">*</span>}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error && <p className="mt-1.5 text-xs text-brand-gray">{hint}</p>}
      {error && (
        <p className="mt-1.5 text-xs text-brand-brown" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
