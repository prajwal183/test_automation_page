"use client"

import { useEffect, useRef } from "react"

interface AdFrameProps {
  className?: string
}

export function AdFrame({ className = "" }: AdFrameProps) {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create script elements
    const scriptOptions = document.createElement("script")
    scriptOptions.type = "text/javascript"
    scriptOptions.text = `
      atOptions = {
        'key' : '9846b19f60c18f8baec9cdd4fa5c87e7',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `

    const scriptInvoke = document.createElement("script")
    scriptInvoke.type = "text/javascript"
    scriptInvoke.src = "//www.highperformanceformat.com/9846b19f60c18f8baec9cdd4fa5c87e7/invoke.js"

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

  return <div ref={adContainerRef} className={`ad-container ${className}`} />
}
