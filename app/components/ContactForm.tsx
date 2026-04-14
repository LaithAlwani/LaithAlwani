'use client'

import { useActionState } from 'react'
import { sendContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { success: false }

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-amber-500/50 dark:focus:border-amber-400/50 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors text-sm'

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialState)

  if (state.success) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-500"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
          Message sent!
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Name <span className="text-amber-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Email <span className="text-amber-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Message <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell me about your project, or just say hello..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 rounded-lg px-4 py-2.5">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold text-sm transition-all hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.98]"
      >
        {pending ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
