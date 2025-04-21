import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Menu,
  FormInput,
  Loader2,
  Table,
  AlertTriangle,
  MoveHorizontal,
  Layers,
  UserCircle,
  MousePointerClick,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { Metadata } from "next"

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-2870280846389596",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Test Automation Practice</span>
            </Link>
          </div>
          <nav className="hidden flex-1 items-center justify-end space-x-2 md:flex">
            <a
              href="https://github.com/prajwal183/test_automation_page"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/forms" className="text-sm font-medium transition-colors hover:text-primary">
                  Forms
                </Link>
                <Link href="/dynamic-elements" className="text-sm font-medium transition-colors hover:text-primary">
                  Dynamic Elements
                </Link>
                <Link href="/tables" className="text-sm font-medium transition-colors hover:text-primary">
                  Tables
                </Link>
                <Link href="/alerts-modals" className="text-sm font-medium transition-colors hover:text-primary">
                  Alerts & Modals
                </Link>
                <Link href="/drag-drop" className="text-sm font-medium transition-colors hover:text-primary">
                  Drag & Drop
                </Link>
                <Link href="/iframes" className="text-sm font-medium transition-colors hover:text-primary">
                  iFrames
                </Link>
                <Link href="/authentication" className="text-sm font-medium transition-colors hover:text-primary">
                  Authentication
                </Link>
                <Link
                  href="/advanced-interactions"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Advanced Interactions
                </Link>
                <Link
                  href="https://github.com/prajwal183/test_automation_page"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Test Automation Practice Page
            </h1>
            <p className="max-w-[700px] text-base text-muted-foreground md:text-lg">
              A comprehensive collection of web elements to practice your test automation skills. Perfect for
              Playwright, Selenium, Cypress, and other testing frameworks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Forms Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <FormInput className="h-5 w-5 text-primary" />
                  <CardTitle>Form Elements</CardTitle>
                </div>
                <CardDescription>
                  Practice interacting with various form elements like inputs, checkboxes, radio buttons, and more.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Input validation</li>
                  <li>Checkboxes and radio buttons</li>
                  <li>Dropdowns and selects</li>
                  <li>Form submission</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/forms">Practice Forms</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Dynamic Elements Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 text-primary" />
                  <CardTitle>Dynamic Elements</CardTitle>
                </div>
                <CardDescription>
                  Practice handling elements that load dynamically, appear/disappear, or change state.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Loading states</li>
                  <li>Appearing/disappearing elements</li>
                  <li>Progress indicators</li>
                  <li>Dynamic data loading</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/dynamic-elements">Practice Dynamic Elements</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Tables Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Table className="h-5 w-5 text-primary" />
                  <CardTitle>Tables and Data</CardTitle>
                </div>
                <CardDescription>
                  Practice extracting and validating data from tables, sorting, and filtering.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Table sorting</li>
                  <li>Data filtering</li>
                  <li>Data extraction</li>
                  <li>Status indicators</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tables">Practice Tables</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Alerts & Modals Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <CardTitle>Alerts and Modals</CardTitle>
                </div>
                <CardDescription>
                  Practice handling JavaScript alerts, confirms, prompts, and modal dialogs.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>JavaScript alerts</li>
                  <li>Confirmation dialogs</li>
                  <li>Prompt dialogs</li>
                  <li>Modal windows</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/alerts-modals">Practice Alerts & Modals</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Drag & Drop Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <MoveHorizontal className="h-5 w-5 text-primary" />
                  <CardTitle>Drag and Drop</CardTitle>
                </div>
                <CardDescription>Practice drag and drop operations with different elements.</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Drag between containers</li>
                  <li>Sortable lists</li>
                  <li>Reordering elements</li>
                  <li>Touch-friendly interactions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/drag-drop">Practice Drag & Drop</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* iFrames Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <CardTitle>iFrames</CardTitle>
                </div>
                <CardDescription>Practice interacting with elements inside iFrames.</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Form elements in iFrames</li>
                  <li>Switching between frames</li>
                  <li>Loading external content</li>
                  <li>Handling nested frames</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/iframes">Practice iFrames</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Authentication Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Authentication</CardTitle>
                </div>
                <CardDescription>Practice testing sign-in, sign-up, and logout functionality.</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Sign-in form validation</li>
                  <li>Sign-up process</li>
                  <li>Authentication state</li>
                  <li>Logout functionality</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/authentication">Practice Authentication</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Advanced Interactions Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <MousePointerClick className="h-5 w-5 text-primary" />
                  <CardTitle>Advanced Interactions</CardTitle>
                </div>
                <CardDescription>Practice testing complex interactions and UI elements.</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Hover effects and tooltips</li>
                  <li>Double-click interactions</li>
                  <li>Date pickers and sliders</li>
                  <li>Advanced dropdowns and selects</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/advanced-interactions">Practice Advanced Interactions</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for test automation practice. Use it to improve your testing skills.
          </p>
        </div>
      </footer>
    </div>
  )
}
