import { Shield } from 'lucide-react'
import { SITE } from '../config/site'

export default function DMCA() {
  return (
    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6 text-indigo-400" />
        DMCA Compliance
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {SITE.domain} complies with 17 U.S.C. § 512 and the Digital Millennium Copyright Act
        (DMCA). It is our policy to respond to any infringement notices and take appropriate
        actions. If your copyrighted material has been posted on the site and you want this
        material removed, please contact us.
      </p>
    </div>
  )
}
