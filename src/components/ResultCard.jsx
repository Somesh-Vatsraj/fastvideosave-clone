import { Download, RefreshCw, Play, Music } from 'lucide-react'

export default function ResultCard({ data, onReset }) {
  if (!data) return null

  const isAudio = data.type === 'audio'
  const isImage = data.type === 'image'

  return (
    <section className="animate-slide-up px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative mx-auto w-full max-w-[220px] flex-shrink-0 sm:mx-0 sm:w-52">
              {isImage ? (
                <img
                  src={data.thumbnail || data.downloadUrl}
                  alt={data.title}
                  className="w-full rounded-2xl border border-slate-100 object-cover"
                />
              ) : (
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-900">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="aspect-[9/13] w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      {isAudio ? (
                        <Music size={24} className="text-indigo-600" />
                      ) : (
                        <Play size={22} className="ml-0.5 fill-indigo-600 text-indigo-600" />
                      )}
                    </div>
                  </div>
                  {data.duration && (
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
                      {data.duration}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <a
                href={data.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 h-12 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <Download size={18} />
                {isImage ? 'Download Photo' : isAudio ? 'Download Audio' : 'Download Video'}
              </a>
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
