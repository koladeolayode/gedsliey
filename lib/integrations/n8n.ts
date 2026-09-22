import type { ContactInput } from '@/lib/validation/contact'

export interface N8nResult {
  ok: boolean
  skipped?: boolean
  status?: number
  error?: string
}

/**
 * POST validated contact data to the configured n8n webhook.
 * If N8N_WEBHOOK_URL is not set, the call is skipped (returns ok: true, skipped)
 * so local development and preview environments do not fail.
 */
export async function sendContactToN8n(
  data: Omit<ContactInput, 'website'>,
): Promise<N8nResult> {
  const url = process.env.N8N_WEBHOOK_URL
  const secret = process.env.N8N_WEBHOOK_SECRET

  if (!url) {
    return { ok: true, skipped: true }
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'X-Webhook-Secret': secret } : {}),
      },
      body: JSON.stringify({
        ...data,
        source: 'gedsliey.com/contact',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      return { ok: false, status: res.status, error: `Webhook responded ${res.status}` }
    }
    return { ok: true, status: res.status }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' }
  }
}
