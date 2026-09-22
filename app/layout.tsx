import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { getSiteUrl } from '@/lib/seo/metadata'

const displayFont = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
})

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gedsliey Inc. | Asking the Unasked',
    template: '%s | Gedsliey Inc.',
  },
  description:
    'Independent technical thinking. Specialized research and consulting in materials, chemicals, bridge bearings, and R&D — asking the unasked questions.',
  openGraph: {
    type: 'website',
    siteName: 'Gedsliey Inc.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gedsliey Inc.',
  url: siteUrl,
  description:
    'Independent technical research and consulting in materials, chemicals, bridge bearings, and research & development.',
  areaServed: 'Global',
  knowsAbout: [
    'Materials engineering',
    'Chemical advisory',
    'Bridge bearings',
    'Failure investigation',
    'Research and development consulting',
  ],
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-off-white text-near-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
