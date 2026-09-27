import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  // ============================================
  // Deep search: har nested object/array me dhundo
  // ============================================
  const deepFindUrl = (obj, keys, depth = 0) => {
    if (!obj || depth > 5) return null

    if (typeof obj === 'string') {
      // Agar string URL lagti hai toh return
      if (obj.startsWith('http') && /\.(mp4|jpg|jpeg|png|mp3|webm|m4a)/i.test(obj)) {
        return obj
      }
      return null
    }

    if (Array.isArray(obj)) {
      for (const item of obj) {
        const found = deepFindUrl(item, keys, depth + 1)
        if (found) return found
      }
      return null
    }

    if (typeof obj === 'object') {
      // Pehle direct keys check karo
      for (const key of keys) {
        if (obj[key] && typeof obj[key] === 'string' && obj[key].startsWith('http')) {
          return obj[key]
        }
      }
      // Phir nested objects me dhundo
      for (const k of Object.keys(obj)) {
        const found = deepFindUrl(obj[k], keys, depth + 1)
        if (found) return found
      }
    }

    return null
  }

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

      // ============================================
      // DEBUG: Full response console me print karo
      // ============================================
      console.log('=== FULL API RESPONSE ===')
      console.log(JSON.stringify(data, null, 2))
      console.log('=== END ===')

      // Agar API ne error diya
      if (data?.error || data?.success === false || data?.status === 'error') {
        throw new Error(data.error || data.message || 'API returned an error')
      }

      // ============================================
      // Video URL — deep search with many keys
      // ============================================
      const videoKeys = [
        'video_url', 'videoUrl', 'video', 'download_url', 'downloadUrl',
        'download', 'url', 'link', 'src', 'source', 'media_url',
        'play_url', 'playUrl', 'hd', 'sd', 'hd_url', 'sd_url',
        'mp4', 'mp4_url', 'video_link', 'contentUrl', 'content_url',
        'playable_url', 'file', 'file_url',
      ]

      // ============================================
      // Image URL keys
      // ============================================
      const imageKeys = [
        'image_url', 'imageUrl', 'image', 'thumbnail', 'thumb',
        'cover', 'preview', 'display_url', 'displayUrl', 'picture',
        'poster', 'icon',
      ]

      // ============================================
      // Audio URL keys
      // ============================================
      const audioKeys = [
        'audio_url', 'audioUrl', 'audio', 'music', 'music_url',
        'sound', 'sound_url', 'mp3', 'mp3_url',
      ]

      // Video URL dhundo
      let videoUrl = deepFindUrl(data, videoKeys)
      let imageUrl = deepFindUrl(data, imageKeys)
      let audioUrl = deepFindUrl(data, audioKeys)

      // Agar video nahi mila, image me se try karo
      if (!videoUrl && imageUrl) {
        // maybe it's an image post
        videoUrl = null
      }

      console.log('Parsed URLs:', { videoUrl, audioUrl, imageUrl })

      // ============================================
      // Metadata extract karo (best effort)
      // ============================================
      const meta = data?.data || data?.result || data?.media || data || {}
      const title = meta.title || meta.caption || meta.description || meta.desc ||
                    `${platform} ${type}`
      const author = meta.author || meta.username || meta.owner ||
                     meta.user?.username || meta.user?.name || '@user'
      const duration = meta.duration || meta.length || '00:00'
      const thumbnail = meta.thumbnail || meta.thumb || meta.cover ||
                       meta.preview || meta.image || imageUrl || ''

      // ============================================
      // Type ke hisab se final URL
      // ============================================
      let finalUrl = null
      if (type === 'audio') {
        finalUrl = audioUrl || videoUrl
      } else if (type === 'image') {
        finalUrl = imageUrl || thumbnail
      } else {
        finalUrl = videoUrl || imageUrl // fallback to image for video tab
      }

      if (!finalUrl) {
        // ============================================
        // Debug ke liye response structure dikhao
        // ============================================
        console.error('Available keys:', Object.keys(data || {}))
        console.error('Full response:', data)
        throw new Error(
          'Could not extract media URL. Check browser console (F12) for API response structure.'
        )
      }

      // Relative URLs fix
      const fixUrl = (u) =>
        u && u.startsWith('/') ? `https://api-loux.onrender.com${u}` : u
      finalUrl = fixUrl(finalUrl)

      // Filename
      const ext = type === 'audio' ? 'mp3' : type === 'image' ? 'jpg' : 'mp4'
      const safeTitle = String(title).replace(/[^a-z0-9]/gi, '_').slice(0, 40) || 'media'
      const filename = `${safeTitle}.${ext}`

      setMediaData({
        thumbnail,
        title,
        author,
        duration,
        platform,
        type,
        downloadUrl: getDownloadUrl(finalUrl, filename),
        rawVideoUrl: finalUrl,
        audioUrl: audioUrl ? getDownloadUrl(fixUrl(audioUrl), `${safeTitle}.mp3`) : null,
        imageUrl: imageUrl || thumbnail || null,
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
