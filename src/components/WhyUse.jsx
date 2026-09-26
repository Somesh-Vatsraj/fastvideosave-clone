import { SITE } from '../config/site'

export default function WhyUse() {
  return (
    <div className="bg-indigo-50/50 border border-indigo-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Why use <span className="text-gradient">{SITE.domain}</span>?
      </h3>

      <p className="text-base text-slate-600 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
        As Instagram doesn't allow to download reels directly from the app or website online,
        here <strong className="text-slate-800">{SITE.domain}</strong> web based tool helps you
        to do that in high quality formats.
      </p>

      <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-indigo-100 text-center">
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          <strong className="text-slate-700">Note:</strong> Downloaded video/audio cannot be
          used for commercial purposes.
        </p>
      </div>
    </div>
  )
}
