import Link from "next/link"

export function PageFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Test Automation Practice</h3>
            <p className="text-sm text-muted-foreground">
              Built for test automation practice. Use it to improve your testing skills.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Practice Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/forms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  href="/dynamic-elements"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dynamic Elements
                </Link>
              </li>
              <li>
                <Link href="/tables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tables and Data
                </Link>
              </li>
              <li>
                <Link href="/alerts-modals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Alerts and Modals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">More Practice</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/drag-drop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Drag and Drop
                </Link>
              </li>
              <li>
                <Link href="/iframes" className="text-muted-foreground hover:text-foreground transition-colors">
                  iFrames
                </Link>
              </li>
              <li>
                <Link href="/authentication" className="text-muted-foreground hover:text-foreground transition-colors">
                  Authentication
                </Link>
              </li>
              <li>
                <Link
                  href="/advanced-interactions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Advanced Interactions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
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

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Test Automation Practice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
