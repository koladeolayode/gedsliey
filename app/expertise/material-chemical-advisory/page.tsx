import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/services/ServiceDetail'
import { getService } from '@/lib/services'
import { generatePageMetadata } from '@/lib/seo/metadata'

const service = getService('material-chemical-advisory')

export const metadata: Metadata = generatePageMetadata({
  title: service?.title ?? 'Material & Chemical Advisory',
  path: '/expertise/material-chemical-advisory',
  description: service?.shortDescription,
})

export default function MaterialChemicalPage() {
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
