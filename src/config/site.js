// ============================================
// SITE CONFIGURATION
// Yahin se poora website name change hoga
// ============================================

export const SITE = {
  // Brand name parts (header/footer me "Fast" + "videosave" + ".net" style)
  brandPart1: 'Fast',        // "Fast" — blue color
  brandPart2: 'videosave',   // "videosave" — gradient color
  brandPart3: '.net',        // ".net" — grey color

  // Full domain (SEO, canonical, footer me)
  domain: 'Fastvideosave.net',

  // Full name without .net (headings me)
  name: 'Fastvideosave',

  // URL (https ke saath)
  url: 'https://fastvideosave.net',

  // Email
  email: 'support@fastvideosave.net',

  // Copyright year auto
  year: new Date().getFullYear(),
}

// Helper: Header/Footer me brand render karne ke liye
export const BrandName = ({ className = '' }) => {
  return (
    <span className={className}>
      <span className="text-blue-600 font-extrabold">{SITE.brandPart1}</span>
      <span className="text-indigo-600 font-extrabold">{SITE.brandPart2}</span>
      <span className="text-slate-400 font-semibold">{SITE.brandPart3}</span>
    </span>
  )
}
