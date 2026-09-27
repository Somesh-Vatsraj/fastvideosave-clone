import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e?.preventDefault()
    setError('')
    setMediaData(null)

    if (!url.trim()) {
      setError('Please paste a link first.')
      return
    }

    try {
      new URL(url)
    } catch {
      setError('Please enter a valid URL.')
      return
    }

    setIsLoading(true)

    try {
      const data = await fetchVideoInfo(url)

      // ============================================
      // Response structure handle karo (flexible)
      // Different APIs different keys use karte hain
      // ============================================
      const videoUrl =
        data.video_url ||
        data.videoUrl ||
        data.download_url ||
        data.url ||
        data.medias?.[0]?.url ||
        data.links?.[0]?.link ||
        data.data?.video_url ||
        null

      const thumbnail =
        data.thumbnail ||
        data.thumb ||
        data.cover ||
        data.image ||
        data.data?.thumbnail ||
        ''

      const title =
        data.title ||
        data.caption ||
        data.description ||
        `${platform} ${type}`

      const author =
        data.author ||
        data.username ||
        data.owner ||
        '@user'

      if (!videoUrl) {
        throw new Error('Video URL not found in API response')
      }

      setMediaData({
        thumbnail,
        title,
        author,
        duration: data.duration || '00:00',
        platform,
        type,
        downloadUrl: getDownloadUrl(videoUrl), // download.php ke through proxy
        rawVideoUrl: videoUrl,
        audioUrl: data.audio_url || data.audioUrl || null,
      })
    } catch (err) {
      console.error('Download error:', err)
      setError(
        err.message ||
          'Failed to fetch. Please check the URL and try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setUrl('')
    setMediaData(null)
    setError('')
  }

  return { url, setUrl, isLoading, mediaData, error, submit, reset }
}
