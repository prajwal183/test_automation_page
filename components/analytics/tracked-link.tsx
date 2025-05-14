"use client"

import Link from "next/link"
import { trackEvent } from "@/hooks/use-analytics"
import type { ReactNode } from "react"

interface TrackedLinkProps {
  href: string
  children: ReactNode
  className?: string
  category: string
  label?: string
  onClick?: () => void
  [key: string]: any
}

export function TrackedLink({ href, children, className, category, label, onClick, ...rest }: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent({
      action: "click_cta",
      category,
      label: label || href,
    })

    if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
