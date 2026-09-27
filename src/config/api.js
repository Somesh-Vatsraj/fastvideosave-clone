import axios from 'axios'

const API_BASE = 'https://api-loux.onrender.com'

// ============================================
// MAIN API: Video/Reel info fetch karta hai
// Usage: fetchVideoInfo('https://www.instagram.com/reel/...')
// ============================================
export const fetchVideoInfo = async (instagramUrl) => {
  try {
    const { data } = await axios.get(`${API_BASE}/index.php`, {
      params: { url: instagramUrl },
      timeout: 30000, // 30 seconds (Render free tier slow ho sakta hai)
    })
    return data
  } catch (err) {
    console.error('API error:', err)
    throw new Error(err.response?.data?.message || 'Failed to fetch video info')
  }
}

// ============================================
// DOWNLOAD API: Direct video download link
// Usage: getDownloadUrl('https://v1.pinimg.com/...')
// ============================================
export const getDownloadUrl = (videoUrl) => {
  // Direct URL return karta hai — browser handle karega
  return `${API_BASE}/download.php?url=${encodeURIComponent(videoUrl)}`
}

// Legacy (purana RapidAPI — optional rakh sakte ho)
export const fetchMedia = fetchVideoInfo
