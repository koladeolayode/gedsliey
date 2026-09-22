'use client'

import { useMemo, useState } from 'react'
import type { Article, ContentCategory } from '@/types/content'
import ArticleCard from '@/components/knowledge/ArticleCard'
import Button from '@/components/ui/Button'

const CATEGORIES: Array<'All' | ContentCategory> = [
  'All',
  'Technical Story',
  'Article',
  'Case Study',
  'White Paper',
  'Industry Update',
]

interface CategoryFilterProps {
  articles: Article[]
}

export default function CategoryFilter({ articles }: CategoryFilterProps) {
  const [active, setActive] = useState<'All' | ContentCategory>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchesCategory = active === 'All' || a.category === active
      const matchesQuery =
        q.length === 0 ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [articles, active, query])

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-brand-gray/15 pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((cat) => {
            const selected = cat === active
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(cat)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  selected
                    ? 'border-brand-brown bg-brand-brown text-off-white'
                    : 'border-brand-gray/30 text-near-black hover:border-brand-brown'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="lg:w-72">
          <label htmlFor="knowledge-search" className="sr-only">
            Search articles
          </label>
          <input
            id="knowledge-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the knowledge hub…"
            className="w-full border border-brand-gray/30 bg-white px-4 py-2.5 text-sm text-near-black placeholder:text-brand-gray focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border-t border-brand-gray/25 pt-12 text-center">
          <p className="font-display text-xl font-semibold text-near-black">
            No articles found — yet.
          </p>
          <p className="mx-auto mt-3 max-w-md text-brand-gray">
            {articles.length === 0
              ? 'Technical stories and case studies are in preparation. Have a technical question in the meantime?'
              : 'Try a different category or search term, or ask us directly.'}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">
              Start with the question
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
