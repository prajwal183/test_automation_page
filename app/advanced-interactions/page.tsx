import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { AdvancedInteractions } from "@/components/advanced-interactions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-2870280846389596",
  },
}

export default function AdvancedInteractionsPage() {
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
            <h1 className="text-2xl font-bold">Advanced Interactions</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Interactions</CardTitle>
              <CardDescription>
                Practice testing complex interactions like hovering, double-clicking, date picking, and various dropdown
                types.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AdvancedInteractions />
            </CardContent>
          </Card>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
