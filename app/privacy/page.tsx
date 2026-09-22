import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  path: '/privacy',
  description: 'Privacy Policy for Gedsliey Inc.',
  noIndex: true,
})

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-24 pb-24 md:pt-32">
      <Container as="div">
        <div className="max-w-3xl">
          <div className="border-l-2 border-brand-brown bg-brand-brown/5 p-4 mb-12 text-sm text-brand-brown">
            [CLIENT / LEGAL REVIEW REQUIRED — This is a draft placeholder only and does not
            constitute legal advice. This page must be reviewed and approved by qualified legal
            counsel before publication.]
          </div>
          <h1 className="font-display font-bold text-3xl text-near-black mb-8 lg:text-5xl">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-brand-gray">
            <p>
              <strong className="text-near-black">Last updated:</strong> [DATE TO BE CONFIRMED]
            </p>
            <p>
              Gedsliey Inc. (&ldquo;Gedsliey&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is
              committed to protecting your personal information. This Privacy Policy describes
              how we collect, use and protect information submitted through this website.
            </p>
            <h2 className="font-display font-bold text-xl text-near-black">
              Information We Collect
            </h2>
            <p>[CLIENT TO PROVIDE FULL PRIVACY POLICY DETAILS]</p>
            <h2 className="font-display font-bold text-xl text-near-black">
              How We Use Your Information
            </h2>
            <p>[CLIENT TO PROVIDE FULL PRIVACY POLICY DETAILS]</p>
            <h2 className="font-display font-bold text-xl text-near-black">Contact</h2>
            <p>[CLIENT TO PROVIDE CONTACT INFORMATION]</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
