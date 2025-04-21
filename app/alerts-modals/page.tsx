import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { AlertsModals } from "@/components/alerts-modals"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function AlertsModalsPage() {
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
            <h1 className="text-2xl font-bold">Alerts and Modals</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Alerts and Modals</CardTitle>
              <CardDescription>
                Practice handling JavaScript alerts, confirms, prompts, and modal dialogs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertsModals />
            </CardContent>
          </Card>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
