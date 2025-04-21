import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Test Automation Practice Page | QA Testing Playground",
  description:
    "A comprehensive collection of web elements to practice your test automation skills with Playwright, Selenium, Cypress, and other testing frameworks. Perfect for QA engineers and test automation specialists.",
  keywords: [
    "test automation",
    "QA testing",
    "Playwright testing",
    "Selenium practice",
    "Cypress examples",
    "automation testing playground",
    "web testing elements",
    "QA practice page",
    "test automation examples",
    "UI testing practice",
    "end-to-end testing",
    "automation framework practice",
  ],
  authors: [{ name: "Test Automation Community" }],
  creator: "Test Automation Practice",
  publisher: "Test Automation Practice",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://test-automation-practice.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Test Automation Practice Page | QA Testing Playground",
    description:
      "A comprehensive collection of web elements to practice your test automation skills with Playwright, Selenium, Cypress, and other testing frameworks.",
    url: "https://test-automation-practice.vercel.app",
    siteName: "Test Automation Practice",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Test Automation Practice Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Automation Practice Page | QA Testing Playground",
    description: "Practice test automation with forms, tables, dynamic elements, and more. Perfect for QA engineers.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
