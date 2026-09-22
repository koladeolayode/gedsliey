import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Gedsliey Inc.',
}

export default function TermsPage() {
  return (
    <section className="bg-white pt-24 pb-24 md:pt-32">
      <Container as="div">
        <div className="max-w-3xl">
          <div className="border border-yellow-200 bg-yellow-50 p-4 mb-12 text-sm text-yellow-800">
            [CLIENT / LEGAL REVIEW REQUIRED — This is a draft placeholder only and does not
            constitute legal advice. This page must be reviewed and approved by qualified legal
            counsel before publication.]
          </div>
          <h1 className="font-display font-bold text-3xl text-near-black mb-8 lg:text-5xl">
            Terms of Use
          </h1>
          <div className="space-y-6 text-sm leading-relaxed text-brand-gray">
            <p>
              <strong className="text-near-black">Last updated:</strong> [DATE TO BE CONFIRMED]
            </p>
            <p>By accessing this website, you agree to the following terms and conditions.</p>
            <h2 className="font-display font-bold text-xl text-near-black">
              Use of This Website
            </h2>
            <p>[CLIENT TO PROVIDE FULL TERMS OF USE DETAILS]</p>
            <h2 className="font-display font-bold text-xl text-near-black">
              Intellectual Property
            </h2>
            <p>[CLIENT TO PROVIDE FULL TERMS OF USE DETAILS]</p>
            <h2 className="font-display font-bold text-xl text-near-black">
              Limitation of Liability
            </h2>
            <p>[CLIENT TO PROVIDE FULL TERMS OF USE DETAILS]</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
