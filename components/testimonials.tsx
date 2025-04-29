import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Test Automation Engineers</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-background border shadow-sm">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6">
                "This platform has been invaluable for training our QA team. The variety of test scenarios covers
                everything we need to practice with Playwright."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">JD</span>
                </div>
                <div>
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">QA Lead at TechCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border shadow-sm">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6">
                "I've been using this site to prepare for interviews. The advanced interactions section helped me solve
                complex test automation challenges during technical assessments."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">MS</span>
                </div>
                <div>
                  <p className="font-medium">Michael Smith</p>
                  <p className="text-sm text-muted-foreground">Automation Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border shadow-sm md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6">
                "Perfect for teaching test automation concepts. My students use this platform to practice with Selenium
                and Cypress, and it covers all the key scenarios they need to master."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">AJ</span>
                </div>
                <div>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">Instructor at TestAcademy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
