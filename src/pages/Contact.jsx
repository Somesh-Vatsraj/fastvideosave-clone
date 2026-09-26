import { useState } from 'react'
import SEO from '../components/SEO'
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
        description="Contact Fastvideosave.net team for support, feedback, or business inquiries."
        canonical="https://fastvideosave.net/contact"
      />
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-sm text-slate-500">
          Have a question, feedback, or suggestion? We'd love to hear from you.
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4 text-sm text-brand-700">
          <Mail size={20} className="flex-shrink-0" />
          <span>support@fastvideosave.net</span>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
          />
          <button type="submit" className="btn-brand w-full">
            <Send size={16} /> Send Message
          </button>
          {sent && (
            <p className="text-center text-sm text-emerald-600">
              ✅ Message sent! We'll respond within 48 hours.
            </p>
          )}
        </form>
      </section>
    </>
  )
}
