import SEO from '../components/SEO'
import { SITE } from '../config/site'

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description={`Terms of service for ${SITE.domain} - rules and guidelines for using our free downloader.`}
        canonical={`${SITE.url}/terms-of-service`}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: January 2025</p>

        <div className="prose prose-sm mt-8 max-w-none">
          <h2 className="mt-6 text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            By using {SITE.domain}, you agree to these terms. If you do not agree, please do
            not use our service.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">2. Permitted Use</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {SITE.domain} is provided for personal, non-commercial use only. You may not use
            our service to download copyrighted content for commercial purposes without
            permission from the copyright owner.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">3. User Responsibilities</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            You are responsible for ensuring you have the right to download any content. Do not
            use our service to infringe on copyrights or violate any laws.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">4. Disclaimer</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The service is provided "as is" without warranties of any kind. We are not
            responsible for any damages arising from the use of our service.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We are not liable for any indirect, incidental, or consequential damages resulting
            from your use of the service.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">6. Changes to Terms</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We may update these terms at any time. Continued use means you accept the changes.
          </p>

          <h2 className="mt-6 text-lg font-bold text-slate-900">7. Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            For questions, email{' '}
            <a href={`mailto:${SITE.email}`} className="text-indigo-600 hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
