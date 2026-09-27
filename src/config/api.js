import axios from 'axios'

const API_BASE = 'https://api-loux.onrender.com'

// ============================================
// MAIN API: Video info fetch
// ============================================
export const fetchVideoInfo = async (instagramUrl) => {
  try {
    const { data } = await axios.get(`${API_BASE}/index.php`, {
      params: { url: instagramUrl },
      timeout: 30000,
    })
    return data
  } catch (err) {
    console.error('API error:', err)
    throw new Error(err.response?.data?.message || 'Failed to fetch video info')
  }
}

// ============================================
// DOWNLOAD URL with FILENAME
// Browser filename Content-Disposition header se leta hai
// ============================================
export const getDownloadUrl = (videoUrl, filename = 'video.mp4') => {
  return `${API_BASE}/download.php?url=${encodeURIComponent(videoUrl)}&filename=${encodeURIComponent(filename)}`
}

// Legacy alias
export const fetchMedia = fetchVideoInfo
