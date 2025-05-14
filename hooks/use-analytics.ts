"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// Define types for our events
type EventNames = "click_cta" | "page_view" | "form_submit" | "navigation" | "feature_interaction" | "ad_click"

type EventProps = {
  action: EventNames
  category: string
  label?: string
  value?: number
  [key: string]: any
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (command: "event" | "config" | "set" | "js", action: any, params?: any) => void
  }
}

// Track page views
export function usePageViewTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = searchParams?.toString() ? `${pathname}?${searchParams?.toString()}` : pathname

      // Track page view
      window.gtag?.("event", "page_view", {
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])
}

// Track events
export function trackEvent({ action, category, label, value, ...rest }: EventProps) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    })
  }
}

// Custom hook for components to use
export function useAnalytics() {
  usePageViewTracking()

  return { trackEvent }
}
