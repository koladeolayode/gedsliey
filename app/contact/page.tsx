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
                    Email
                  </p>
                  <p className="text-brand-gray text-sm">
                    [CLIENT TO PROVIDE EMAIL ADDRESS]
                  </p>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-near-black mb-1">
                    LinkedIn
                  </p>
                  <p className="text-brand-gray text-sm">
                    [CLIENT TO PROVIDE LINKEDIN URL]
                  </p>
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
