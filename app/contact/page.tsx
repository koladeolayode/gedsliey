import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ContactForm from '@/components/forms/ContactForm'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  path: '/contact',
  description:
    'Contact Gedsliey Inc. to discuss a technical challenge, enquire about our services, or ask a technical question.',
})

export default function ContactPage() {
  return (
    <>
      <section className="bg-off-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Contact
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-near-black sm:text-5xl lg:text-7xl">
            Start with the question.
          </h1>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container as="div">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-6">
                Get in touch
              </h2>
              <p className="text-brand-gray leading-relaxed mb-8">
                Whether you have a specific technical problem to investigate, a project
                requiring independent advisory, or simply want to understand whether Gedsliey
                can help — start here.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-display font-semibold text-sm text-near-black mb-1">
                    General Enquiries
                  </p>
                  <a
                    href="mailto:info@gedsliey.com"
                    className="text-brand-gray text-sm hover:text-brand-brown transition-colors"
                  >
                    info@gedsliey.com
                  </a>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-near-black mb-1">
                    Support
                  </p>
                  <a
                    href="mailto:support@gedsliey.com"
                    className="text-brand-gray text-sm hover:text-brand-brown transition-colors"
                  >
                    support@gedsliey.com
                  </a>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-near-black mb-2">
                    LinkedIn
                  </p>
                  {process.env.NEXT_PUBLIC_LINKEDIN_URL ? (
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Gedsliey on LinkedIn"
                      className="inline-flex items-center text-brand-gray hover:text-brand-brown transition-colors"
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
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
