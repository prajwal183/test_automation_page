import Link from "next/link"
import { Github, Twitter, Linkedin, Code, Mail } from "lucide-react"

export function PageFooter() {
  return (
    <footer className="border-t py-12 bg-secondary/30 w-full">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Code className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">Test Automation Practice</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive platform for QA engineers and test automation specialists to practice and improve their
              testing skills with real-world examples.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/prajwal183/test_automation_page"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:contact@testautomationpractice.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Practice Pages</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/forms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Form Elements & Validation
                </Link>
              </li>
              <li>
                <Link
                  href="/dynamic-elements"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dynamic & Async Elements
                </Link>
              </li>
              <li>
                <Link href="/tables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tables, Sorting & Filtering
                </Link>
              </li>
              <li>
                <Link href="/alerts-modals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Alerts, Modals & Dialogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Advanced Testing</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/drag-drop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Drag & Drop Interactions
                </Link>
              </li>
              <li>
                <Link href="/iframes" className="text-muted-foreground hover:text-foreground transition-colors">
                  iFrames & Embedded Content
                </Link>
              </li>
              <li>
                <Link href="/authentication" className="text-muted-foreground hover:text-foreground transition-colors">
                  Authentication Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/advanced-interactions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Complex UI Interactions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sitemap.xml" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/prajwal183/test_automation_page"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Test Automation Practice. All rights reserved.</p>
          <p className="mt-2">
            Built for the test automation community to practice and improve testing skills with real-world examples.
          </p>
        </div>
      </div>
    </footer>
  )
}
