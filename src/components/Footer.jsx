import { Link } from 'react-router-dom'

const toolsLinks = [
  { label: 'Reels Downloader', to: '/reels-downloader' },
  { label: 'Video Downloader', to: '/video-downloader' },
  { label: 'Photo Downloader', to: '/photo-downloader' },
  { label: 'Audio Downloader', to: '/audio-downloader' },
  { label: 'Story Downloader', to: '/story-downloader' },
  { label: 'Profile Downloader', to: '/profile-downloader' },
  { label: 'Facebook Downloader', to: '/facebook-downloader' },
]

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-slate-100 bg-white/60 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-0.5 text-base">
              <span className="font-extrabold text-blue-600">Fast</span>
              <span className="font-extrabold text-indigo-600">videosave</span>
              <span className="font-semibold text-slate-400">.net</span>
            </Link>
            <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-slate-500 sm:text-xs">
              Fastvideosave is a super-fast web based tool to download Instagram reels, videos,
              photos, and audio in original quality — simple, fast, and free.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 sm:text-xs">Tools</h3>
            <ul className="mt-3 space-y-2">
              {toolsLinks.map((t) => (
                <li key={t.to}>
                  <Link to={t.to} className="text-[11px] text-slate-500 transition hover:text-indigo-600 sm:text-xs">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 sm:text-xs">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-[11px] text-slate-500 transition hover:text-indigo-600 sm:text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[11px] text-slate-500 transition hover:text-indigo-600 sm:text-xs">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 sm:text-xs">Support</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/contact" className="text-[11px] text-slate-500 transition hover:text-indigo-600 sm:text-xs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-5">
          <div className="flex flex-col gap-3 text-[10px] leading-relaxed text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
            <p className="max-w-2xl">
              Fastvideosave.net is not connected to Instagram™ or any other social platforms. We
              do not host or store files on our servers; all content belongs to its original owners.
            </p>
            <p className="whitespace-nowrap">
              © {new Date().getFullYear()} Fastvideosave — All Rights Reserved.
            </p>
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-400 sm:text-[11px]">
            Please do not use our tool for copyrighted or restricted content. We comply with DMCA
            policies and respond to all valid infringement notices.
          </p>
        </div>
      </div>
    </footer>
  )
}
