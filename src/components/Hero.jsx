import { Link } from 'react-router-dom'
import { Link as LinkIcon, Clipboard, Loader2, AlertTriangle } from 'lucide-react'
import { SITE } from '../config/site'

export default function Hero({
  heading = 'Instagram <gradient>Reels</gradient> Download',
  subtitle = 'Fastest tool to download reels video:',
  placeholder = 'Paste Link Here...',
  url,
  setUrl,
  onSubmit,
  isLoading,
  error,
}) {
  // Parser: <gradient>...</gradient> ko gradient span me convert karta hai
  const renderHeading = () => {
    const parts = heading.split(/(<gradient>.*?<\/gradient>)/g)

    return parts.map((part, i) => {
      const match = part.match(/^<gradient>(.*?)<\/gradient>$/)
      if (match) {
        return (
          <span key={i} className="text-gradient">
            {match[1]}
          </span>
        )
      }
      return <span key={i}>{part}</span>
    })
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
    } catch (err) {
      console.error('Clipboard read failed:', err)
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative px-4 py-6 md:py-12 max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center w-full max-w-3xl mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight sm:mb-6 text-slate-900 drop-shadow-sm">
            {renderHeading()}
          </h1>

          <p className="text-sm md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle} <br />
            No Logo | High Quality | unlimited
          </p>

          <div className="w-full max-w-2xl mx-auto">
            <form
              onSubmit={onSubmit}
              className="group relative flex items-center w-full max-w-2xl mx-auto p-1 bg-white backdrop-blur-md border rounded-full transition-all duration-300 shadow-indigo-900/5 border-indigo-200 focus-within:border-indigo-500"
            >
              <div className="flex items-center justify-center pl-4 pr-2 transition-colors duration-300 text-slate-400 group-focus-within:text-indigo-500">
                <LinkIcon className="w-5 h-5" />
              </div>

              <input
                type="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent placeholder-slate-400 font-medium h-14 px-2 text-base md:text-lg focus:outline-none w-full transition-colors text-slate-900"
                required
              />

              <div className="flex items-center gap-2 pr-1">
                <button
                  type="button"
                  onClick={handlePaste}
                  className="flex items-center justify-center gap-2 px-6 h-12 font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  aria-label="Paste URL"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Clipboard className="w-5 h-5" />
                  )}
                  <span>Paste</span>
                </button>
              </div>
            </form>

            {/* Report an issue — FIXED to /contact */}
            <div className="flex justify-center mt-4">
              <Link
                to="/contact"
                className="text-xs text-slate-400 hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1.5"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                Report an issue
              </Link>
            </div>

            {error && <p className="mt-3 text-sm text-red-500 text-center">{error}</p>}
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-6 max-w-xl mx-auto leading-relaxed text-center">
          {SITE.domain} is an online free and fast tool which helps you to download instagram
          reels video or to save reels video to your device. You can save any reels videos to
          your phone or computer and view them offline anytime.
        </p>
      </div>
    </div>
  )
}
