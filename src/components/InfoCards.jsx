const cards = [
  {
    title: 'Reels Downloader',
    image: '/images/instagram-reels-video-downloader.jpg',
    border: 'border-l-indigo-600',
    bg: 'bg-indigo-50/50 border-indigo-100/60',
    dot: 'bg-indigo-600',
    description:
      'Our Instagram reels viewer and downloader allows users to download Instagram reels video fast and free; it just took few seconds to fetch video from link and directly download it into gallery of your device. It is a super-fast Tool that takes less time to download reels from Instagram.',
  },
  {
    title: 'Content Formats',
    image: '/images/instagram-content-formats.jpg',
    border: 'border-l-purple-600',
    bg: 'bg-purple-50/50 border-purple-100/60',
    dot: 'bg-purple-600',
    description: (
      <>
        Instagram doesn't allow to download reels or any media content directly from the app.
        Fastvideosave.net helps you to do that in high quality <b>MP4</b>, <b>JPG</b> or <b>MP3</b>{' '}
        audio formats with a single click.
      </>
    ),
  },
]

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`glass-panel p-8 rounded-3xl shadow-sm ${card.border} flex flex-col justify-between hover:shadow-md transition-all duration-300 group`}
        >
          <div>
            <div className={`overflow-hidden rounded-2xl mb-6 ${card.bg} border relative aspect-[16/10]`}>
              <img
                src={card.image}
                alt={card.title}
                width="400"
                height="250"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML =
                    `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200 text-4xl">${card.title === 'Reels Downloader' ? '🎬' : '📄'}</div>`
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${card.dot} inline-block`} />
              {card.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
