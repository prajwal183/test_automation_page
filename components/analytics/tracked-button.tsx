"use client"

import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/use-analytics"
import type { ReactNode } from "react"

interface TrackedButtonProps {
  children: ReactNode
  eventName: string
  eventData?: Record<string, any>
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  [key: string]: any
}

export function TrackedButton({
  children,
  eventName,
  eventData = {},
  className,
  variant = "default",
  size = "default",
  onClick,
  ...props
}: TrackedButtonProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent(eventName, eventData)
    if (onClick) onClick()
  }

  return (
    <Button className={className} variant={variant} size={size} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
