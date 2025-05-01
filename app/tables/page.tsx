import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { TableExample } from "@/components/table-example"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"
import { AdFrame } from "@/components/ad-frame"

export const metadata: Metadata = {}

export default function TablesPage() {
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
            <h1 className="text-2xl font-bold">Tables and Data</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Tables and Data</CardTitle>
                  <CardDescription>
                    Practice extracting and validating data from tables, sorting, and filtering.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TableExample />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Table Testing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-1">Data Extraction</h4>
                      <p className="text-muted-foreground">Practice extracting and validating data from table cells.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Sorting Verification</h4>
                      <p className="text-muted-foreground">
                        Test that sorting functions correctly for different columns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Pagination</h4>
                      <p className="text-muted-foreground">
                        Verify that pagination controls work and display the correct data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Frame */}
              <div className="flex justify-center">
                <AdFrame className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
