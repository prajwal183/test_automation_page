import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Test Automation Practice",
  description: "Terms of service for the Test Automation Practice website.",
  other: {
    "google-adsense-account": "ca-pub-2870280846389596",
  },
}

export default function TermsOfServicePage() {
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
            <h1 className="text-2xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Test Automation Practice website. By
              accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2>Use of Our Website</h2>
            <p>
              The Test Automation Practice website is designed for educational and practice purposes related to test
              automation. You may use our website for learning and practicing test automation techniques.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The content, features, and functionality of our website are owned by us and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>

            <h2>User Contributions</h2>
            <p>
              Any data you input on our website as part of the practice exercises is not stored permanently and is only
              used for demonstration purposes.
            </p>

            <h2>Third-Party Links and Content</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of
              any third-party websites or services.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or
              consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of our website.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update our Terms from time to time. We will notify you of any changes by posting the new Terms on
              this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us through our GitHub repository.</p>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
