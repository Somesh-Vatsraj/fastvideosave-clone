import { Download, RefreshCw, Play, Music } from 'lucide-react'

export default function ResultCard({ data, onReset }) {
  if (!data) return null

  const isAudio = data.type === 'audio'
  const isImage = data.type === 'image'

  const typeLabel = isImage ? 'Photo' : isAudio ? 'Audio' : 'Video'
  const extension = isImage ? 'jpg' : isAudio ? 'mp3' : 'mp4'

  const handleDownload = () => {
    // Type ke hisab se URL choose karo
    let downloadUrl = data.downloadUrl

    if (isAudio && data.audioUrl) {
      downloadUrl = data.audioUrl
    } else if (isImage && data.imageUrl) {
      downloadUrl = data.imageUrl
    }

    if (!downloadUrl) return

    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `${data.title || typeLabel}.${extension}`
    link.rel = 'noopener noreferrer'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="animate-slide-up px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Preview */}
            <div className="relative mx-auto w-full max-w-[220px] flex-shrink-0 sm:mx-0 sm:w-52">
              {isImage ? (
                <img
                  src={data.imageUrl || data.thumbnail}
                  alt={data.title}
                  className="w-full aspect-square rounded-2xl border border-slate-100 object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23334155" width="100" height="100"/%3E%3C/svg%3E'
                  }}
                />
              ) : (
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-900">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="aspect-[9/13] w-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"%3E%3Crect fill="%23334155" width="100" height="150"/%3E%3C/svg%3E'
                    }}
                  />

                  {/* Play/audio icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      {isAudio ? (
                        <Music size={24} className="text-indigo-600" />
                      ) : (
                        <Play size={22} className="ml-0.5 fill-indigo-600 text-indigo-600" />
                      )}
                    </div>
                  </div>

                  {/* Duration badge */}
                  {data.duration && data.duration !== '00:00' && (
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
                      {data.duration}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Details + Actions */}
            <div className="flex flex-1 flex-col gap-3 min-w-0">
              <h3 className="line-clamp-2 text-sm font-semibold text-slate-800 sm:text-base">
                {data.title}
              </h3>

              {data.author && (
                <p className="text-xs text-slate-500">{data.author}</p>
              )}

              {/* Single Download button — tab-specific */}
              <button
                onClick={handleDownload}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 h-12 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <Download size={18} />
                Download {typeLabel}
              </button>

              {/* Reset button */}
              <button
                onClick={onReset}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 h-12 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <RefreshCw size={16} /> Download Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
