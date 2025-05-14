"use client"

import { Button } from "@/components/ui/button"
import { Menu, Code, Github } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TrackedLink } from "@/components/analytics/tracked-link"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <TrackedLink href="/" className="flex items-center space-x-2" category="navigation" label="home_logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">Test Automation Practice</span>
            <span className="font-bold text-lg sm:hidden">TAP</span>
          </TrackedLink>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <TrackedLink
            href="/forms"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            category="navigation"
            label="forms_nav"
          >
            Forms
          </TrackedLink>
          <TrackedLink
            href="/dynamic-elements"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            category="navigation"
            label="dynamic_elements_nav"
          >
            Dynamic Elements
          </TrackedLink>
          <TrackedLink
            href="/tables"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            category="navigation"
            label="tables_nav"
          >
            Tables
          </TrackedLink>
          <TrackedLink
            href="/advanced-interactions"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            category="navigation"
            label="advanced_nav"
          >
            Advanced
          </TrackedLink>
          <TrackedLink
            href="/authentication"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            category="navigation"
            label="auth_nav"
          >
            Auth
          </TrackedLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/prajwal183/test_automation_page"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "click_cta", {
                  event_category: "external_link",
                  event_label: "github_header",
                })
              }
            }}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "click_cta", {
                      event_category: "navigation",
                      event_label: "mobile_menu_open",
                    })
                  }
                }}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <TrackedLink
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="home_mobile_nav"
                >
                  Home
                </TrackedLink>
                <TrackedLink
                  href="/forms"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="forms_mobile_nav"
                >
                  Forms
                </TrackedLink>
                <TrackedLink
                  href="/dynamic-elements"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="dynamic_elements_mobile_nav"
                >
                  Dynamic Elements
                </TrackedLink>
                <TrackedLink
                  href="/tables"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="tables_mobile_nav"
                >
                  Tables
                </TrackedLink>
                <TrackedLink
                  href="/alerts-modals"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="alerts_modals_mobile_nav"
                >
                  Alerts & Modals
                </TrackedLink>
                <TrackedLink
                  href="/drag-drop"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="drag_drop_mobile_nav"
                >
                  Drag & Drop
                </TrackedLink>
                <TrackedLink
                  href="/iframes"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="iframes_mobile_nav"
                >
                  iFrames
                </TrackedLink>
                <TrackedLink
                  href="/authentication"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="auth_mobile_nav"
                >
                  Authentication
                </TrackedLink>
                <TrackedLink
                  href="/advanced-interactions"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  category="navigation"
                  label="advanced_mobile_nav"
                >
                  Advanced Interactions
                </TrackedLink>
                <a
                  href="https://github.com/prajwal183/test_automation_page"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "click_cta", {
                        event_category: "external_link",
                        event_label: "github_mobile_nav",
                      })
                    }
                  }}
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
