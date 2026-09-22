import Link from 'next/link'
import type { Article } from '@/types/content'
import Badge from '@/components/ui/Badge'

interface ArticleCardProps {
  article: Article
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col border-t border-brand-gray/25 pt-6">
      <div className="flex items-center gap-3">
        <Badge>{article.category}</Badge>
        <time dateTime={article.publishedAt} className="text-xs text-brand-gray">
          {formatDate(article.publishedAt)}
        </time>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-near-black">
        <Link
          href={`/knowledge/${article.slug}`}
          className="transition-colors group-hover:text-brand-brown"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
        {article.summary}
      </p>
      <Link
        href={`/knowledge/${article.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-brown"
      >
        Read
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </Link>
    </article>
  )
}
