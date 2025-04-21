import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Test Automation Practice",
  description: "Privacy policy for the Test Automation Practice website.",
  other: {
    "google-adsense-account": "ca-pub-2870280846389596",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <div className="container py-6 md:py-8">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how Test Automation Practice ("we", "us", or "our") collects, uses, and
              shares your information when you use our website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us when using our practice forms and authentication
              examples. This is for demonstration purposes only and is not stored or processed beyond the current
              session.
            </p>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. These are used primarily for demonstration purposes in our test automation examples.
            </p>

            <h2>Google AdSense</h2>
            <p>
              We use Google AdSense to show advertisements on our website. Google AdSense uses cookies to serve ads
              based on your prior visits to our website or other websites. Google's use of advertising cookies enables
              it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our GitHub repository.</p>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
