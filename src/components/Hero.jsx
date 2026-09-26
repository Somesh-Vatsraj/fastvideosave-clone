import { Link as LinkIcon, Clipboard, Loader2, AlertCircle } from 'lucide-react'

export default function Hero({
  heading = 'Instagram <gradient>Reels</gradient> Download',
  subtitle = 'Fastest tool to download reels video:\nNo Logo | High Quality | unlimited',
  placeholder = 'Paste Link Here...',
  url,
  setUrl,
  onSubmit,
  isLoading,
  error,
}) {
  const renderHeading = () => {
    const parts = heading.split(/<gradient>|<\/gradient>/)
    return parts.map((part, i) =>
      i === 1 ? (
        <span key={i} className="text-gradient">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    )
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
    <section className="px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[42px]">
          {renderHeading()}
        </h1>
        <p className="mx-auto mt-3 max-w-md whitespace-pre-line text-[13px] leading-relaxed text-slate-500 sm:text-[15px]">
          {subtitle}
        </p>

        <form onSubmit={onSubmit} className="mt-7">
          <div className="mx-auto max-w-xl">
            <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 pl-4 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/30 sm:p-1.5 sm:pl-5">
              <LinkIcon className="mr-2 flex-shrink-0 text-slate-400" size={16} />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent py-2 text-[13px] outline-none placeholder-slate-400 sm:text-sm"
              />
              <button
                type="button"
                onClick={handlePaste}
                className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {isLoading ? <Loader2 className="animate-spin" size={14} /> : <Clipboard size={13} />}
                <span>Paste</span>
              </button>
            </div>
          </div>
          {error && <p className="mt-3 text-xs text-red-500">{error}</p>}
        </form>

        <button
          type="button"
          className="mt-4 inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600"
        >
          <AlertCircle size={12} />
          Report an issue
        </button>
      </div>
    </section>
  )
}
