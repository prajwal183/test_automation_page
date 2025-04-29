import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { FormElements } from "@/components/form-elements"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { AdPlacement } from "@/components/ad-placement"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Form Elements | Test Automation Practice",
  description:
    "Practice automating form interactions including inputs, checkboxes, radio buttons, and form validation with Playwright, Selenium, or Cypress.",
  keywords: [
    "form automation testing",
    "input field testing",
    "form validation testing",
    "checkbox testing",
    "radio button testing",
    "form submission testing",
    "Playwright form testing",
    "Selenium form automation",
    "Cypress form examples",
  ],
  openGraph: {
    title: "Form Elements | Test Automation Practice",
    description:
      "Practice automating form interactions including inputs, checkboxes, radio buttons, and form validation.",
  },
  other: {
    "google-adsense-account": "ca-pub-2870280846389596",
  },
}

export default function FormsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Form Elements</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>
                    Practice automating various form elements including input fields, checkboxes, radio buttons,
                    selects, and form validation. These examples cover common form patterns you'll encounter in
                    real-world applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AdPlacement type="horizontal" id="forms-top-ad" className="mb-8" />
                  <FormElements />
                  <AdPlacement type="horizontal" id="forms-bottom-ad" className="mt-8" />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <AdPlacement type="vertical" id="forms-sidebar-ad" />

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Testing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-1">Form Validation</h4>
                      <p className="text-muted-foreground">
                        Test both valid and invalid inputs to ensure proper validation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Error Messages</h4>
                      <p className="text-muted-foreground">
                        Verify that appropriate error messages appear for invalid inputs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Form Submission</h4>
                      <p className="text-muted-foreground">
                        Check that the form submits correctly with valid data and prevents submission with invalid data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Reset Functionality</h4>
                      <p className="text-muted-foreground">
                        Verify that the reset button clears all form fields properly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Related Practice Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/authentication" className="text-primary hover:underline">
                        Authentication Forms
                      </Link>
                    </li>
                    <li>
                      <Link href="/dynamic-elements" className="text-primary hover:underline">
                        Dynamic Form Elements
                      </Link>
                    </li>
                    <li>
                      <Link href="/advanced-interactions" className="text-primary hover:underline">
                        Advanced Form Interactions
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <PageFooter />

      {/* Structured data for SEO */}
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Form Elements | Test Automation Practice",
            "description": "Practice automating form interactions including inputs, checkboxes, radio buttons, and form validation with Playwright, Selenium, or Cypress.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Test Automation Practice",
              "url": "https://test-automation-practice.vercel.app/"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://test-automation-practice.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Form Elements",
                  "item": "https://test-automation-practice.vercel.app/forms"
                }
              ]
            }
          }
        `}
      </Script>
    </div>
  )
}
