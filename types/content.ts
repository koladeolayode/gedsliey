export interface Article {
  slug: string
  title: string
  summary: string
  category: ContentCategory
  tags: string[]
  author: string
  publishedAt: string
  heroImage?: string
  seoTitle?: string
  seoDescription?: string
  body?: string
}

export type ContentCategory =
  | 'Technical Story'
  | 'Article'
  | 'Case Study'
  | 'Publication'
  | 'White Paper'
  | 'Industry Update'
  | 'Resource'
