"use client"

import { useEffect, useRef } from "react"
import { trackEvent } from "@/hooks/use-analytics"

interface AdFrameProps {
  className?: string
}

export function AdFrame({ className = "" }: AdFrameProps) {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Track ad impression
    trackEvent({
      action: "ad_impression",
      category: "ads",
      label: "ad_frame",
    })

    // Create ad script
    const script = document.createElement("script")
    script.src = "//www.highperformanceformat.com/d2bec6cb55b829b5b3961c1c54ab1dbf/invoke.js"
    script.async = true

    // Create options script
    const optionsScript = document.createElement("script")
    optionsScript.type = "text/javascript"
    optionsScript.text = `
      atOptions = {
        'key' : 'd2bec6cb55b829b5b3961c1c54ab1dbf',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `

    // Add scripts to container
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(optionsScript)
      adContainerRef.current.appendChild(script)
    }

    // Cleanup
    return () => {
      if (adContainerRef.current) {
        if (optionsScript.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(optionsScript)
        }
        if (script.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(script)
        }
      }
    }
  }, [])

  return (
    <div
      ref={adContainerRef}
      className={`ad-container min-h-[50px] min-w-[320px] ${className}`}
      onClick={() => {
        trackEvent({
          action: "ad_click",
          category: "ads",
          label: "ad_frame_click",
        })
      }}
    ></div>
  )
}
