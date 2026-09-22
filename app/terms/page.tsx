import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Use',
  path: '/terms',
  description: 'Terms of Use for Gedsliey Inc.',
  noIndex: false,
})

export default function TermsPage() {
  return (
    <section className="bg-white pt-24 pb-24 md:pt-32">
      <Container as="div">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
            Legal
          </p>
          <h1 className="font-display font-bold text-3xl text-near-black mb-4 lg:text-5xl">
            Terms of Use
          </h1>
          <p className="text-sm text-brand-gray mb-12">
            <strong className="text-near-black">Effective date:</strong> September 2025
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-brand-gray">

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Gedsliey Inc. website at gedsliey.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site. Gedsliey Inc. reserves the right to update these terms at any time. Continued use of the Site following any changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">2. Use of This Website</h2>
              <p className="mb-3">
                This Site is provided for informational purposes only. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the Site.
              </p>
              <p>
                You must not misuse this Site by knowingly introducing viruses, trojans, worms, or other malicious or technologically harmful material. You must not attempt to gain unauthorised access to this Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">3. Intellectual Property</h2>
              <p className="mb-3">
                All content on this Site — including but not limited to text, graphics, logos, images, and technical descriptions — is the property of Gedsliey Inc. or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                You may view, download, and print content from this Site for your own personal, non-commercial use only. You may not reproduce, distribute, modify, transmit, repost, or otherwise use any content from this Site for commercial purposes without the prior written consent of Gedsliey Inc.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">4. No Professional Advice</h2>
              <p className="mb-3">
                The information provided on this Site is for general informational purposes only. Nothing on this Site constitutes professional engineering, technical, legal, financial, or other specialist advice.
              </p>
              <p>
                While Gedsliey Inc. takes reasonable care to ensure the accuracy of information published on this Site, no reliance should be placed on such information as a substitute for professional advice tailored to your specific circumstances. Gedsliey Inc. accepts no responsibility for any loss or damage arising from reliance on information contained on this Site.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">5. Limitation of Liability</h2>
              <p className="mb-3">
                To the fullest extent permitted by applicable law, Gedsliey Inc., its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of, or inability to use, this Site or its content.
              </p>
              <p>
                Gedsliey Inc. does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">6. Third-Party Links</h2>
              <p>
                This Site may contain links to third-party websites for your convenience. Gedsliey Inc. does not endorse, control, or accept responsibility for the content, privacy practices, or availability of those websites. Accessing third-party websites through links on this Site is done at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">7. Privacy</h2>
              <p>
                Your use of this Site is also governed by our{' '}
                <a href="/privacy" className="text-brand-brown underline underline-offset-2 hover:text-near-black transition-colors">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms of Use by reference.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">8. Contact Forms and Enquiries</h2>
              <p>
                Information submitted through the contact or consultation forms on this Site will be used solely to respond to your enquiry. Submission of a form does not create a professional engagement, retainer, or advisory relationship between you and Gedsliey Inc. unless confirmed in writing by Gedsliey Inc.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">9. Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">10. Changes to These Terms</h2>
              <p>
                Gedsliey Inc. may revise these Terms of Use at any time by updating this page. You are expected to check this page periodically to note any changes. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">11. Contact</h2>
              <p>
                If you have any questions about these Terms of Use, please contact Gedsliey Inc. through the{' '}
                <a href="/contact" className="text-brand-brown underline underline-offset-2 hover:text-near-black transition-colors">
                  contact page
                </a>
                .
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 text-xs text-brand-gray/70">
              <p>
                These terms have been prepared for general informational purposes. Gedsliey Inc. recommends periodic review by qualified legal counsel to ensure they remain appropriate for the company&apos;s activities and applicable law.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
