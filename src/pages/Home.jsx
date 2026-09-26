import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'
import Hero from '../components/Hero'
import ResultCard from '../components/ResultCard'
import Steps from '../components/Steps'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import useDownloader from '../hooks/useDownloader'
import { tools } from '../data/tools'

export default function Home() {
  const tool = tools[0] // reels-downloader
  const { url, setUrl, isLoading, mediaData, error, submit, reset } = useDownloader('Instagram', 'video')

  return (
    <>
      <SEO
        title="Instagram Reels Download - No Watermark, HD, Free"
        description="Download Instagram Reels, Videos & Photos without watermark. Fastvideosave.net is the fastest free tool - No login, high quality, unlimited downloads."
        keywords="instagram reels download, download instagram video, save reels, no watermark downloader, fastvideosave"
        canonical="https://fastvideosave.net/"
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

      <AdBanner slot="1111111111" className="mx-auto max-w-3xl px-4 pb-6" />

      <div className="mx-auto max-w-3xl px-4 pb-6 text-center">
        <p className="text-xs leading-relaxed text-slate-500">{tool.description}</p>
      </div>

      <Steps steps={tool.steps} title="Steps to Download Reels From Instagram" />

      <AdBanner slot="2222222222" className="mx-auto max-w-3xl px-4 pb-6" />

      <HowItWorks platform="Instagram" />
      <FAQ />
    </>
  )
}
