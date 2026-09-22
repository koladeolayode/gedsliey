import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Article, ContentCategory } from '@/types/content'

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

function coerceCategory(value: unknown): ContentCategory {
  const allowed: ContentCategory[] = [
    'Technical Story',
    'Article',
    'Case Study',
    'Publication',
    'White Paper',
    'Industry Update',
    'Resource',
  ]
  return allowed.includes(value as ContentCategory)
    ? (value as ContentCategory)
    : 'Article'
}

function coerceTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((v) => String(v))
  if (typeof value === 'string' && value.trim().length > 0) {
    return value.split(',').map((s) => s.trim())
  }
  return []
}

/**
 * Read all MDX articles from /content/articles, parse frontmatter and return
 * typed Article[] sorted newest first. Returns [] if the folder is empty.
 */
export function getArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))

  const articles: Article[] = files.map((file) => {
    const fullPath = path.join(ARTICLES_DIR, file)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(raw)
    const fallbackSlug = file.replace(/\.mdx?$/, '')

    return {
      slug: typeof data.slug === 'string' ? data.slug : fallbackSlug,
      title: typeof data.title === 'string' ? data.title : fallbackSlug,
      summary: typeof data.summary === 'string' ? data.summary : '',
      category: coerceCategory(data.category),
      tags: coerceTags(data.tags),
      author: typeof data.author === 'string' ? data.author : 'Gedsliey Inc.',
      publishedAt:
        typeof data.publishedAt === 'string'
          ? data.publishedAt
          : new Date().toISOString().slice(0, 10),
      heroImage: typeof data.heroImage === 'string' ? data.heroImage : undefined,
      seoTitle: typeof data.seoTitle === 'string' ? data.seoTitle : undefined,
      seoDescription:
        typeof data.seoDescription === 'string' ? data.seoDescription : undefined,
      body: content,
    }
  })

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getArticleSlugs(): string[] {
  return getArticles().map((a) => a.slug)
}
