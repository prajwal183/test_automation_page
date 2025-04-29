import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2, Braces, Workflow } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              The Ultimate Test Automation Playground
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Master <span className="gradient-text">Test Automation</span> With Real-World Examples
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A comprehensive collection of interactive web elements designed specifically for QA engineers and test
              automation specialists to practice and perfect their skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link href="#practice-areas">
                  Start Practicing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <a href="https://github.com/prajwal183/test_automation_page" target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg"></div>
            <div className="relative grid grid-cols-2 gap-4 p-4">
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-md">
                  <Code2 className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Form Testing</h3>
                  <p className="text-sm text-muted-foreground">Validate inputs, handle submissions</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-md">
                  <Workflow className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Dynamic Elements</h3>
                  <p className="text-sm text-muted-foreground">Test loading states and async content</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg bg-white p-4 shadow-md">
                  <Braces className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Advanced Interactions</h3>
                  <p className="text-sm text-muted-foreground">Drag & drop, hover states, and more</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-md">
                  <Code2 className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Authentication</h3>
                  <p className="text-sm text-muted-foreground">Test login flows and user sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
