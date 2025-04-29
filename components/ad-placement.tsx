import { cn } from "@/lib/utils"

type AdPlacementProps = {
  type: "horizontal" | "vertical" | "square"
  className?: string
  id?: string
}

export function AdPlacement({ type, className, id }: AdPlacementProps) {
  const adClasses = {
    horizontal: "ad-container-horizontal",
    vertical: "ad-container-vertical",
    square: "ad-container-square",
  }

  return (
    <div id={id} className={cn(adClasses[type], className)} data-ad-slot="true">
      <div className="text-sm text-muted-foreground">Advertisement</div>
      {/* Google AdSense will automatically insert ads here */}
    </div>
  )
}
