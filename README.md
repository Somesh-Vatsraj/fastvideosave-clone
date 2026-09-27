# Fastvideosave.net Clone 🎬

A modern, fast, and fully-featured Instagram Reels, Video, Photo & Audio downloader built with **React + Vite + Tailwind CSS**.

---
<img width="1280" height="5361" alt="https-fastvideosave-clone someshsoftwareengineer-233 workers dev-" src="https://github.com/user-attachments/assets/122c5936-3b0b-4f7a-b0a1-2fc8103cf6dd" />

## ✨ Features

### Core Functionality
- ⚡ Download Instagram Reels without watermark
- 🎥 Video Downloader — MP4 HD quality
- 🎵 Audio Downloader — Extract MP3/M4A audio
- 📸 Photo Downloader — HD photos
- 📖 Story Downloader — Save Instagram stories
- 👤 Profile Downloader — Profile pictures in full HD
- 📘 Facebook Video Downloader

### User Experience
- 🎨 Modern glassmorphism UI
- 🌈 Indigo → Purple → Pink gradients
- ⚡ Auto-submit on paste
- 📱 Mobile-first responsive
- ⏳ Animated loading states
- 🎯 Tab-specific download

### Technical
- 🚀 Vite for lightning-fast builds
- ⚛️ React 18 with hooks
- 🎨 Tailwind CSS 3
- 🛣️ React Router 7
- 🔍 React Helmet Async for SEO
- 🎯 Lucide React icons
- 📦 Axios for API calls

### SEO & Monetization
- ✅ Per-page meta tags
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Sitemap.xml + robots.txt
- ✅ Google AdSense integration

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18.3.1 |
| Build Tool | Vite 6.0.5 |
| Styling | Tailwind CSS 3.4.17 |
| Routing | React Router DOM 7.1.1 |
| SEO | React Helmet Async 2.0.5 |
| Icons | Lucide React 0.468.0 |
| HTTP Client | Axios 1.7.9 |
| Font | Be Vietnam Pro |

---

## 📁 Project Structure

```
fastvideosave-clone/
├── public/
│   ├── fonts/                      # Be Vietnam Pro woff2 files
│   ├── images/                     # Card images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ResultCard.jsx
│   │   ├── Steps.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── InfoCards.jsx
│   │   ├── WhyUse.jsx
│   │   ├── FAQ.jsx
│   │   ├── DMCA.jsx
│   │   ├── SEO.jsx
│   │   └── AdBanner.jsx
│   ├── config/
│   │   ├── site.js
│   │   └── api.js
│   ├── data/
│   │   └── tools.js
│   ├── hooks/
│   │   └── useDownloader.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ToolPage.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm / bun / yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🔑 Environment Variables

Create `.env` in root:

```env
VITE_API_BASE=
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
VITE_GA_ID=G-XXXXXXXXXX
```

---

## ⚙️ Configuration

### Site Name Change

Edit only **one file**: `src/config/site.js`

```js
export const SITE = {
  brandPart1: 'Fast',
  brandPart2: 'videosave',
  brandPart3: '.net',
  domain: 'Fastvideosave.net',
  name: 'Fastvideosave',
  url: 'https://fastvideosave.net',
  email: 'support@fastvideosave.net',
  year: new Date().getFullYear(),
}
```

Change any value — Header, Footer, FAQ, DMCA, SEO sab automatically update.

### Fonts

Download **Be Vietnam Pro** from [Google Fonts](https://fonts.google.com/specimen/Be+Vietnam+Pro) and place in `public/fonts/`:

- `be-vietnam-pro-300.woff2`
- `be-vietnam-pro-400.woff2`
- `be-vietnam-pro-500.woff2`
- `be-vietnam-pro-600.woff2`
- `be-vietnam-pro-700.woff2`

### Images

Add to `public/images/`:
- `how-instagram-downloader-works.jpg` (500x500)
- `instagram-reels-video-downloader.jpg` (400x250)
- `instagram-content-formats.jpg` (400x250)

---

## 🔌 API Integration

Uses **api-loux.onrender.com** by default.

### Endpoints

**1. Fetch Video Info**
```
GET /index.php?url={instagram_url}
```

**Response:**
```json
{
  "success": true,
  "type": "video",
  "username": "username",
  "caption": "Caption text...",
  "profile_image_uri": "https://...",
  "media": [
    { "type": "photo", "url": "https://...jpg" },
    { "type": "video", "url": "https://...mp4", "quality": "720p" },
    { "type": "audio", "url": "https://...m4a" }
  ]
}
```

**2. Download (Proxy)**
```
GET /download.php?url={video_url}&filename={name}.mp4
```

### Change API

Edit `src/config/api.js`:

```js
const API_BASE = 'https://your-api.com'
```

---

## 📦 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

Output in `dist/` folder.

### Preview Build
```bash
npm run preview
```

### Deploy Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Cloudflare Pages
1. Push to GitHub
2. Connect at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Build command: `npm run build`
4. Output dir: `dist`

#### Static Hosting (Apache)

Add `.htaccess` in `dist/`:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔍 SEO Setup

### Per-Page Meta Tags

```jsx
<SEO
  title="Instagram Reels Downloader"
  description="Download reels without watermark..."
  canonical="https://yoursite.com/"
