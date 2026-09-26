import { Link } from 'react-router-dom'
import { SITE } from '../config/site'

const toolsLinks = [
  { label: 'Reels Downloader', to: '/' },
  { label: 'Video Downloader', to: '/video-downloader' },
  { label: 'Photo Downloader', to: '/photo-downloader' },
  { label: 'Audio Downloader', to: '/audio-downloader' },
  { label: 'Story Downloader', to: '/story-downloader' },
  { label: 'Profile Downloader', to: '/profile-downloader' },
  { label: 'Facebook Downloader', to: '/facebook-downloader' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center group mb-4">
              <svg className="w-6 h-6 text-indigo-600 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 6H2M3 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                <span className="text-blue-600">{SITE.brandPart1}</span>
                <span className="text-gradient">{SITE.brandPart2}</span>
                <span className="text-slate-400 text-sm font-bold">{SITE.brandPart3}</span>
              </h2>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              {SITE.name} is a super-fast web based tool to download Instagram reels, videos,
              photos, and audio in original quality — simple, fast, and free.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8 md:gap-16 md:justify-end">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Tools</h3>
              <ul className="space-y-3">
                {toolsLinks.map((t) => (
                  <li key={t.to}>
                    <Link to={t.to} className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 max-w-2xl text-center md:text-left">
            <b>{SITE.domain}</b> is not connected to Instagram™ or any other social platforms.
            We do not host or store files on our servers; all content belongs to its original owners.
            <br /><br />
            Please do not use our tool for copyrighted or restricted content. We comply with DMCA
            policies and respond to all valid infringement notices.
          </p>
          <p className="text-xs text-slate-500 whitespace-nowrap">
            © {SITE.year} {SITE.name} - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
