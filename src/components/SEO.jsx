import { Helmet } from 'react-helmet-async'
import { SITE } from '../config/site'

export default function SEO({ title, description, keywords, canonical, type = 'website' }) {
  const fullTitle = title ? `${title} - ${SITE.domain}` : SITE.domain
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.domain} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: SITE.domain,
          url: SITE.url,
          description,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        })}
      </script>
    </Helmet>
  )
}
