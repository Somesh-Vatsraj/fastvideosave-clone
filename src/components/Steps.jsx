export default function Steps({
  steps = [
    'Copy Link of the video.',
    'Paste Link into Input box.',
    'Tap "Download Video" button.',
  ],
  title = 'Steps to Download Reels From Instagram',
}) {
  const borderColors = ['border-indigo-200', 'border-purple-200', 'border-pink-200']
  const textColors = ['text-indigo-600', 'text-purple-600', 'text-pink-600']

  return (
    <div className="w-full mt-24 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Here's a quick and easy way to do it:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
        {/* Gradient connecting line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0" />

        {steps.map((step, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/40 transition-colors duration-300"
          >
            <div
              className={`w-16 h-16 rounded-full bg-white border-2 ${borderColors[i]} flex items-center justify-center text-xl font-bold ${textColors[i]} mb-4 shadow-sm`}
            >
              {i + 1}
            </div>
            <p className="text-sm text-slate-600 font-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
