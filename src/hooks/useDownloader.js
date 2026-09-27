import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  // ============================================
  // submit(e, explicitUrl)
  // explicitUrl pass karo taaki stale closure issue na ho
  // ============================================
  const submit = async (e, explicitUrl) => {
    e?.preventDefault?.()
    setError('')
    setMediaData(null)

    // Priority: explicit URL > event target > state
    const targetUrl = explicitUrl || e?.target?.url?.value || url

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
      console.log('API Response:', data)

      // Parse response
      let videoUrl = null
      let audioUrl = null
      let imageUrl = null
      let thumbnail = ''
      let title = `${platform} ${type}`
      let author = '@user'
      let duration = '00:00'

      const extract = (obj) => {
        videoUrl =
          obj.video_url || obj.videoUrl ||
          obj.download_url || obj.downloadUrl ||
          obj.url || obj.link ||
          obj.medias?.[0]?.url || obj.medias?.[0]?.link ||
          obj.links?.[0]?.link || obj.links?.[0]?.url ||
          null

        audioUrl = obj.audio_url || obj.audioUrl || obj.audio || obj.music || null
        imageUrl = obj.image_url || obj.imageUrl || obj.image || obj.thumbnail || null

        thumbnail = obj.thumbnail || obj.thumb || obj.cover || obj.preview || obj.image || ''
        title = obj.title || obj.caption || obj.description || `${platform} ${type}`
        author = obj.author || obj.username || obj.owner || '@user'
        duration = obj.duration || '00:00'
      }

      if (Array.isArray(data)) {
        extract(data[0] || {})
      } else if (data && typeof data === 'object') {
        extract(data.data || data.result || data)
      }

      const fixUrl = (u) =>
        u && u.startsWith('/') ? `https://api-loux.onrender.com${u}` : u

      videoUrl = fixUrl(videoUrl)
      audioUrl = fixUrl(audioUrl)
      imageUrl = fixUrl(imageUrl)

      // Extension + filename
      const ext = type === 'audio' ? 'mp3' : type === 'image' ? 'jpg' : 'mp4'
      const safeTitle = title.replace(/[^a-z0-9]/gi, '_').slice(0, 40) || 'media'
      const filename = `${safeTitle}.${ext}`

      // Choose URL by type
      let finalUrl = null
      if (type === 'audio') finalUrl = audioUrl || videoUrl
      else if (type === 'image') finalUrl = imageUrl || thumbnail
      else finalUrl = videoUrl

      if (!finalUrl) {
        throw new Error(`No ${type} found in this URL.`)
      }

      setMediaData({
        thumbnail,
        title,
        author,
        duration,
        platform,
        type,
        downloadUrl: getDownloadUrl(finalUrl, filename),
        rawVideoUrl: finalUrl,
        audioUrl: audioUrl ? getDownloadUrl(audioUrl, `${safeTitle}.mp3`) : null,
        imageUrl: imageUrl || thumbnail || null,
        filename,
      })
    } catch (err) {
      console.error('Download error:', err)
      setError(err.response?.data?.message || err.message || 'Failed to fetch.')
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
