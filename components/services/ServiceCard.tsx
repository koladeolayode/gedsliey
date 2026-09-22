import Link from 'next/link'

interface ServiceCardProps {
  index: string
  title: string
  description: string
  href: string
}

export default function ServiceCard({
  index,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border-t border-brand-gray/25 pt-6 transition-colors hover:border-brand-brown"
    >
      <span className="font-display text-sm font-semibold text-brand-brown">{index}</span>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-near-black">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-brand-gray">
        {description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-brown">
        Explore
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </span>
    </Link>
  )
}
