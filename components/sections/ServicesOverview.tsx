import Container from '@/components/ui/Container'
import ServiceCard from '@/components/services/ServiceCard'
import { SERVICES } from '@/lib/services'

export default function ServicesOverview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container as="div">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Expertise
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-near-black sm:text-4xl">
            Three areas of independent technical depth.
          </h2>
        </div>

        <div className="mt-16 grid gap-0 divide-x divide-gray-200 border border-gray-200 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              index={service.index}
              title={service.title}
              description={service.shortDescription}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
