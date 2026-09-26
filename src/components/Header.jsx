import { Link, NavLink, useLocation } from 'react-router-dom'
import { Video, Music, Image as ImageIcon } from 'lucide-react'
import { SITE } from '../config/site'

const navItems = [
  { label: 'Video', icon: Video, to: '/', match: ['/', '/video-downloader', '/reels-downloader', '/story-downloader', '/facebook-downloader'] },
  { label: 'Audio', icon: Music, to: '/audio-downloader', match: ['/audio-downloader'] },
  { label: 'Photo', icon: ImageIcon, to: '/photo-downloader', match: ['/photo-downloader', '/profile-downloader'] },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-30 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <svg className="w-7 h-7 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 6H2M3 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 leading-none">
              <span className="text-blue-600">{SITE.brandPart1}</span>
              <span className="text-gradient">{SITE.brandPart2}</span>
              <span className="text-slate-400 text-sm font-bold">{SITE.brandPart3}</span>
            </div>
          </Link>

          <ul className="flex items-center gap-3 sm:gap-4">
            {navItems.map((item) => {
              const active = item.match.includes(pathname)
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={`flex items-center group/nav transition-all duration-300 ${
                      active ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      active
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'bg-transparent text-slate-400 group-hover/nav:bg-slate-50 group-hover/nav:text-slate-500'
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span className="hidden sm:inline ml-2 font-bold text-sm tracking-tight">
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
