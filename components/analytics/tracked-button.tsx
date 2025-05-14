"use client"

import { Button } from "@/components/ui/button"
import { trackEvent } from "@/hooks/use-analytics"
import type { ButtonProps } from "@radix-ui/react-button"
import type { ReactNode } from "react"

interface TrackedButtonProps extends ButtonProps {
  children: ReactNode
  category: string
  label: string
  onClick?: () => void
}

export function TrackedButton({ children, category, label, onClick, ...rest }: TrackedButtonProps) {
  const handleClick = () => {
    trackEvent({
      action: "click_cta",
      category,
      label,
    })

    if (onClick) {
      onClick()
    }
  }

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  )
}
