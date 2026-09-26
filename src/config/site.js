export const SITE = {
  brandPart1: 'Save',
  brandPart2: 'Reels',
  brandPart3: '.app',
  domain: 'SaveReels.app',
  name: 'SaveReels',
  url: 'https://savereels.app',
  email: 'support@savereels.app',
  year: new Date().getFullYear(),
}

export const BrandName = ({ className = '' }) => (
  <span className={className}>
    <span className="text-blue-600 font-extrabold">{SITE.brandPart1}</span>
    <span className="text-indigo-600 font-extrabold">{SITE.brandPart2}</span>
    <span className="text-slate-400 font-semibold">{SITE.brandPart3}</span>
  </span>
)
