import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/services/ServiceDetail'
import { getService } from '@/lib/services'
import { generatePageMetadata } from '@/lib/seo/metadata'

const service = getService('research-development-consulting')

export const metadata: Metadata = generatePageMetadata({
  title: service?.title ?? 'Research & Development Consulting',
  path: '/expertise/research-development-consulting',
  description: service?.shortDescription,
})

export default function ResearchDevelopmentPage() {
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
