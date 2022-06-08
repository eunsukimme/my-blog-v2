import React from 'react'
import Script from 'next/script'

const ID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID

export default function GoogleAdsense() {
  return (
    <Script
      id="Adsense-id"
      data-ad-client={ID}
      async
      strategy="beforeInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  )
}
