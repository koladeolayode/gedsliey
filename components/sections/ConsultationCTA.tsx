import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function ConsultationCTA() {
  return (
    <section className="py-24 md:py-32 bg-brand-brown text-white">
      <Container as="div">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">
            Get Started
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mb-6 leading-tight">
            Have a technical question?
          </h2>
          <p className="text-white/70 text-lg mb-12">Start with the question.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/consultation"
              variant="primary"
              className="bg-white text-brand-brown hover:bg-off-white"
            >
              Book a Consultation
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-brand-brown"
            >
              Contact Gedsliey
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
