import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Book a technical consultation with Gedsliey Inc. Discuss your engineering challenge with a PhD-qualified specialist.',
}

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL

export default function ConsultationPage() {
  return (
    <>
      <section className="bg-off-white pt-24 pb-16 md:pt-32 md:pb-20">
        <Container as="div">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Book a Consultation
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-near-black sm:text-5xl lg:text-7xl">
            Have a technical question?
          </h1>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container as="div">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-display text-2xl font-bold text-near-black mb-6">
                What is a Gedsliey consultation?
              </h2>
              <p className="text-brand-gray leading-relaxed mb-6">
                A technical consultation with Gedsliey is a focused conversation with a
                PhD-qualified engineering specialist. It is designed to help you understand
                whether your technical problem can benefit from independent advisory — and what
                that might look like.
              </p>

              <h3 className="font-display font-semibold text-lg text-near-black mb-4">
                Who it is for
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Organizations facing a technical failure they need independently investigated',
                  'Project teams requiring expert material or bearing advisory',
                  'Research groups seeking R&D consulting support',
                  'Legal and insurance professionals requiring independent technical opinion',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-brand-gray text-sm leading-relaxed"
                  >
                    <span className="text-brand-brown mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-lg text-near-black mb-4">
                What to prepare
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'A brief description of the technical problem or question',
                  'Any relevant background or context',
                  'Your expected outcome from the consultation',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-brand-gray text-sm leading-relaxed"
                  >
                    <span className="text-brand-brown mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-lg text-near-black mb-4">
                What happens after
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Following the consultation, Gedsliey will confirm whether the work falls within
                our expertise and outline a proposed approach if appropriate.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border border-brand-brown/20 p-10">
                <p className="font-display font-bold text-xl text-near-black mb-4">
                  Book a consultation
                </p>
                <p className="text-brand-gray text-sm leading-relaxed mb-8">
                  Select a time that works for you using the booking link below.
                </p>
                {bookingUrl ? (
                  <Button href={bookingUrl} variant="primary" external>
                    Book Now
                  </Button>
                ) : (
                  <div className="border border-dashed border-gray-200 p-6 text-center">
                    <p className="text-brand-gray text-sm">
                      [BOOKING LINK TO BE PROVIDED]
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-100 p-10">
                <p className="font-display font-semibold text-near-black mb-3">
                  Prefer to write first?
                </p>
                <p className="text-brand-gray text-sm mb-6">
                  Send us a message with your technical question and we will respond to
                  schedule a conversation.
                </p>
                <Button href="/contact" variant="secondary">
                  Contact Gedsliey
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
