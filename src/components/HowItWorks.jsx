import { Check } from 'lucide-react'

const bullets = [
  "Original quality without watermark or logo, which most of the tools out there can't.",
  'Download Reels video in gallery on any device that you want: mobile, iPhone, iPad, PC, or tablet.',
  "Download Instagram reels online by link using your browser. We want to keep things simple, so you don't need to download or install any software.",
  "It's always free. We only place some ads, which support maintaining our services, and further development.",
]

export default function HowItWorks({ platform = 'Instagram' }) {
  return (
    <section className="px-4 pb-10 pt-4 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                How {platform} Downloader Works?
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                An {platform} reels downloader is a tool or software that allows you to download
                Reels, Video and Photos from {platform} without watermark by simply entering the
                URL/Link of the content you want to download.
              </p>

              <div className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {bullets.map((b, i) => (
                  <div key={i} className="flex gap-2">
                    <Check size={13} className="mt-0.5 flex-shrink-0 text-brand-600" strokeWidth={3} />
                    <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">{b}</p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                We do not require any information to access our tool, so you don't need to worry
                about providing your login details also we do not charge anything for using our
                service. This is lifetime free service. Which can be used to download an unlimited
                amount of reels video.
              </p>
            </div>

            {/* Phone mockup */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-200 via-fuchsia-200 to-blue-200 p-6">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-4 top-6 h-8 w-8 rounded-lg bg-purple-400/50 blur-sm" />
                  <div className="absolute right-6 top-10 h-10 w-10 rounded-lg bg-blue-400/50 blur-sm" />
                  <div className="absolute bottom-6 left-8 h-8 w-8 rounded-lg bg-pink-400/50 blur-sm" />
                </div>
                <div className="relative mx-auto flex aspect-[3/4.2] max-w-[200px] flex-col overflow-hidden rounded-[24px] border-[6px] border-slate-900 bg-white shadow-2xl">
                  <div className="flex h-full flex-col bg-gradient-to-br from-purple-100 via-pink-50 to-white">
                    <div className="flex flex-1 items-center justify-center">
                      <div className="relative">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-xl shadow-lg">
                          👩
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-0.5 text-[7px] font-bold text-brand-700 shadow-sm">
                          Download Reels
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-500">
                Save reels instantly with no watermark
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
