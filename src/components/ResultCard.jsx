import { Download, RefreshCw, Play, Music } from 'lucide-react'

export default function ResultCard({ data, onReset }) {
  if (!data) return null

  const isAudio = data.type === 'audio'
  const isImage = data.type === 'image'

  return (
    <section className="animate-slide-up px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Preview */}
            <div className="relative mx-auto w-full max-w-[200px] flex-shrink-0 sm:mx-0 sm:w-48">
              {isImage ? (
                <img
                  src={data.thumbnail || data.downloadUrl}
                  alt={data.title}
                  className="w-full rounded-xl border border-slate-100 object-cover"
                />
              ) : (
                <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-900">
                  <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="aspect-[9/13] w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      {isAudio ? (
                        <Music size={20} className="text-brand-600" />
                      ) : (
                        <Play size={18} className="ml-0.5 fill-brand-600 text-brand-600" />
                      )}
                    </div>
                  </div>
                  {data.duration && (
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white">
                      {data.duration}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-1 flex-col gap-2.5">
              <a
                href={data.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                <Download size={16} />
                {isImage ? 'Download Photo' : isAudio ? 'Download Audio' : 'Download Video'}
              </a>
              <button
                onClick={onReset}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <RefreshCw size={14} /> Download Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
