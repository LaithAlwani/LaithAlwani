'use server'

export type ContactState = {
  success: boolean
  error?: string
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TO SEND REAL EMAILS — plug in Resend (free, 3000 emails/month):
  //
  //   1. npm install resend
  //   2. Get a free API key at https://resend.com
  //   3. Add RESEND_API_KEY=re_... to your .env.local
  //   4. Uncomment and update the block below:
  //
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'Portfolio <onboarding@resend.dev>',
  //   to: 'YOUR_EMAIL@example.com',          // ← your real email
  //   replyTo: email,
  //   subject: `Portfolio contact: ${subject || name}`,
  //   html: `
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Subject:</strong> ${subject || '—'}</p>
  //     <hr />
  //     <p>${message.replace(/\n/g, '<br />')}</p>
  //   `,
  // })
  // ─────────────────────────────────────────────────────────────────────────

  // Dev placeholder — logs to server console
  console.log('[Contact form]', { name, email, subject, message })

  return { success: true }
}
