"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2, CheckCircle2 } from "lucide-react"

export function DynamicElements() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showElement, setShowElement] = useState(false)
  const [loadedData, setLoadedData] = useState<string[]>([])
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)
  const loadIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Simulate loading on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Progress bar animation
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            setLoadingComplete(true)
          }
          return newProgress
        })
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [progress])

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (loadIntervalRef.current) {
        clearInterval(loadIntervalRef.current)
      }
    }
  }, [])

  // Simulate data loading
  const loadData = () => {
    // Clear any existing interval
    if (loadIntervalRef.current) {
      clearInterval(loadIntervalRef.current)
    }

    setLoadedData([])
    setIsLoadingData(true)
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    let index = 0

    loadIntervalRef.current = setInterval(() => {
      if (index < items.length) {
        setLoadedData((prev) => [...prev, items[index]])
        index++
      } else {
        if (loadIntervalRef.current) {
          clearInterval(loadIntervalRef.current)
          loadIntervalRef.current = null
          setIsLoadingData(false)
        }
      }
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Loading State */}
        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4 font-medium">Loading States</h4>
            {isLoading ? (
              <div id="loading-element" className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ) : (
              <div id="loaded-element" className="space-y-2">
                <p>This content has loaded successfully.</p>
                <p>You can test waiting for elements to appear.</p>
                <Button
                  id="reload-button"
                  variant="outline"
                  onClick={() => setIsLoading(true)}
                  className="w-full sm:w-auto"
                >
                  Reload
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Appearing/Disappearing Elements */}
        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4 font-medium">Appearing/Disappearing Elements</h4>
            <div className="space-y-4">
              <Button id="toggle-element-button" onClick={() => setShowElement(!showElement)}>
                {showElement ? "Hide Element" : "Show Element"}
              </Button>

              {showElement && (
                <div id="toggle-element" className="rounded-md border border-green-500 bg-green-50 p-4 text-green-700">
                  <p>This element appears and disappears based on button clicks.</p>
                  <p>Practice detecting when elements are visible or hidden.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4 font-medium">Progress Indicator</h4>
            <div className="space-y-4">
              <Progress id="progress-bar" value={progress} className="h-3 w-full" />
              <p className="text-sm text-muted-foreground">Progress: {progress}%</p>

              {loadingComplete ? (
                <div id="progress-complete" className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Complete!</span>
                </div>
              ) : null}

              <Button
                id="reset-progress-button"
                variant="outline"
                onClick={() => {
                  setProgress(0)
                  setLoadingComplete(false)
                }}
              >
                Reset Progress
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Data Loading */}
        <Card>
          <CardContent className="p-6">
            <h4 className="mb-4 font-medium">Dynamic Data Loading</h4>
            <div className="space-y-4">
              <Button id="load-data-button" onClick={loadData} disabled={isLoadingData}>
                {loadedData.length === 0 ? (
                  "Load Data"
                ) : isLoadingData ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Reload Data"
                )}
              </Button>

              <ul id="dynamic-list" className="space-y-2">
                {loadedData.map((item, index) => (
                  <li key={index} id={`dynamic-item-${index + 1}`} className="rounded-md border p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
