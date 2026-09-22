import type { Metadata } from 'next'

const SITE_NAME = 'Gedsliey Inc.'
const DEFAULT_DESCRIPTION =
  'Independent technical thinking. Specialized research and consulting in materials, chemicals, bridge bearings, and R&D — asking the unasked questions.'

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gedsliey.com'
}

interface PageMetadataInput {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  noIndex?: boolean
}

/**
 * Build page-level Metadata with a unique title, description, canonical URL,
 * Open Graph and Twitter card. Titles render as "Page | Gedsliey Inc."
 */
export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image,
  type = 'website',
  publishedTime,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl()
  const canonical = new URL(path, siteUrl).toString()
  const fullTitle = `${title} | ${SITE_NAME}`
  const ogImage = image ?? '/og-default.svg'

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
