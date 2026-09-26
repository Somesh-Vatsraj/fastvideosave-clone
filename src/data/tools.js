export const tools = [
  {
    slug: 'reels-downloader',
    title: 'Reels Downloader',
    heading: 'Instagram <gradient>Reels</gradient> Download',
    subtitle: 'Fastest tool to download reels video: No Logo | High Quality | unlimited',
    placeholder: 'Paste Link Here...',
    platform: 'Instagram',
    type: 'video',
    description: 'Fastvideosave.net is an online free and fast tool which helps you to download instagram reels video or to save reels video to your device. You can save any reels videos to your phone or computer and view them offline anytime.',
    steps: ['Copy Link of the video.', 'Paste Link into input box.', 'Tap "Download Video" button.'],
  },
  {
    slug: 'video-downloader',
    title: 'Video Downloader',
    heading: 'Instagram <gradient>Video</gradient> Download',
    subtitle: 'Download Instagram videos: No Watermark | HD Quality | Free',
    placeholder: 'Paste Video Link Here...',
    platform: 'Instagram',
    type: 'video',
    description: 'Download any Instagram video in high quality without watermark. Fast, free and unlimited downloads on all devices.',
    steps: ['Copy video link from Instagram.', 'Paste into the input box above.', 'Click "Download Video" to save.'],
  },
  {
    slug: 'photo-downloader',
    title: 'Photo Downloader',
    heading: 'Instagram <gradient>Photo</gradient> Download',
    subtitle: 'Download Instagram photos in original quality | HD | Unlimited',
    placeholder: 'Paste Photo Link Here...',
    platform: 'Instagram',
    type: 'image',
    description: 'Save Instagram photos in their original quality. No watermark, no login required. Works on mobile and desktop.',
    steps: ['Copy the photo link.', 'Paste into input box.', 'Tap "Download Photo" to save.'],
  },
  {
    slug: 'audio-downloader',
    title: 'Audio Downloader',
    heading: 'Instagram <gradient>Audio</gradient> Download',
    subtitle: 'Extract MP3 audio from Instagram reels & videos | High Quality',
    placeholder: 'Paste Video Link Here...',
    platform: 'Instagram',
    type: 'audio',
    description: 'Extract audio from Instagram reels and videos in MP3 format. High quality, fast, and completely free.',
    steps: ['Copy reel or video link.', 'Paste link into input box.', 'Tap "Download Audio" to save MP3.'],
  },
  {
    slug: 'story-downloader',
    title: 'Story Downloader',
    heading: 'Instagram <gradient>Story</gradient> Download',
    subtitle: 'Download Instagram stories anonymously | HD | Free',
    placeholder: 'Paste Story Link Here...',
    platform: 'Instagram',
    type: 'video',
    description: 'Download Instagram stories anonymously in HD quality. No one will know you viewed or downloaded them.',
    steps: ['Copy the story link.', 'Paste into the input box.', 'Click "Download Story" to save.'],
  },
  {
    slug: 'profile-downloader',
    title: 'Profile Downloader',
    heading: 'Instagram <gradient>Profile</gradient> Download',
    subtitle: 'Download Instagram profile picture in full HD quality',
    placeholder: 'Paste Profile Link Here...',
    platform: 'Instagram',
    type: 'image',
    description: 'Download any Instagram profile picture in full HD resolution. Free, fast and no login required.',
    steps: ['Copy profile URL.', 'Paste into input box.', 'Tap "Download" to save.'],
  },
  {
    slug: 'facebook-downloader',
    title: 'Facebook Downloader',
    heading: 'Facebook <gradient>Video</gradient> Download',
    subtitle: 'Download Facebook videos in HD | No Watermark | Free',
    placeholder: 'Paste Facebook Link Here...',
    platform: 'Facebook',
    type: 'video',
    description: 'Download Facebook videos in HD quality without watermark. Works on mobile, tablet and desktop.',
    steps: ['Copy Facebook video URL.', 'Paste into the input box.', 'Tap "Download Video" to save.'],
  },
]

export const getToolByType = (type) => {
  if (type === 'video') return tools[1]
  if (type === 'photo') return tools[2]
  if (type === 'audio') return tools[3]
  if (type === 'story') return tools[4]
  if (type === 'profile') return tools[5]
  if (type === 'facebook') return tools[6]
  return tools[0]
}
