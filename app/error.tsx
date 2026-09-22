'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Surface the error to logs / monitoring.
    console.error(error)
  }, [error])

  return (
    <section className="flex min-h-[70vh] items-center bg-off-white">
      <Container as="div">
        <div className="max-w-xl py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-brand-brown">
            Something went wrong
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-near-black lg:text-5xl">
            An unexpected error interrupted the request.
          </h1>
          <p className="mb-12 leading-relaxed text-brand-gray">
            Please try again. If the problem persists, get in touch and we&rsquo;ll help.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button type="button" variant="primary" onClick={reset}>
              Try again
            </Button>
            <Button href="/" variant="secondary">
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
