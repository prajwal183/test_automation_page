"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, any>) => void
    dataLayer: any[]
  }
}

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (pathname) {
      const url = searchParams?.size ? `${pathname}?${searchParams}` : pathname

      // Track page view
      window.gtag?.("event", "page_view", {
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  // Function to track events
  const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams)
    }
  }

  return { trackEvent }
}

export const trackEvent = (eventParams: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventParams.action, eventParams)
  }
}
