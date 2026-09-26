import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Fastvideosave.net privacy policy - how we handle your data. No login, no storage of personal information."
        canonical="https://fastvideosave.net/privacy-policy"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: January 2025</p>

        <div className="prose prose-sm mt-8 max-w-none">
          <h2 className="mt-6 text-lg font-bold">1. Information We Collect</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Fastvideosave.net does not require registration or login. We do not collect personal
            information such as your name, email, or social media credentials. We may collect
            anonymous usage data (page views, browser type) to improve our service.
          </p>

          <h2 className="mt-6 text-lg font-bold">2. How We Use Information</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Anonymous analytics help us understand how users interact with our tool. We do not
            sell, trade, or share your information with third parties.
          </p>

          <h2 className="mt-6 text-lg font-bold">3. Cookies & Advertising</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We use Google AdSense to display ads. Google may use cookies to serve ads based on
            your prior visits to this site or other sites. You can opt out of personalized
            advertising via Google Ads Settings.
          </p>

          <h2 className="mt-6 text-lg font-bold">4. Downloaded Content</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We do not store any videos, photos, or audio you download. All processing happens
            in real-time and content is served directly from the source platform.
          </p>

          <h2 className="mt-6 text-lg font-bold">5. Third-Party Links</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our site may contain links to third-party websites. We are not responsible for their
            privacy practices.
          </p>

          <h2 className="mt-6 text-lg font-bold">6. Changes to This Policy</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We may update this policy from time to time. Changes will be posted on this page.
          </p>

          <h2 className="mt-6 text-lg font-bold">7. Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            For privacy-related questions, contact us at support@fastvideosave.net.
          </p>
        </div>
      </section>
    </>
  )
}
