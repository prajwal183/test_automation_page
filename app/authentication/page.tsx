import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { Authentication } from "@/components/authentication"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"
import { BannerAdFrame } from "@/components/banner-ad-frame"

export const metadata: Metadata = {}

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader />
      <main className="flex-1">
        <div className="container mx-auto py-6 md:py-8">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Authentication Testing</h1>
          </div>

          {/* Banner Ad before the main content */}
          <div className="flex justify-center mb-6">
            <BannerAdFrame />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Authentication Testing</CardTitle>
              <CardDescription>
                Practice testing sign-in, sign-up, and logout functionality. Test form validation and authentication
                flows.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Authentication />
            </CardContent>
          </Card>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
