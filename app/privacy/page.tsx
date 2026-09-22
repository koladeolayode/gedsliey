import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  path: '/privacy',
  description: 'Privacy Policy for Gedsliey Inc.',
  noIndex: false,
})

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-24 pb-24 md:pt-32">
      <Container as="div">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
            Legal
          </p>
          <h1 className="font-display font-bold text-3xl text-near-black mb-4 lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-brand-gray mb-12">
            <strong className="text-near-black">Effective date:</strong> September 2025
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-brand-gray">

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">1. Overview</h2>
              <p>
                Gedsliey Inc. (&ldquo;Gedsliey&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of individuals who visit our website and interact with our services. This Privacy Policy explains what personal information we collect, how we use it, and your rights in relation to it.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-brand-brown shrink-0 mt-0.5">—</span>
                  <span><strong className="text-near-black">Information you provide directly:</strong> When you submit our contact or consultation forms, we collect your name, organisation, email address, phone number (if provided), area of interest, and message.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-brown shrink-0 mt-0.5">—</span>
                  <span><strong className="text-near-black">Automatically collected information:</strong> We may collect standard technical information such as your browser type, device type, pages visited, and referring URLs. This information is collected in aggregate and is not used to identify you personally.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information you provide to:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'Respond to your enquiry or consultation request',
                  'Communicate with you about our services',
                  'Improve the quality and relevance of our website',
                  'Comply with legal obligations',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-brown shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                We do not use your information for automated decision-making or profiling. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">4. Legal Basis for Processing</h2>
              <p>
                We process your personal information on the basis of your consent (when you submit a form) and our legitimate interest in responding to business enquiries. You may withdraw your consent at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">5. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Enquiry information is retained for a reasonable period to manage ongoing business correspondence and is then securely deleted.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">6. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. Our website uses HTTPS encryption for all data transmission. However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">7. Third-Party Services</h2>
              <p>
                Our website may use trusted third-party services for hosting, analytics, and communication workflows. These providers are selected for their commitment to data security and are not permitted to use your information for their own purposes. We do not share personal information with third parties except as necessary to operate our services or as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">8. Cookies</h2>
              <p>
                This website may use essential cookies to ensure basic functionality. We do not currently use tracking or advertising cookies. If this changes, this policy will be updated and appropriate consent mechanisms will be implemented.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">9. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'Access the personal information we hold about you',
                  'Request correction of inaccurate information',
                  'Request deletion of your personal information',
                  'Withdraw consent for processing',
                  'Lodge a complaint with a relevant privacy authority',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-brown shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us through the{' '}
                <a href="/contact" className="text-brand-brown underline underline-offset-2 hover:text-near-black transition-colors">contact page</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">10. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of the Province of Alberta and the federal laws of Canada, including the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and Alberta&apos;s <em>Personal Information Protection Act</em> (PIPA), as applicable.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-near-black mb-3">12. Contact</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us through the{' '}
                <a href="/contact" className="text-brand-brown underline underline-offset-2 hover:text-near-black transition-colors">contact page</a>.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 text-xs text-brand-gray/70">
              <p>
                This Privacy Policy has been prepared for general informational purposes. Gedsliey Inc. recommends periodic review by qualified legal counsel to ensure compliance with current applicable privacy legislation.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
