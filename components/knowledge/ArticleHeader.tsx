import type { Article } from '@/types/content'
import Badge from '@/components/ui/Badge'
import Tag from '@/components/ui/Tag'

interface ArticleHeaderProps {
  article: Article
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="border-b border-brand-gray/15 pb-10">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{article.category}</Badge>
        <time dateTime={article.publishedAt} className="text-sm text-brand-gray">
          {formatDate(article.publishedAt)}
        </time>
        <span className="text-sm text-brand-gray">&middot; {article.author}</span>
      </div>
      <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-near-black sm:text-5xl">
        {article.title}
      </h1>
      {article.summary && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-gray">
          {article.summary}
        </p>
      )}
      {article.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </header>
  )
}