/>
```

### Sitemap

Edit `public/sitemap.xml` with your domain.

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

### Submit to Search Engines
1. [Google Search Console](https://search.google.com/search-console)
2. [Bing Webmaster](https://www.bing.com/webmasters)

---

## 💰 AdSense Setup

### 1. Get AdSense Account
Sign up at [adsense.google.com](https://adsense.google.com)

### 2. Add Publisher ID

**In `index.html`:**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

**In `src/components/AdBanner.jsx`:**
```jsx
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

### 3. Create Ad Slots
AdSense dashboard → Ads → By ad unit → Create.

Update slot IDs in `Home.jsx` / `ToolPage.jsx`.

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  brand: {
    500: '#6366f1',
    600: '#4f46e5',
  },
}
```

### Change Background

Edit `src/index.css`:

```css
body {
  background-image: radial-gradient(circle at 50% -20%, #e0e7ff, #f8fafc 40%, #fff);
}
```

### Add New Tool

1. Add to `src/data/tools.js`
2. Add route in `src/App.jsx`
3. Update `getToolByType` function

---

## 🐛 Troubleshooting

### Build Errors

**`text-brand-900` class does not exist**
- Add full color palette in `tailwind.config.js`

**JSX in `.js` file**
- Rename file to `.jsx`

**Fonts not resolving**
- Ensure `.woff2` files are in `public/fonts/`

### Runtime Errors

**"No video found in this URL"**
- Check console for `API Response: {...}`
- Update parser in `useDownloader.js`

**CORS errors**
- API server must send `Access-Control-Allow-Origin: *`

**Auto-download blocked**
- Browser may block multiple downloads
- User must allow in browser settings

**Paste button not working**
- Requires HTTPS or localhost
- Clipboard API permission needed

### Performance

**Slow API response**
- Render free tier has cold starts (50s+)
- Upgrade plan or use different API

---

## 📄 License

MIT License.

---

## 🙏 Credits

- API: ()
- Icons: [Lucide](https://lucide.dev/)
- Font: [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro)
- Framework: [React](https://react.dev/) + [Vite](https://vitejs.dev/)

---

## ⚠️ Disclaimer

This project is **not affiliated** with Instagram™, Facebook™, or Meta™. We do not host or store any content. All trademarks belong to their respective owners.

**Use this tool responsibly:**
- Only download content you own or have permission to download
- Do not use for copyrighted or restricted content
- Comply with DMCA policies and local laws
- Downloaded content cannot be used for commercial purposes

---

## 📞 Support

- 📞 Telegram: (https://t.me/vatsrajtech)
- 💬 Contact: /contact

---

## ⭐ Show Your Support

If this project helped you, give it a ⭐ on GitHub!

---

**Made with ❤️ using React + Tailwind CSS**
