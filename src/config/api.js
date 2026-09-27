import axios from 'axios'

const API_BASE = 'https://api-loux.onrender.com'

// ============================================
// MAIN API: Video/Reel info fetch karta hai
// ============================================
export const fetchVideoInfo = async (instagramUrl, retries = 2) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { data } = await axios.get(`${API_BASE}/index.php`, {
        params: { url: instagramUrl },
        timeout: 45000, // 45s (Render cold start ke liye)
      })
      return data
    } catch (err) {
      console.warn(`Attempt ${attempt} failed:`, err.message)

      // Agar last attempt hai toh throw karo
      if (attempt === retries) {
        throw new Error(
          err.response?.data?.message ||
            err.message ||
            'Failed to fetch video info. Please try again.'
        )
      }

      // 2 second wait karke retry karo
      await new Promise((r) => setTimeout(r, 2000))
    }
  }
}

// ============================================
// DOWNLOAD API: Direct video download link
// ============================================
export const getDownloadUrl = (videoUrl) => {
  return `${API_BASE}/download.php?url=${encodeURIComponent(videoUrl)}`
}

// Legacy (backwards compatible)
export const fetchMedia = fetchVideoInfo
