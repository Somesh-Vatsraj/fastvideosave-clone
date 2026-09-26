export default function Steps({
  steps = ['Copy Link of the video.', 'Paste Link into input box.', 'Tap "Download Video" button.'],
  title = 'Steps to Download Reels From Instagram',
  subtitle = "Here's a quick and easy way to do it:",
}) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-xs text-slate-500 sm:text-sm">{subtitle}</p>

        <div className="relative mt-12">
          {/* Dashed connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-5 hidden border-t-2 border-dashed border-brand-200 sm:block" />

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-400 bg-white text-sm font-bold text-brand-600">
                  {i + 1}
                </div>
                <p className="mt-4 max-w-[180px] text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
