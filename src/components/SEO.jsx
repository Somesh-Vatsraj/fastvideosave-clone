import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, canonical }) {
  const site = 'Fastvideosave.net'
  const fullTitle = title ? `${title} - ${site}` : site
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
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: site,
          url: 'https://fastvideosave.net',
          description,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        })}
      </script>
    </Helmet>
  )
}
