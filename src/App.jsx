import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ToolPage from './pages/ToolPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels-downloader" element={<ToolPage type="reels" />} />
          <Route path="/video-downloader" element={<ToolPage type="video" />} />
          <Route path="/photo-downloader" element={<ToolPage type="photo" />} />
          <Route path="/audio-downloader" element={<ToolPage type="audio" />} />
          <Route path="/story-downloader" element={<ToolPage type="story" />} />
          <Route path="/profile-downloader" element={<ToolPage type="profile" />} />
          <Route path="/facebook-downloader" element={<ToolPage type="facebook" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
