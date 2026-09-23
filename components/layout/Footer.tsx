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
                  aria-label="Gedsliey on LinkedIn"
                  className="inline-flex items-center gap-2 text-brand-gray transition-colors hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              ) : (
                <span
                  aria-label="LinkedIn"
                  title="LinkedIn — coming soon"
                  className="inline-flex items-center text-brand-gray/40 cursor-default"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
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
        <p>
          Designed by{' '}
          <a
            href="https://oakessolutions.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gray hover:text-white transition-colors underline underline-offset-2"
          >
            Oakes Solutions
          </a>
        </p>
      </Container>
    </footer>
  )
}
