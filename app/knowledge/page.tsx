import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import CategoryFilter from '@/components/knowledge/CategoryFilter'
import { getArticles } from '@/lib/content/articles'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Knowledge Hub',
  path: '/knowledge',
  description:
    'Technical stories, articles, case studies, white papers and industry updates from Gedsliey Inc.',
})

export default function KnowledgePage() {
  const articles = getArticles()

  return (
    <>
      <section className="bg-off-white pb-16 pt-24 md:pb-20 md:pt-32">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Knowledge Hub
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-near-black sm:text-5xl lg:text-6xl">
            Technical stories &amp; evidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray">
            Investigations, articles, and industry perspective — written the way we work:
            starting with the question.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container as="div">
          <CategoryFilter articles={articles} />
        </Container>
      </section>
    </>
  )
}
