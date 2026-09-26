import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://${import.meta.env.VITE_RAPIDAPI_HOST}`,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
  },
})

export const fetchMedia = async (url, type = 'video') => {
  const { data } = await apiClient.get('/download', {
    params: { url, type },
  })
  return data
}
