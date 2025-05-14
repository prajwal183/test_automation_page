"use client"

import Link from "next/link"
import { useAnalytics } from "@/hooks/use-analytics"
import type { ReactNode } from "react"

interface TrackedLinkProps {
  href: string
  children: ReactNode
  eventName: string
  eventData?: Record<string, any>
  className?: string
  [key: string]: any
}

export function TrackedLink({ href, children, eventName, eventData = {}, className, ...props }: TrackedLinkProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent(eventName, {
      destination: href,
      ...eventData,
    })
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
