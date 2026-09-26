import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <h1 className="text-7xl font-extrabold text-brand-600 sm:text-8xl">404</h1>
        <h2 className="mt-4 text-xl font-bold sm:text-2xl">Page Not Found</h2>
        <p className="mt-3 text-sm text-slate-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-brand mt-8">
          <Home size={18} /> Back to Home
        </Link>
      </section>
    </>
  )
}
