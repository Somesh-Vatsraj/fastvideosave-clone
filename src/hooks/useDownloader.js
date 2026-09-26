import { useState } from 'react'
import { fetchMedia } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e?.preventDefault()
    setError('')
    setMediaData(null)

    if (!url.trim()) return setError('Please paste a link first.')
    try { new URL(url) } catch { return setError('Please enter a valid URL.') }

    setIsLoading(true)
    try {
      const data = await fetchMedia(url, type)
      setMediaData({
        thumbnail: data.thumbnail || data.thumb || '',
        title: data.title || `${platform} ${type}`,
        author: data.author || '@user',
        duration: data.duration || '00:00',
        platform,
        type,
        downloadUrl: data.url || data.download_url,
        audioUrl: data.audio_url,
      })
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch. Check URL & try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => { setUrl(''); setMediaData(null); setError('') }

  return { url, setUrl, isLoading, mediaData, error, submit, reset }
}
