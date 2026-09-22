'use client'

import { useState } from 'react'
import { contactSchema, AREAS_OF_INTEREST } from '@/lib/validation/contact'
import FormField from '@/components/forms/FormField'
import Button from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type FieldErrors = Partial<Record<string, string>>

const inputClass =
  'w-full border border-brand-gray/30 bg-white px-4 py-2.5 text-sm text-near-black placeholder:text-brand-gray focus:border-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-brown transition-colors'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [serverMessage, setServerMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})
    setServerMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      organization: String(formData.get('organization') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      areaOfInterest: String(formData.get('areaOfInterest') ?? ''),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
      consent: formData.get('consent') === 'true',
    }

    const parsed = contactSchema.safeParse(payload)
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]
        if (typeof key === 'string' && !fieldErrors[key]) {
          fieldErrors[key] = issue.message
        }
      }
      setErrors(fieldErrors)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      const data = (await res.json().catch(() => ({}))) as {
        message?: string
        errors?: FieldErrors
      }

      if (!res.ok) {
        if (data.errors) setErrors(data.errors)
        setServerMessage(data.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setServerMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-brand-brown/30 bg-brand-brown/5 p-8">
        <h2 className="font-display text-xl font-semibold text-near-black">
          Thank you — your question has reached us.
        </h2>
        <p className="mt-3 text-brand-gray">
          We review every enquiry personally and will respond using the contact
          information you provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
        </FormField>
        <FormField label="Organization" htmlFor="organization" error={errors.organization}>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </FormField>
        <FormField label="Email" htmlFor="email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </FormField>
      </div>

      <FormField label="Area of interest" htmlFor="areaOfInterest" error={errors.areaOfInterest}>
        <select id="areaOfInterest" name="areaOfInterest" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select an area…
          </option>
          {AREAS_OF_INTEREST.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="Message"
        htmlFor="message"
        required
        error={errors.message}
        hint="Up to 2000 characters."
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          className={`${inputClass} resize-none`}
          placeholder="Describe the technical question or challenge you're facing…"
        />
      </FormField>

      {/* Honeypot — hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-near-black">
          <input
            name="consent"
            type="checkbox"
            value="true"
            className="mt-1 h-4 w-4 accent-brand-brown"
          />
          <span className="leading-relaxed text-brand-gray">
            I consent to Gedsliey Inc. using this information to respond to my enquiry.{' '}
            <a href="/privacy" className="text-brand-brown underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-brand-brown" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {serverMessage && (
        <p className="text-sm text-brand-brown" role="alert">
          {serverMessage}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send your question'}
      </Button>
    </form>
  )
}
