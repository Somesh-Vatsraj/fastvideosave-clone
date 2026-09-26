const faqs = [
  {
    q: 'Is Fastvideosave free to use?',
    a: 'Yes, Fastvideosave is a 100% free online tool. You can download as many videos and reels as you want without any subscription or hidden costs.',
  },
  {
    q: 'Do I need to install any software or app?',
    a: "No, you don't need to install anything. Fastvideosave is a web-based tool that works directly in your browser on mobile, tablet, and desktop.",
  },
  {
    q: 'What is the quality of the downloaded videos?',
    a: 'We fetch the media in its original high quality. If the source video is in 1080p or 4K, our tool will provide the download link for that same resolution.',
  },
  {
    q: 'Can I download content from private accounts?',
    a: 'For security and privacy reasons, our tool only supports downloading content from public Instagram accounts.',
  },
  {
    q: 'Where are the downloaded files saved?',
    a: "By default, files are saved in your device's Downloads folder. On mobile, they are usually saved directly to your Gallery or Photos app.",
  },
  {
    q: 'Do I need to provide my Instagram login details?',
    a: 'No, you never need to provide your Instagram username or password. Fastvideosave works without requiring any of your personal account information.',
  },
  {
    q: 'Is there a limit on how many videos I can download?',
    a: 'No, there are absolutely no limits. You can download an unlimited number of Instagram videos, reels, and photos for free.',
  },
  {
    q: 'Is Fastvideosave safe for my device?',
    a: 'Yes, our tool is completely safe. We do not require any app installations or registrations.',
  },
  {
    q: 'Do you store my downloaded videos?',
    a: 'No, we do not store any of your downloaded videos. All downloads are processed in real-time and served directly from Instagram\'s servers.',
  },
  {
    q: 'Does Fastvideosave work on Android?',
    a: 'Yes, our website is fully responsive and works seamlessly on Android devices.',
  },
  {
    q: 'Can I download videos using my phone\'s browser?',
    a: 'Yes, you can download videos using any mobile browser that supports video downloads.',
  },
  {
    q: 'Can I download videos without the Instagram app?',
    a: 'Yes, Fastvideosave works entirely without the need for the Instagram app.',
  },
]

export default function FAQ() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Everything you need to know about Fastvideosave
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-slate-200 hover:bg-white sm:p-5"
            >
              <h3 className="flex items-start gap-2.5 text-[12px] font-bold text-slate-800 sm:text-[13px]">
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-brand-400 text-[9px] font-bold text-brand-600">
                  ?
                </span>
                {f.q}
              </h3>
              <p className="mt-2 pl-6 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
