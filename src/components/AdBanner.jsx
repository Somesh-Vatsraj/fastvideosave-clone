import { useEffect, useRef } from 'react'

export default function AdBanner({ slot = '1234567890', className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    try { window.adsbygoogle && ref.current && window.adsbygoogle.push({}) } catch {}
  }, [])
  return (
    <div className={className}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
