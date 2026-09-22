import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  organization: z.string().trim().max(160).optional().or(z.literal('')),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  areaOfInterest: z.string().trim().max(120).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(2000, 'Message must be 2000 characters or fewer'),
  // Honeypot: must be empty for a legitimate submission.
  website: z.string().max(0).optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: 'Consent is required' }),
})

export type ContactInput = z.infer<typeof contactSchema>

export const AREAS_OF_INTEREST = [
  'Material & Chemical Advisory',
  'Bridge Bearing Advisory',
  'Research & Development Consulting',
  'General Enquiry',
] as const
