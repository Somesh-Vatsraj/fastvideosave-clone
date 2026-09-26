import { Link as LinkIcon, Clipboard, Loader2 } from 'lucide-react'

export default function Hero({ heading, subtitle, placeholder, url, setUrl, onSubmit, isLoading, error, buttonLabel = 'Download' }) {
  const renderHeading = () => {
    const parts = heading.split(/<gradient>|<\/gradient>/)
    return parts.map((part, i) =>
      i === 1 ? (
        <span
          key={i}
          className="bg-gradient-to-r from-brand-600 to-pink-500 bg-clip-text text-transparent"
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
    } catch {}
  }

  return (
    <section className="px-4 pb-8 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {renderHeading()}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-slate-500 sm:text-base">
          {subtitle}
        </p>

        <form onSubmit={onSubmit} className="mt-8">
          <div className="relative mx-auto max-w-2xl">
            <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 pl-4 shadow-sm focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10 sm:p-1.5 sm:pl-5">
              <LinkIcon className="mr-2 flex-shrink-0 text-slate-400" size={18} />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder-slate-400 sm:text-base"
              />
              <button
                type="button"
                onClick={handlePaste}
                className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-brand-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Clipboard size={15} />}
                <span>Paste</span>
              </button>
            </div>
          </div>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </form>

        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600"
        >
          ⚠️ Report an issue
        </button>
      </div>
    </section>
  )
}
