import { Download, RefreshCw, Play, Music } from 'lucide-react'

export default function ResultCard({ data, onReset }) {
  if (!data) return null

  const isAudio = data.type === 'audio'
  const isImage = data.type === 'image'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = data.downloadUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = `${data.title || 'video'}.mp4`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleAudioDownload = () => {
    if (!data.audioUrl) return
    const link = document.createElement('a')
    link.href = data.audioUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = `${data.title || 'audio'}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="animate-slide-up px-4 pb-10 sm:px-6 lg:px-8">
      {/* ⚡ Bigger max-width */}
      <div className="mx-auto max-w-4xl">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            {/* ⚡ Bigger Preview — 220px → 320-360px */}
            <div className="relative mx-auto w-full max-w-[280px] flex-shrink-0 sm:max-w-[320px] lg:mx-0 lg:w-80">
              {isImage ? (
                <img
                  src={data.thumbnail || data.rawVideoUrl}
                  alt={data.title}
                  className="w-full rounded-2xl border border-slate-100 object-cover shadow-md"
                />
              ) : (
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 shadow-md">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="aspect-[9/13] w-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"%3E%3Crect fill="%23334155" width="100" height="150"/%3E%3C/svg%3E'
                    }}
                  />

                  {/* ⚡ Bigger play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform hover:scale-110">
                      {isAudio ? (
                        <Music size={28} className="text-indigo-600 sm:size-32" />
                      ) : (
                        <Play size={26} className="ml-1 fill-indigo-600 text-indigo-600 sm:size-32" />
                      )}
                    </div>
                  </div>

                  {/* Quality badge — bigger */}
                  {data.videoQuality && !isAudio && (
                    <div className="absolute top-3 right-3 rounded-md bg-black/75 px-2.5 py-1 text-xs font-bold text-white">
                      {data.videoQuality}
                    </div>
                  )}

                  {/* Duration — bigger */}
                  {data.duration && data.duration !== '00:00' && (
                    <div className="absolute bottom-3 left-3 rounded-md bg-black/75 px-2.5 py-1 text-xs font-semibold text-white">
                      {data.duration}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Details + Actions */}
            <div className="flex flex-1 flex-col gap-3 min-w-0">
              <h3 className="line-clamp-3 text-base font-semibold text-slate-800 sm:text-lg">
                {data.title}
              </h3>

              {data.author && (
                <p className="text-sm text-slate-500">{data.author}</p>
              )}

              {/* Main download button — slightly taller */}
              <button
                onClick={handleDownload}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 h-13 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <Download size={20} />
                {isImage ? 'Download Photo' : isAudio ? 'Download Audio' : 'Download Video'}
              </button>

              {/* Audio download (bonus) */}
              {data.audioUrl && data.type === 'video' && (
                <button
                  onClick={handleAudioDownload}
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-indigo-500 bg-white px-6 py-3.5 text-base font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  <Music size={18} />
                  Download Audio (MP3)
                </button>
              )}

              {/* Reset */}
              <button
                onClick={onReset}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <RefreshCw size={18} /> Download Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
