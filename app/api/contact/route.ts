import { type NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation/contact'
import { sendContactToN8n } from '@/lib/integrations/n8n'

// Simple in-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; reset: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const window = 60_000 // 1 minute
  const limit = 5
  const record = rateLimitMap.get(ip)
  if (!record || now > record.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + window })
    return true
  }
  if (record.count >= limit) return false
  record.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString()
      if (key && !errors[key]) errors[key] = issue.message
    }
    return NextResponse.json({ errors }, { status: 422 })
  }

  const { website, ...data } = parsed.data

  // Honeypot check
  if (website) {
    // Silently succeed for bots
    return NextResponse.json({ success: true })
  }

  // Forward to n8n webhook (non-blocking failure)
  await sendContactToN8n(data)

  return NextResponse.json({ success: true })
}
