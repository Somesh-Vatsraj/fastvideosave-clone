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

export default function Home() {
  const { url, setUrl, isLoading, mediaData, error, submit, reset } = useDownloader('Instagram', 'video')

  return (
    <>
      <SEO
        title="Instagram Reels Download - No Watermark, HD, Free"
        description="Download Instagram Reels, Videos & Photos without watermark. Fastvideosave.net is the fastest free tool - No login, high quality, unlimited downloads."
        keywords="instagram reels download, download instagram video, save reels, no watermark downloader, fastvideosave"
        canonical="https://fastvideosave.net/"
      />

      {/* 1. Hero */}
      <Hero
        url={url}
        setUrl={setUrl}
        onSubmit={submit}
        isLoading={isLoading}
        error={error}
      />

      {/* 2. Result card (only shows after fetch) */}
      <ResultCard data={mediaData} onReset={reset} />

      {/* Faint watermark spacer + description */}
      <div className="relative px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] leading-relaxed text-slate-500 sm:text-xs">
            Fastvideosave.net is an online free and fast tool which helps you to download instagram reels
            video or to save reels video to your device. You can save any reels videos to your phone or
            computer and view them offline anytime.
          </p>
        </div>
      </div>

      {/* Ad */}
      <AdBanner slot="1111111111" className="mx-auto max-w-3xl px-4 pb-4" />

      {/* 3. Steps */}
      <Steps />

      {/* 4. How It Works */}
      <HowItWorks platform="Instagram" />

      {/* Ad */}
      <AdBanner slot="2222222222" className="mx-auto max-w-3xl px-4 py-4" />

      {/* 5. Two info cards */}
      <InfoCards />

      {/* 6. Why use section */}
      <WhyUse />

      {/* Ad */}
      <AdBanner slot="3333333333" className="mx-auto max-w-3xl px-4 pb-4" />

      {/* 7. FAQ (2 column) */}
      <FAQ />

      {/* 8. DMCA dark card */}
      <DMCA />
    </>
  )
}
