const bullets = [
  "Original quality without watermark or logo, which most of the tools out there can't.",
  'Download Reels video in gallery on any device that you want: mobile, iPhone, iPad, PC, or tablet.',
  "Download Instagram reels online by link using your browser: We want to keep things simple, so you don't need to download or install any software.",
  "It's always free. We only place some ads, which support maintaining our services, and further development.",
]

export default function HowItWorks({ platform = 'Instagram' }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 mb-24">
      <div className="glass-panel p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How {platform} Downloader Works?
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              An {platform} reels downloader is a tool or software that allows you to download
              Reels, Video and Photos from {platform} without watermark by simply entering the
              URL/Link of the content you want to download.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-semibold text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              We do not require any information to access our tool, so you don't need to worry
              about providing your login details also we do not charge anything for using our
              service. This is lifetime free service, Which can be used to download an unlimited
              amount of reels video.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/60">
                <img
                  src="/images/how-instagram-downloader-works.jpg"
                  alt={`How ${platform} Reels Downloader Works on Smartphone and PC`}
                  width="500"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl object-cover shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML =
                      '<div class="aspect-square flex items-center justify-center bg-gradient-to-br from-indigo-100 to-pink-100 rounded-xl text-5xl">📱</div>'
                  }}
                />
              </div>
            </div>
            <span className="text-xs text-slate-400 mt-3 text-center font-medium">
              Save reels instantly with no watermark
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
