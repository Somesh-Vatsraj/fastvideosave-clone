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
    <footer className="border-t border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-1 text-lg">
              <span className="font-extrabold text-blue-600">Fast</span>
              <span className="font-extrabold text-brand-700">videosave</span>
              <span className="font-semibold text-slate-400">.net</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Audio and video and photo tools for Instagram & Facebook. Free, fast, no login.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-bold text-slate-800">Tools</h3>
            <ul className="mt-3 space-y-2">
              {toolsLinks.map((t) => (
                <li key={t.to}>
                  <Link to={t.to} className="text-xs text-slate-500 transition hover:text-brand-600">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-slate-800">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-brand-600">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-xs text-slate-500 hover:text-brand-600">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-slate-800">Support</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to="/contact" className="text-xs text-slate-500 hover:text-brand-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6">
          <p className="text-center text-[11px] leading-relaxed text-slate-400">
            Fastvideosave.net is not connected to Instagram™ or any other social platforms. We do not host or store files on our servers. All trademarks belong to their respective owners.
          </p>
          <p className="mt-3 text-center text-[11px] text-slate-400">
            © {new Date().getFullYear()} Fastvideosave.net — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
