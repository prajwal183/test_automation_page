"use client"

import { useEffect, useRef } from "react"

interface BannerAdFrameProps {
  className?: string
}

export function BannerAdFrame({ className = "" }: BannerAdFrameProps) {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create script elements
    const scriptOptions = document.createElement("script")
    scriptOptions.type = "text/javascript"
    scriptOptions.text = `
      atOptions = {
        'key' : 'd2bec6cb55b829b5b3961c1c54ab1dbf',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `

    const scriptInvoke = document.createElement("script")
    scriptInvoke.type = "text/javascript"
    scriptInvoke.src = "//www.highperformanceformat.com/d2bec6cb55b829b5b3961c1c54ab1dbf/invoke.js"

    // Append scripts to the container
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(scriptOptions)
      adContainerRef.current.appendChild(scriptInvoke)
    }

    // Cleanup function
    return () => {
      if (adContainerRef.current) {
        if (scriptOptions.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(scriptOptions)
        }
        if (scriptInvoke.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(scriptInvoke)
        }
      }
    }
  }, [])

  return <div ref={adContainerRef} className={`banner-ad-container ${className}`} />
}
