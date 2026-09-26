import { Shield } from 'lucide-react'

export default function DMCA() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-slate-900 px-6 py-7 text-white shadow-lg sm:px-10 sm:py-8">
          <div className="flex items-center gap-2.5">
            <Shield size={18} className="text-white" />
            <h2 className="text-sm font-bold sm:text-base">DMCA Compliance</h2>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-slate-300 sm:text-xs">
            Fastvideosave.net complies with 17 U.S.C. § 512 and the Digital Millennium Copyright Act (DMCA). It is our policy to
            respond to any infringement notices and take appropriate actions. If your copyrighted material has been posted on the
            site and you want the material removed, please contact us.
          </p>
        </div>
      </div>
    </section>
  )
}
