import { useState } from 'react'
import SEO from '../components/SEO'
import { SITE } from '../config/site'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${SITE.domain} team for support, feedback, or business inquiries.`}
        canonical={`${SITE.url}/contact`}
      />

      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Contact Us
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Have a question, feedback, or suggestion? We'd love to hear from you.
        </p>

        {/* Email box */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 text-sm text-indigo-700">
          <Mail size={20} className="flex-shrink-0" />
          <span className="font-medium">{SITE.email}</span>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          />

          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          />

          {/* Send Button — INLINE STYLES (no custom class dependency) */}
          <button
            type="submit"
            className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>

          {sent && (
            <p className="text-center text-sm text-emerald-600 font-medium">
              ✅ Message sent! We'll respond within 48 hours.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
