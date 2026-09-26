const cards = [
  {
    title: 'Reels Downloader',
    description:
      'Our Instagram reels viewer and downloader allows users to download Instagram reels video fast and free, it just took few seconds to fetch video from link and directly download it into gallery of your device. It\'s super fast tool that takes less time to download reels from Instagram.',
    gradient: 'from-purple-500 via-fuchsia-500 to-indigo-600',
    icons: ['▶', '📱', '♡', '⤓'],
  },
  {
    title: 'Content Formats',
    description:
      'Instagram does not allow to download reels or any media content directly from the app. Fastvideosave.net helps you to do that in high quality MP4, JPG or MP3 audio formats with a single click.',
    gradient: 'from-purple-400 via-pink-400 to-blue-400',
    icons: ['MP4', 'MP3', 'JPG', '⤓'],
  },
]

export default function InfoCards() {
  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            {/* Gradient image area */}
            <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${card.gradient} sm:h-44`}>
              <div className="flex flex-wrap items-center justify-center gap-3 px-6">
                {card.icons.map((icon, i) => (
                  <div
                    key={i}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-xs font-bold text-white backdrop-blur-sm sm:h-14 sm:w-14 sm:text-sm"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
                <span className="text-brand-600">◆</span>
                {card.title}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
