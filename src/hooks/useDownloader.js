import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e, explicitUrl) => {
    e?.preventDefault?.()
    setError('')
    setMediaData(null)

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

      // Error check
      if (!data?.success) {
        throw new Error(data?.error || data?.message || 'API returned error')
      }

      // ============================================
      // EXACT PARSER for api-loux response
      // ============================================
      const mediaArray = Array.isArray(data.media) ? data.media : []

      // Media items by type
      const videoItem = mediaArray.find(
        (m) => m.type === 'video' && (m.has_video === true || m.container?.includes('video'))
      )
      const audioItem = mediaArray.find(
        (m) => m.type === 'audio' && (m.has_audio === true || m.container?.includes('audio'))
      )
      const photoItem = mediaArray.find(
        (m) => m.type === 'photo' && (m.has_photo === true || m.container?.includes('image'))
      )

      const videoUrl = videoItem?.url || null
      const audioUrl = audioItem?.url || null
      const imageUrl = photoItem?.url || null

      // Metadata
      const caption = data.caption || ''
      const username = data.username || ''
      const title = caption
        ? caption.slice(0, 80) + (caption.length > 80 ? '...' : '')
        : `${platform} ${type} by ${username || 'user'}`
      const author = username ? `@${username}` : '@user'
      const thumbnail = data.profile_image_uri || imageUrl || ''
      const duration = videoItem?.duration
        ? `${Math.floor(videoItem.duration / 60)}:${String(videoItem.duration % 60).padStart(2, '0')}`
        : '00:00'
      const quality = videoItem?.quality || 'HD'

      // ============================================
      // Type ke hisab se final URL
      // ============================================
      let finalUrl = null
      let ext = 'mp4'

      if (type === 'audio') {
        finalUrl = audioUrl
        ext = 'm4a' // audio/mp4 container
        if (!finalUrl) {
          throw new Error(
            'Is post me audio track nahi mila. Try a different reel with music.'
          )
        }
      } else if (type === 'image') {
        finalUrl = imageUrl
        ext = 'jpg'
        if (!finalUrl) {
          throw new Error(
            'Is post me photo nahi mili. Ye video-only post ho sakti hai.'
          )
        }
      } else {
        // video
        finalUrl = videoUrl
        ext = 'mp4'
        if (!finalUrl) {
          // Agar video nahi hai toh photo fallback
          if (imageUrl) {
            finalUrl = imageUrl
            ext = 'jpg'
          } else {
            throw new Error('Is post me video nahi mili.')
          }
        }
      }

      // Filename
      const safeTitle = (caption || username || 'media')
        .replace(/[^a-z0-9]/gi, '_')
        .slice(0, 40)
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '') || 'media'
      const filename = `${safeTitle}.${ext}`

      setMediaData({
        thumbnail,
        title,
        author,
        duration,
        quality,
        platform,
        type,
        downloadUrl: getDownloadUrl(finalUrl, filename),
        rawVideoUrl: finalUrl,
        // Additional URLs for other tabs
        audioUrl: audioUrl ? getDownloadUrl(audioUrl, `${safeTitle}.m4a`) : null,
        imageUrl: imageUrl,
        filename,
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
