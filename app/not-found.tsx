import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-off-white pt-20">
      <Container as="div">
        <div className="max-w-xl py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown mb-6">
            404
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-near-black mb-6 lg:text-6xl">
            Looks like we found another unanswered question.
          </h1>
          <p className="text-brand-gray mb-12 leading-relaxed">
            The page you are looking for does not exist, or may have moved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/" variant="primary">
              Return Home
            </Button>
            <Button href="/expertise" variant="secondary">
              Explore Expertise
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
