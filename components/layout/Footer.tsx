import Link from 'next/link'
import Container from '@/components/ui/Container'

const FOOTER_NAV = [
  { href: '/about', label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/knowledge', label: 'Knowledge Hub' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL

  return (
    <footer className="mt-24 bg-near-black text-white">
      <Container as="div" className="grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              GEDSLIEY
            </span>
            <span className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-gray">
              INC.
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-gray">
            Independent technical thinking. Asking the unasked questions across
            materials, chemicals, bridge bearings, and research &amp; development.
          </p>
          <div className="mt-6 h-px w-12 bg-brand-brown" aria-hidden="true" />
          <p className="mt-4 text-xs tracking-widest uppercase text-brand-gray/60">
            Asking the Unasked
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-200">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-gray transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-200">
            Connect
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {linkedin ? (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              ) : (
                <span className="text-brand-gray/50">LinkedIn [LINK TO BE PROVIDED]</span>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="text-brand-gray transition-colors hover:text-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container
        as="div"
        className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-brand-gray sm:flex-row sm:items-center sm:justify-between"
      >
        <p>&copy; {year} Gedsliey Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <span aria-hidden="true" className="text-white/20">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  )
}
