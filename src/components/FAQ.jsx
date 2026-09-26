import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Is Fastvideosave.net free to use?', a: 'Yes, Fastvideosave.net is completely free. You can download unlimited videos, photos, and audio without any cost.' },
  { q: 'Do I need to login?', a: 'No. We do not require any login, registration, or personal information.' },
  { q: 'Which platforms are supported?', a: 'Instagram (Reels, Video, Photo, Story, Profile) and Facebook videos.' },
  { q: 'Will the video have a watermark?', a: 'No. All downloads are watermark-free and in original quality.' },
  { q: 'Is it safe?', a: 'Yes. We do not store your videos or personal information. All processing is done in real-time.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800"
              >
                {f.q}
                <ChevronDown size={18} className={`flex-shrink-0 text-slate-400 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
