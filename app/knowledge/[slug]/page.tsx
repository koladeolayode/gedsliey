import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ArticleHeader from '@/components/knowledge/ArticleHeader'
import { getArticles } from '@/lib/content/articles'
import { getArticleBySlug } from '@/lib/content/mdx'
import { generatePageMetadata } from '@/lib/seo/metadata'

export async function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/knowledge/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return generatePageMetadata({ title: 'Article not found', path: `/knowledge/${slug}`, noIndex: true })
  }
  return generatePageMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.summary,
    path: `/knowledge/${article.slug}`,
    type: 'article',
    publishedTime: article.publishedAt,
    image: article.heroImage,
  })
}

// Editorial styling for MDX content (no typography plugin in Tailwind v4).
const proseClass =
  'max-w-3xl text-lg leading-relaxed text-near-black ' +
  '[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-near-black ' +
  '[&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold ' +
  '[&_p]:mt-6 [&_ul]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2 ' +
  '[&_a]:text-brand-brown [&_a]:underline [&_strong]:font-semibold ' +
  '[&_blockquote]:mt-8 [&_blockquote]:border-l-2 [&_blockquote]:border-brand-brown [&_blockquote]:pl-5 [&_blockquote]:text-brand-gray'

export default async function ArticlePage({ params }: PageProps<'/knowledge/[slug]'>) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <>
      <section className="bg-off-white pb-12 pt-24 md:pt-32">
        <Container as="div">
          <Breadcrumbs
            className="mb-8"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Knowledge Hub', href: '/knowledge' },
              { label: article.title },
            ]}
          />
          <ArticleHeader article={article} />
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container as="div">
          <div className={proseClass}>
            {article.body ? (
              <MDXRemote source={article.body} />
            ) : (
              <p className="text-brand-gray">Content not available.</p>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-brand-gray/15 bg-off-white py-12">
        <Container as="div">
          <Button href="/knowledge" variant="secondary">
            &larr; Back to Knowledge Hub
          </Button>
        </Container>
      </section>
    </>
  )
}
