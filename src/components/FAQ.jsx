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
    a: "By default, files are saved in your device's 'Downloads' folder. On mobile, they are usually saved directly to your Gallery or Photos app.",
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
    a: "No, we do not store any of your downloaded videos. All downloads are processed in real-time and served directly from Instagram's servers.",
  },
  {
    q: 'Does Fastvideosave work on Android?',
    a: 'Yes, our website is fully responsive and works seamlessly on Android devices.',
  },
  {
    q: "Can I download videos using my phone's browser?",
    a: 'Yes, you can download videos using any mobile browser that supports video downloads.',
  },
  {
    q: 'Can I download videos without the Instagram app?',
    a: 'Yes, Fastvideosave works entirely without the need for the Instagram app.',
  },
]

export default function FAQ() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-slate-600">Everything you need to know about Fastvideosave</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="glass-panel p-6 rounded-2xl hover:bg-white/60 transition-all duration-300"
          >
            <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                ?
              </span>
              {f.q}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-9">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
