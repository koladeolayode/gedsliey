import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3',
  },
})

interface ContactData {
  name: string
  email: string
  organisation?: string
  service?: string
  message: string
}

export async function sendContactEmail(data: ContactData): Promise<{ ok: boolean }> {
  try {
    await transporter.sendMail({
      from: `"Gedsliey Website" <${process.env.SMTP_USER}>`,
      to: 'info@gedsliey.com',
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.organisation ? ` — ${data.organisation}` : ''}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.organisation ? `Organisation: ${data.organisation}` : '',
        data.service ? `Area of interest: ${data.service}` : '',
        '',
        'Message:',
        data.message,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #171717;">
          <div style="border-left: 4px solid #4A382E; padding-left: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 4px; font-size: 18px;">New Enquiry — Gedsliey Website</h2>
            <p style="margin: 0; color: #6E6A67; font-size: 13px;">Submitted via gedsliey.com contact form</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6E6A67; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6E6A67;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #4A382E;">${data.email}</a></td></tr>
            ${data.organisation ? `<tr><td style="padding: 8px 0; color: #6E6A67;">Organisation</td><td style="padding: 8px 0;">${data.organisation}</td></tr>` : ''}
            ${data.service ? `<tr><td style="padding: 8px 0; color: #6E6A67;">Area of interest</td><td style="padding: 8px 0;">${data.service}</td></tr>` : ''}
          </table>
          <div style="background: #F2F0EE; padding: 16px; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #6E6A67;">Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #6E6A67;">Reply directly to this email to respond to ${data.name}.</p>
        </div>
      `,
    })
    return { ok: true }
  } catch (err) {
    console.error('[contact email]', err)
    return { ok: false }
  }
}
