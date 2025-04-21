import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Test Automation Practice</span>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <a
            href="https://github.com/your-username/test-automation-practice"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:block"
          >
            GitHub
          </a>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/forms" className="text-sm font-medium transition-colors hover:text-primary">
                Forms
              </Link>
              <Link href="/dynamic-elements" className="text-sm font-medium transition-colors hover:text-primary">
                Dynamic Elements
              </Link>
              <Link href="/tables" className="text-sm font-medium transition-colors hover:text-primary">
                Tables
              </Link>
              <Link href="/alerts-modals" className="text-sm font-medium transition-colors hover:text-primary">
                Alerts & Modals
              </Link>
              <Link href="/drag-drop" className="text-sm font-medium transition-colors hover:text-primary">
                Drag & Drop
              </Link>
              <Link href="/iframes" className="text-sm font-medium transition-colors hover:text-primary">
                iFrames
              </Link>
              <Link href="/authentication" className="text-sm font-medium transition-colors hover:text-primary">
                Authentication
              </Link>
              <Link href="/advanced-interactions" className="text-sm font-medium transition-colors hover:text-primary">
                Advanced Interactions
              </Link>
              <Link
                href="https://github.com/your-username/test-automation-practice"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
