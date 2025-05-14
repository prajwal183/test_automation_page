"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FormInput,
  Loader2,
  Table,
  AlertTriangle,
  MoveHorizontal,
  Layers,
  UserCircle,
  MousePointerClick,
  ArrowRight,
} from "lucide-react"
import { trackClick } from "@/utils/analytics"

export function FeaturesSection() {
  return (
    <section className="py-16" id="practice-areas">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Test Automation Practice Areas</h2>
          <p className="text-lg text-muted-foreground">
            Our platform offers a wide range of interactive elements specifically designed to help you master test
            automation across different scenarios and complexity levels.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Forms Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <FormInput className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Form Elements</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Master form automation with various input types, validation patterns, and submission workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Input field validation techniques</li>
                <li>Checkbox and radio button interactions</li>
                <li>Dynamic select and dropdown handling</li>
                <li>Form submission and response validation</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "forms")}>
                <Link href="/forms" className="flex items-center justify-center">
                  Practice Forms
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Dynamic Elements Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <Loader2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Dynamic Elements</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Learn to handle asynchronous elements, loading states, and dynamically changing content.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Waiting for elements to appear</li>
                <li>Handling loading states and spinners</li>
                <li>Testing progress indicators</li>
                <li>Verifying dynamically loaded content</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "dynamic_elements")}>
                <Link href="/dynamic-elements" className="flex items-center justify-center">
                  Practice Dynamic Elements
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Tables Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <Table className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Tables and Data</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Perfect your data extraction, validation, sorting, and filtering automation techniques.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Table data extraction and verification</li>
                <li>Sorting and filtering automation</li>
                <li>Pagination handling techniques</li>
                <li>Data-driven testing approaches</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "tables")}>
                <Link href="/tables" className="flex items-center justify-center">
                  Practice Tables
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Alerts & Modals Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Alerts and Modals</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Master handling of JavaScript alerts, confirmation dialogs, prompts, and modal windows.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>JavaScript alert interaction patterns</li>
                <li>Confirmation dialog automation</li>
                <li>Handling prompt inputs and responses</li>
                <li>Modal dialog testing strategies</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "alerts_modals")}>
                <Link href="/alerts-modals" className="flex items-center justify-center">
                  Practice Alerts & Modals
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Drag & Drop Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <MoveHorizontal className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Drag and Drop</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Learn advanced techniques for automating drag and drop operations and sortable elements.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Cross-container drag and drop</li>
                <li>Sortable list automation</li>
                <li>Element reordering verification</li>
                <li>Touch-based drag operations</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "drag_drop")}>
                <Link href="/drag-drop" className="flex items-center justify-center">
                  Practice Drag & Drop
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* iFrames Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>iFrames</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Perfect your skills in handling embedded content, frame switching, and cross-frame interactions.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Frame switching techniques</li>
                <li>Accessing elements within iFrames</li>
                <li>Handling nested frames</li>
                <li>Cross-origin frame testing</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "iframes")}>
                <Link href="/iframes" className="flex items-center justify-center">
                  Practice iFrames
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Authentication Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <UserCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Authentication</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Master testing of sign-in, sign-up, and logout flows with comprehensive validation.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Login form automation</li>
                <li>Registration flow testing</li>
                <li>Authentication state verification</li>
                <li>Session handling and logout testing</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "authentication")}>
                <Link href="/authentication" className="flex items-center justify-center">
                  Practice Authentication
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Advanced Interactions Card */}
          <Card className="feature-card border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary/10">
                  <MousePointerClick className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Advanced Interactions</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Learn to automate complex UI patterns like hover effects, tooltips, and multi-step interactions.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Hover and tooltip testing</li>
                <li>Double-click and right-click handling</li>
                <li>Date picker automation</li>
                <li>Complex dropdown and combobox testing</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" onClick={() => trackClick("features", "advanced_interactions")}>
                <Link href="/advanced-interactions" className="flex items-center justify-center">
                  Practice Advanced Interactions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
