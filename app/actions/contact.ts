'use server'

import { Resend } from 'resend'

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

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'laithalwani@gmail.com',
    replyTo: email,
    subject: `Portfolio contact: ${subject || name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || '—'}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    console.error('[Contact form] Resend error:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }

  return { success: true }
}
