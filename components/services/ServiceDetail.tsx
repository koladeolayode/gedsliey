import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import type { Service } from '@/lib/services'

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article>
      {/* Hero */}
      <section className="bg-off-white tech-grid">
        <Container as="div" className="py-20 md:py-28">
          <Breadcrumbs
            className="mb-8"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Expertise', href: '/expertise' },
              { label: service.title },
            ]}
          />
          <Badge>{service.index}</Badge>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-near-black sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      {/* Problem / Why difficult / Approach */}
      <section className="bg-white py-20 md:py-28">
        <Container as="div">
          <div className="grid gap-14 lg:grid-cols-3">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown">
                The Problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-near-black">
                {service.problem}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown">
                Why It&rsquo;s Difficult
              </h2>
              <p className="mt-4 text-base leading-relaxed text-near-black">
                {service.whyDifficult}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown">
                Our Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-near-black">
                {service.approach}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-off-white py-20 md:py-28">
        <Container as="div">
          <h2 className="font-display text-2xl font-bold text-near-black sm:text-3xl">
            Capabilities
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-baseline gap-3 border-b border-brand-gray/15 pb-4 text-near-black"
              >
                <span className="h-1.5 w-1.5 shrink-0 translate-y-1.5 bg-brand-brown" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{cap}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Typical questions + Deliverables */}
      <section className="bg-white py-20 md:py-28">
        <Container as="div">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black sm:text-3xl">
                Typical questions we answer
              </h2>
              <ul className="mt-8 space-y-5">
                {service.typicalQuestions.map((q) => (
                  <li key={q} className="border-l-2 border-brand-brown pl-5 text-lg text-near-black">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black sm:text-3xl">
                Deliverables
              </h2>
              <ul className="mt-8 space-y-4">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-3 border-b border-brand-gray/15 pb-4 text-near-black"
                  >
                    <span className="font-display text-sm font-semibold text-brand-brown">
                      &rarr;
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-brown py-20 text-off-white md:py-24">
        <Container as="div">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-off-white sm:text-4xl">
              Have a question in this area?
            </h2>
            <p className="mt-4 text-lg text-off-white/70">Start with the question.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                style={{ backgroundColor: '#F7F7F5', color: '#4A382E' }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-white"
              >
                Contact Gedsliey
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center border border-off-white px-6 py-3 text-sm font-medium tracking-wide text-off-white transition-colors duration-200 hover:bg-off-white hover:text-brand-brown"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
