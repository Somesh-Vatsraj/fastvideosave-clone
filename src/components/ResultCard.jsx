import { Download, RefreshCw, Play, Music, Image as ImageIcon, Video } from 'lucide-react'

export default function ResultCard({ data, onReset }) {
  if (!data) return null

  const isAudio = data.type === 'audio'
  const isImage = data.type === 'image'
  const isVideo = data.type === 'video'

  // Type-specific label, icon, colors
  const config = {
    video: {
      label: 'Video',
      Icon: Video,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      badgeBg: 'bg-indigo-600',
      gradient: 'from-indigo-500 to-violet-600',
      shadow: 'shadow-indigo-500/30',
      hoverShadow: 'hover:shadow-indigo-500/50',
    },
    audio: {
      label: 'Audio',
      Icon: Music,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      badgeBg: 'bg-purple-600',
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/30',
      hoverShadow: 'hover:shadow-purple-500/50',
    },
    image: {
      label: 'Photo',
      Icon: ImageIcon,
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      badgeBg: 'bg-pink-600',
      gradient: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/30',
      hoverShadow: 'hover:shadow-pink-500/50',
    },
  }

  const current = config[data.type] || config.video
  const TypeIcon = current.Icon

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = data.downloadUrl
    link.rel = 'noopener noreferrer'
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
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23e2e8f0" width="100" height="100"/%3E%3Ctext x="50" y="55" text-anchor="middle" fill="%2394a3b8" font-size="30"%3E🖼️%3C/text%3E%3C/svg%3E'
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

                  {/* Center type icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      <TypeIcon size={24} className={current.color} />
                    </div>
                  </div>

                  {/* Type badge — top left */}
                  <div className={`absolute top-2 left-2 flex items-center gap-1 rounded-full ${current.badgeBg} px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide`}>
                    <TypeIcon size={10} />
                    {current.label}
                  </div>

                  {/* Quality badge — top right (video only) */}
                  {isVideo && data.quality && (
                    <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {data.quality}
                    </div>
                  )}

                  {/* Duration — bottom left */}
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
              {/* Type chip */}
              <div className={`inline-flex items-center gap-1.5 self-start rounded-full ${current.bg} px-3 py-1 text-[11px] font-bold ${current.color} uppercase tracking-wider`}>
                <TypeIcon size={12} />
                {current.label}
              </div>

              <h3 className="line-clamp-2 text-sm font-semibold text-slate-800 sm:text-base">
                {data.title}
              </h3>

              {data.author && (
                <p className="text-xs text-slate-500">{data.author}</p>
              )}

              {/* Download button — type colored */}
              <button
                onClick={handleDownload}
                className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${current.gradient} px-6 h-12 text-sm font-semibold text-white shadow-lg ${current.shadow} transition-all duration-300 ${current.hoverShadow} hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]`}
              >
                <Download size={18} />
                Download {current.label}
              </button>

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
