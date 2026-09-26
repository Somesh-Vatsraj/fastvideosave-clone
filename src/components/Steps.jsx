export default function Steps({ steps, title = 'Steps to Download Reels From Instagram' }) {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">Here's a quick and easy way to do it:</p>

        <div className="relative mt-12">
          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-5 hidden h-px border-t-2 border-dashed border-brand-200 sm:block" />

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-bold text-brand-600">
                  {i + 1}
                </div>
                <p className="mt-4 max-w-[200px] text-sm text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
