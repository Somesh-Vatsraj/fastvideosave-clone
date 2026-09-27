import { useState } from 'react'
import { fetchVideoInfo, getDownloadUrl } from '../config/api'

// ============================================
// Detect platform from URL
// ============================================
const detectPlatform = (url) => {
  try {
    const host = new URL(url).hostname.toLowerCase()
    if (host.includes('instagram')) return 'Instagram'
    if (host.includes('facebook') || host.includes('fb.watch')) return 'Facebook'
    return 'Unknown'
  } catch {
    return 'Unknown'
  }
}

// ============================================
// Pick highest quality video from media array
// ============================================
const pickBestVideo = (mediaList) => {
  const videos = mediaList.filter((m) => m.type === 'video' && m.url)
  if (!videos.length) return null

  // Sort by quality (720p > 480p > 360p > others)
  const qualityScore = (q) => {
    if (!q) return 0
    const match = q.match(/(\d+)/)
    return match ? parseInt(match[1], 10) : 0
  }

  return videos.sort((a, b) => qualityScore(b.quality) - qualityScore(a.quality))[0]
}

export default function useDownloader(platform = 'Instagram', type = 'video') {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mediaData, setMediaData] = useState(null)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e?.preventDefault?.()
    setError('')
    setMediaData(null)

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

      console.log('========== API RESPONSE ==========')
      console.log(data)
      console.log('==================================')

      if (!data?.success) {
        throw new Error(data?.message || 'API returned an error')
      }

      const detectedPlatform = data.platform
        ? data.platform.charAt(0).toUpperCase() + data.platform.slice(1)
        : detectPlatform(targetUrl)

      const mediaList = data.media || []

      const bestVideo = pickBestVideo(mediaList)
      const audioItem = mediaList.find((m) => m.type === 'audio' && m.url)
      const photoItem = mediaList.find((m) => m.type === 'photo' && m.has_photo)

      // ============================================
      // Main download URL based on requested type
      // ============================================
      let mainUrl = null
      let downloadType = 'video'

      if (type === 'audio' && audioItem) {
        mainUrl = audioItem.url
        downloadType = 'audio'
      } else if (type === 'image' && photoItem) {
        mainUrl = photoItem.url
        downloadType = 'image'
      } else if (bestVideo) {
        mainUrl = bestVideo.url
        downloadType = 'video'
      } else if (audioItem) {
        mainUrl = audioItem.url
        downloadType = 'audio'
      } else if (photoItem) {
        mainUrl = photoItem.url
        downloadType = 'image'
      }

      if (!mainUrl) {
        throw new Error('No downloadable media found in this URL.')
      }

      // Thumbnail
      const thumbnail =
        photoItem?.url ||
        data.profile_image_uri ||
        ''

      // Title
      const title =
        data.caption?.trim() ||
        data.description?.trim() ||
        `${detectedPlatform} ${downloadType}`

      // Author
      const author = data.username ? `@${data.username}` : '@user'

      // Duration from video item
      let duration = ''
      if (bestVideo?.duration) {
        const sec = bestVideo.duration
        duration = `${Math.floor(sec / 60)
          .toString()
          .padStart(2, '0')}:${(sec % 60).toString().padStart(2, '0')}`
      } else if (data.duration) {
        duration = data.duration
      }

      setMediaData({
        thumbnail,
        title,
        author,
        duration,
        platform: detectedPlatform,
        type: downloadType,
        downloadUrl: getDownloadUrl(mainUrl),
        rawVideoUrl: mainUrl,
        audioUrl: audioItem?.url ? getDownloadUrl(audioItem.url) : null,
        audioRawUrl: audioItem?.url || null,
        videoQuality: bestVideo?.quality || null,
        profileImage: data.profile_image_uri,
        mediaItems: mediaList,
        videoCount: mediaList.filter((m) => m.type === 'video').length,
      })
    } catch (err) {
      console.error('❌ Download error:', err)
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
