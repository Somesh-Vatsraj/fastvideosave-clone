import { Link, NavLink, useLocation } from 'react-router-dom'
import { Video, Music, Image as ImageIcon } from 'lucide-react'

const tabs = [
  { label: 'Video', icon: Video, to: '/video-downloader', match: ['/video-downloader', '/', '/reels-downloader', '/story-downloader', '/facebook-downloader'] },
  { label: 'Audio', icon: Music, to: '/audio-downloader', match: ['/audio-downloader'] },
  { label: 'Photo', icon: ImageIcon, to: '/photo-downloader', match: ['/photo-downloader', '/profile-downloader'] },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-1 text-base sm:text-lg">
          <span className="font-extrabold text-blue-600">Fast</span>
          <span className="font-extrabold text-brand-700">videosave</span>
          <span className="font-semibold text-slate-400">.net</span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full bg-slate-50 p-1">
          {tabs.map((tab) => {
            const active = tab.match.some((m) => pathname === m)
            const Icon = tab.icon
            return (
              <NavLink
                key={tab.label}
                to={tab.to}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                  active
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white hover:text-brand-600'
                }`}
              >
                <Icon size={15} />
                <span className="hidden xs:inline sm:inline">{tab.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
