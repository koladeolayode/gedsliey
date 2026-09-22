import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ArticleCard from '@/components/knowledge/ArticleCard'
import { getArticles } from '@/lib/content/articles'

export default function KnowledgePreview() {
  const articles = getArticles().slice(0, 3)

  return (
    <section className="bg-off-white py-24 md:py-32">
      <Container as="div">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
              Knowledge Hub
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-near-black sm:text-4xl">
              Technical stories, articles, and evidence.
            </h2>
          </div>
          <Button href="/knowledge" variant="ghost">
            View all &rarr;
          </Button>
        </div>

        {articles.length > 0 ? (
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-12 border-t border-brand-gray/25 pt-10">
            <p className="max-w-xl text-lg text-brand-gray">
              Technical insights and case studies are in preparation. Have a technical
              question in the meantime?
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Start with the question
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
