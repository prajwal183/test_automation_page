"use client"

// Define the gtag function globally
declare global {
  interface Window {
    gtag: (command: string, action: any, params?: any) => void
  }
}

// Track a custom event
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams)
  }
}

// Track a page view
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
    })
  }
}

// Track a click on a link or button
export function trackClick(category: string, label: string, value?: number) {
  trackEvent("click", {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Track an ad impression
export function trackAdImpression(adId: string, adPosition: string) {
  trackEvent("ad_impression", {
    ad_id: adId,
    ad_position: adPosition,
  })
}

// Track an ad click
export function trackAdClick(adId: string, adPosition: string) {
  trackEvent("ad_click", {
    ad_id: adId,
    ad_position: adPosition,
  })
}
