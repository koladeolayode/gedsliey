import type { Article } from '@/types/content'
import { getArticles } from '@/lib/content/articles'

/**
 * Return a single article (including its MDX body) by slug, or null if not found.
 */
export function getArticleBySlug(slug: string): Article | null {
  const article = getArticles().find((a) => a.slug === slug)
  return article ?? null
}
