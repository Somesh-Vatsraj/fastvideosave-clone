import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'
import Hero from '../components/Hero'
import ResultCard from '../components/ResultCard'
import Steps from '../components/Steps'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import useDownloader from '../hooks/useDownloader'
import { getToolByType } from '../data/tools'
import NotFound from './NotFound'

export default function ToolPage({ type }) {
  const tool = getToolByType(type)
  const { url, setUrl, isLoading, mediaData, error, submit, reset } = useDownloader(tool.platform, tool.type)

  if (!tool) return <NotFound />

  return (
    <>
      <SEO
        title={`${tool.title} - No Watermark, HD, Free`}
        description={tool.description}
        keywords={`${tool.title.toLowerCase()}, download ${tool.platform.toLowerCase()} ${tool.type}, no watermark`}
        canonical={`https://fastvideosave.net/${tool.slug}`}
      />

      <Hero
        heading={tool.heading}
        subtitle={tool.subtitle}
        placeholder={tool.placeholder}
        url={url}
        setUrl={setUrl}
        onSubmit={submit}
        isLoading={isLoading}
        error={error}
      />

      <ResultCard data={mediaData} onReset={reset} />

      <AdBanner slot="3333333333" className="mx-auto max-w-3xl px-4 pb-6" />

      <div className="mx-auto max-w-3xl px-4 pb-6 text-center">
        <p className="text-xs leading-relaxed text-slate-500">{tool.description}</p>
      </div>

      <Steps steps={tool.steps} title={`Steps to Download ${tool.title.replace(' Downloader', '')} from ${tool.platform}`} />

      <AdBanner slot="4444444444" className="mx-auto max-w-3xl px-4 pb-6" />

      <HowItWorks platform={tool.platform} />
      <FAQ />
    </>
  )
}
