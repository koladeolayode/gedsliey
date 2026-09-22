import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import AskingTheUnasked from '@/components/sections/AskingTheUnasked'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyGedsliey from '@/components/sections/WhyGedsliey'
import TechnicalStorytelling from '@/components/sections/TechnicalStorytelling'
import KnowledgePreview from '@/components/sections/KnowledgePreview'
import ConsultationCTA from '@/components/sections/ConsultationCTA'
import QuestionSequence from '@/components/technical/QuestionSequence'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Asking the Unasked',
  path: '/',
  description:
    'Gedsliey Inc. — independent technical consulting in materials, chemicals, bridge bearings, and R&D. The obvious question isn\'t always the right one.',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <AskingTheUnasked />

      <section className="bg-white py-24 md:py-32">
        <Container as="div">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
              What Sets Us Apart
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-near-black sm:text-4xl">
              We move past the obvious answer.
            </h2>
          </div>
          <div className="mt-14">
            <QuestionSequence />
          </div>
        </Container>
      </section>

      <ServicesOverview />
      <WhyGedsliey />
      <TechnicalStorytelling />
      <KnowledgePreview />
      <ConsultationCTA />
    </>
  )
}
