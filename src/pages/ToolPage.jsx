import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'
import Hero from '../components/Hero'
import ResultCard from '../components/ResultCard'
import Steps from '../components/Steps'
import HowItWorks from '../components/HowItWorks'
import InfoCards from '../components/InfoCards'
import WhyUse from '../components/WhyUse'
import FAQ from '../components/FAQ'
import DMCA from '../components/DMCA'
import useDownloader from '../hooks/useDownloader'
import { getToolByType } from '../data/tools'
import NotFound from './NotFound'

export default function ToolPage({ type }) {
  const tool = getToolByType(type)

  // Hooks must be called unconditionally
  const downloader = useDownloader(tool?.platform || 'Instagram', tool?.type || 'video')

  if (!tool) return <NotFound />

  const { url, setUrl, isLoading, mediaData, error, submit, reset } = downloader

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

      <div className="relative px-4 pb-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="min-h-[280px] sm:min-h-[336px] w-full relative flex items-center justify-center bg-transparent my-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] z-0">
              <span className="text-4xl sm:text-7xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Fastvideosave.net
              </span>
            </div>
            <div className="relative z-10 w-full flex justify-center">
              <AdBanner slot="5900026060" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Steps
          steps={tool.steps}
          title={`Steps to Download ${tool.title.replace(' Downloader', '')} from ${tool.platform}`}
        />

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-20 mx-auto" />

        <HowItWorks platform={tool.platform} />

        <div className="max-w-4xl mx-auto space-y-12 mb-24">
          <AdBanner slot="2222222222" className="w-full" />

          <InfoCards />

          <WhyUse />

          <AdBanner slot="3333333333" className="w-full" />

          <FAQ />

          <DMCA />
        </div>
      </div>
    </>
  )
}
