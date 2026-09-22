import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/services/ServiceDetail'
import { getService } from '@/lib/services'
import { generatePageMetadata } from '@/lib/seo/metadata'

const service = getService('bridge-bearing-advisory')

export const metadata: Metadata = generatePageMetadata({
  title: service?.title ?? 'Bridge Bearing Advisory',
  path: '/expertise/bridge-bearing-advisory',
  description: service?.shortDescription,
})

export default function BridgeBearingPage() {
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
