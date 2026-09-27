import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e?.preventDefault?.()
    setError('')
    setMediaData(null)

    // Use latest URL from event target or current state
    const targetUrl = e?.target?.url?.value || url

    if (!targetUrl?.trim()) {
      setError('Please paste a link first.')
      return
    }

    try {
      new URL(targetUrl)
    } catch {
      setError('Please enter a valid URL.')
      return
    }

    setIsLoading(true)

    try {
      const data = await fetchVideoInfo(targetUrl.trim())
      console.log('API Response:', data) // Debug ke liye

      // ============================================
      // Flexible response parsing
      // ============================================
      let videoUrl = null
      let thumbnail = ''
      let title = `${platform} ${type}`
      let author = '@user'
      let duration = '00:00'

      // Agar array hai
      if (Array.isArray(data)) {
        videoUrl = data[0]?.url || data[0]?.video_url || data[0]?.download_url
        thumbnail = data[0]?.thumbnail || data[0]?.cover || ''
      }
      // Agar object hai
      else if (data && typeof data === 'object') {
        videoUrl =
          data.video_url ||
          data.videoUrl ||
          data.download_url ||
          data.downloadUrl ||
          data.url ||
          data.link ||
          data.medias?.[0]?.url ||
          data.medias?.[0]?.link ||
          data.links?.[0]?.link ||
          data.links?.[0]?.url ||
          data.data?.video_url ||
          data.data?.url ||
          data.result?.url ||
          null

        thumbnail =
          data.thumbnail ||
          data.thumb ||
          data.cover ||
          data.image ||
          data.preview ||
          data.data?.thumbnail ||
          data.result?.thumbnail ||
          ''

        title =
          data.title ||
          data.caption ||
          data.description ||
          data.data?.title ||
          `${platform} ${type}`

        author =
          data.author ||
          data.username ||
          data.owner ||
          data.data?.author ||
          '@user'

        duration = data.duration || data.data?.duration || '00:00'
      }

      if (!videoUrl) {
        console.error('Response:', data)
        throw new Error('Video URL not found. API response format unexpected.')
      }

      // Agar videoUrl relative hai toh full URL banao
      if (videoUrl.startsWith('/')) {
        videoUrl = `https://api-loux.onrender.com${videoUrl}`
      }

      setMediaData({
        thumbnail,
        title,
        author,
        duration,
        platform,
        type,
        downloadUrl: getDownloadUrl(videoUrl),
        rawVideoUrl: videoUrl,
        audioUrl: data.audio_url || data.audioUrl || data.data?.audio_url || null,
      })
    } catch (err) {
      console.error('Download error:', err)
      setError(
        err.response?.data?.message ||
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
