import { type NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation/contact'
import { sendContactEmail } from '@/lib/integrations/email'

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
    return NextResponse.json(
      { message: 'Too many requests. Please try again shortly.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString()
      if (key && !errors[key]) errors[key] = issue.message
    }
    return NextResponse.json(
      { message: 'Please check the highlighted fields.', errors },
      { status: 422 },
    )
  }

  const { website, ...data } = parsed.data

  // Honeypot: silently succeed for bots so they get no signal.
  if (website) {
    return NextResponse.json({ success: true })
  }

  const result = await sendContactEmail(data)
  if (!result.ok) {
    return NextResponse.json(
      { message: 'We could not submit your enquiry right now. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
