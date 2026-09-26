import { Check } from 'lucide-react'

const bullets = [
  'Original quality without watermark or logo, which most of the tools out there can\'t.',
  'Download Instagram reels online by link using your browser. We want to keep things simple, so you don\'t need to download or install any software.',
  'Download Reels video in gallery on any device that you want: mobile, iPhone, iPad, PC, or tablet.',
  'It\'s always free. We only place some ads, which support maintaining our services, and further development.',
]

export default function HowItWorks({ platform = 'Instagram' }) {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="card overflow-hidden">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                How {platform} Downloader Works?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                An {platform} reels downloader is a tool or software that allows you to download
                Reels, Video and Photos from {platform} without watermark by simply entering the
                URL/Link of the content you want to download.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {bullets.map((b, i) => (
                  <div key={i} className="flex gap-2">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-brand-600" />
                    <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{b}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-slate-500 sm:text-sm">
                We do not require any information to access our tool, so you don't need to worry
                about providing your login details also we do not charge anything for using our
                service. This is lifetime free service. Which can be used to download an unlimited
                amount of reels video.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-brand-100 via-pink-100 to-brand-50 p-6">
                <div className="mx-auto flex aspect-[3/4] max-w-[260px] items-center justify-center rounded-2xl border-4 border-white bg-white shadow-lg">
                  <div className="flex flex-col items-center gap-3 p-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-pink-500 text-2xl">
                      🎬
                    </div>
                    <p className="text-xs font-semibold text-slate-700">Save reels instantly with no watermark</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">Save reels instantly with no watermark</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
