import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { DragDropExample } from "@/components/drag-drop-example"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {}

export default function DragDropPage() {
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
            <h1 className="text-2xl font-bold">Drag and Drop</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Drag and Drop</CardTitle>
              <CardDescription>Practice drag and drop operations with different elements.</CardDescription>
            </CardHeader>
            <CardContent>
              <DragDropExample />
            </CardContent>
          </Card>
        </div>
      </main>
      <PageFooter />
    </div>
  )
}
