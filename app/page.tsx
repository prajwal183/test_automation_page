import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { HeroSection } from "@/components/hero-section"
import { FrameworkLogos } from "@/components/framework-logos"
import { FeaturesSection } from "@/components/features-section"
import { Testimonials } from "@/components/testimonials"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Script from "next/script"
import { AdFrame } from "@/components/ad-frame"
import { BannerAdFrame } from "@/components/banner-ad-frame"

export const metadata: Metadata = {}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1 w-full">
        <HeroSection />

        <FrameworkLogos />

        {/* Ad Frame between sections */}
        <div className="container mx-auto py-8 flex justify-center">
          <AdFrame />
        </div>

        {/* Banner Ad before Features Section */}
        <div className="container mx-auto mb-8 flex justify-center">
          <BannerAdFrame />
        </div>

        <FeaturesSection />

        <Testimonials />

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Master Test Automation?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start practicing with our comprehensive collection of test automation scenarios designed for real-world
              testing challenges.
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link href="#practice-areas">
                Explore Practice Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <PageFooter />

      {/* Structured data for SEO */}
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Test Automation Practice",
            "url": "https://test-automation-practice.vercel.app/",
            "description": "A comprehensive collection of web elements to practice test automation skills with Playwright, Selenium, Cypress, and other testing frameworks.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://test-automation-practice.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
    </div>
  )
}
