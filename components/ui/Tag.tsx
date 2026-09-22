interface TagProps {
  label: string
  className?: string
}

export default function Tag({ label, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center bg-brand-brown/5 px-2.5 py-1 text-xs font-medium text-brand-brown ${className}`}
    >
      {label}
    </span>
  )
}
