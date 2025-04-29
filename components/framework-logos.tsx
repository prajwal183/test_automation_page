export function FrameworkLogos() {
  return (
    <div className="py-12 bg-secondary/30">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          PERFECT FOR PRACTICING WITH POPULAR TESTING FRAMEWORKS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <img src="/placeholder.svg?height=40&width=160" alt="Playwright" className="h-10 w-40 object-contain" />
            <span className="text-sm font-medium mt-2 block">Playwright</span>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg?height=40&width=160" alt="Selenium" className="h-10 w-40 object-contain" />
            <span className="text-sm font-medium mt-2 block">Selenium</span>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg?height=40&width=160" alt="Cypress" className="h-10 w-40 object-contain" />
            <span className="text-sm font-medium mt-2 block">Cypress</span>
          </div>
          <div className="text-center">
            <img src="/placeholder.svg?height=40&width=160" alt="WebdriverIO" className="h-10 w-40 object-contain" />
            <span className="text-sm font-medium mt-2 block">WebdriverIO</span>
          </div>
        </div>
      </div>
    </div>
  )
}
