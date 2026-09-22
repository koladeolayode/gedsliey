import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ConsultationCTA from '@/components/sections/ConsultationCTA'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    "Gedsliey's three areas of deep technical expertise: Material & Chemical Advisory, Bridge Bearing Advisory, and R&D Consulting.",
}

export default function ExpertisePage() {
  return (
    <>
      <section className="bg-off-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Our Expertise
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-near-black sm:text-5xl lg:text-7xl">
            Specialized. Rigorous. Independent.
          </h1>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container as="div">
          <div className="space-y-0">
            {SERVICES.map((service, i) => (
              <div
                key={service.slug}
                className={`grid gap-0 border border-gray-100 lg:grid-cols-2${
                  i > 0 ? ' border-t-0' : ''
                }`}
              >
                <div className="p-10 border-b lg:border-b-0 lg:border-r border-gray-100 lg:p-16">
                  <span className="font-display text-4xl font-bold text-brand-brown/20 mb-6 block">
                    {service.index}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-near-black mb-4 lg:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-brand-gray leading-relaxed mb-8">
                    {service.shortDescription}
                  </p>
                  <Button href={service.href} variant="secondary">
                    Explore this service →
                  </Button>
                </div>
                <div className="p-10 bg-off-white lg:p-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
                    Key Capabilities
                  </p>
                  <ul className="space-y-3">
                    {service.capabilities.slice(0, 6).map((cap) => (
                      <li
                        key={cap}
                        className="flex gap-4 text-brand-gray text-sm leading-relaxed"
                      >
                        <span className="text-brand-brown mt-0.5 shrink-0">—</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  )
}
