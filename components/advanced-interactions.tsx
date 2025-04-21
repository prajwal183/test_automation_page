"use client"

import { useState, useRef } from "react"
import { format, addDays } from "date-fns"
import { CalendarIcon, Check, ChevronsUpDown, Info, MousePointer, MousePointerClick } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const frameworks = [
  { value: "playwright", label: "Playwright" },
  { value: "cypress", label: "Cypress" },
  { value: "selenium", label: "Selenium" },
  { value: "puppeteer", label: "Puppeteer" },
  { value: "webdriverio", label: "WebdriverIO" },
]

const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "ruby", label: "Ruby" },
]

export function AdvancedInteractions() {
  // State for various interactions
  const [date, setDate] = useState<Date>()
  const [isHovering, setIsHovering] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [doubleClickCount, setDoubleClickCount] = useState(0)
  const [sliderValue, setSliderValue] = useState([50])
  const [selectedFramework, setSelectedFramework] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState("blue")
  const [selectedFruits, setSelectedFruits] = useState<string[]>([])

  // Ref for double-click element
  const doubleClickRef = useRef<HTMLDivElement>(null)

  // Handle double click
  const handleDoubleClick = () => {
    setDoubleClickCount((prev) => prev + 1)
    toast({
      title: "Double Click Detected",
      description: `You've double-clicked ${doubleClickCount + 1} times.`,
    })
  }

  // Handle multi-select for languages
  const toggleLanguage = (value: string) => {
    setSelectedLanguages((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    )
  }

  // Handle fruit selection
  const handleFruitChange = (fruit: string) => {
    setSelectedFruits((current) =>
      current.includes(fruit) ? current.filter((item) => item !== fruit) : [...current, fruit],
    )
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="hover-click" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger id="hover-click-tab" value="hover-click">
            Hover & Click
          </TabsTrigger>
          <TabsTrigger id="date-time-tab" value="date-time">
            Date & Time
          </TabsTrigger>
          <TabsTrigger id="dropdowns-tab" value="dropdowns">
            Dropdowns
          </TabsTrigger>
          <TabsTrigger id="misc-tab" value="misc">
            Miscellaneous
          </TabsTrigger>
        </TabsList>

        {/* Hover and Click Interactions */}
        <TabsContent value="hover-click" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Hover Card */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Hover Interactions</h4>
                <div className="space-y-4">
                  <div
                    id="hover-element"
                    className={cn(
                      "p-4 border rounded-md transition-colors duration-200 text-center",
                      isHovering ? "bg-primary/10 border-primary" : "bg-muted border-muted-foreground/20",
                    )}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MousePointer className="h-4 w-4" />
                      <span>Hover over me</span>
                    </div>
                    {isHovering && (
                      <p id="hover-message" className="mt-2 text-sm text-primary">
                        Hover detected!
                      </p>
                    )}
                  </div>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button id="hover-card-trigger" variant="link">
                        Hover for more info
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent id="hover-card-content" className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Hover Card</h4>
                          <p className="text-sm">
                            This is a hover card that appears when you hover over the trigger element. It's useful for
                            showing additional information without requiring a click.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button id="tooltip-button" variant="outline">
                          <Info className="h-4 w-4 mr-2" />
                          Hover for tooltip
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent id="tooltip-content">
                        <p>This is a tooltip that appears on hover</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>

            {/* Click Interactions */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Click Interactions</h4>
                <div className="space-y-4">
                  <div>
                    <Button
                      id="click-button"
                      onClick={() => {
                        setClickCount((prev) => prev + 1)
                        toast({
                          title: "Click Detected",
                          description: `You've clicked ${clickCount + 1} times.`,
                        })
                      }}
                    >
                      <MousePointerClick className="h-4 w-4 mr-2" />
                      Click me
                    </Button>
                    <p id="click-count" className="mt-2 text-sm">
                      Click count: {clickCount}
                    </p>
                  </div>

                  <div
                    id="double-click-element"
                    ref={doubleClickRef}
                    className="p-4 border rounded-md text-center cursor-pointer"
                    onDoubleClick={handleDoubleClick}
                  >
                    <p>Double-click me</p>
                    <p id="double-click-count" className="mt-2 text-sm">
                      Double-click count: {doubleClickCount}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm">Right-click interaction:</p>
                    <div
                      id="context-menu-area"
                      className="p-4 border rounded-md text-center"
                      onContextMenu={(e) => {
                        e.preventDefault()
                        toast({
                          title: "Right Click Detected",
                          description: "You've opened the context menu.",
                        })
                      }}
                    >
                      Right-click me
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Date and Time Interactions */}
        <TabsContent value="date-time" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Date Picker */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Date Picker</h4>
                <div className="space-y-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date-picker-button"
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        id="date-picker-calendar"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {date && (
                    <div id="selected-date" className="p-2 border rounded-md">
                      <p className="text-sm">Selected date: {format(date, "PPP")}</p>
                      <p className="text-sm">Tomorrow: {format(addDays(date, 1), "PPP")}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Date Range */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Time Slider</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="time-slider">Select time (hours): {sliderValue}</Label>
                    <Slider
                      id="time-slider"
                      min={0}
                      max={24}
                      step={1}
                      value={sliderValue}
                      onValueChange={setSliderValue}
                    />
                    <div id="time-value" className="text-sm mt-2">
                      {sliderValue[0] === 0
                        ? "12 AM (Midnight)"
                        : sliderValue[0] === 12
                          ? "12 PM (Noon)"
                          : sliderValue[0] < 12
                            ? `${sliderValue[0]} AM`
                            : `${sliderValue[0] - 12} PM`}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Quick time selection</Label>
                    <div className="flex flex-wrap gap-2">
                      {[9, 12, 15, 18].map((hour) => (
                        <Button
                          key={hour}
                          id={`time-preset-${hour}`}
                          variant="outline"
                          size="sm"
                          onClick={() => setSliderValue([hour])}
                        >
                          {hour === 12 ? "12 PM" : hour < 12 ? `${hour} AM` : `${hour - 12} PM`}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Dropdowns and Selects */}
        <TabsContent value="dropdowns" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Basic Select */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Basic Select</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="color-select">Select a color</Label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger id="color-select" className="w-full">
                        <SelectValue placeholder="Select a color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Colors</SelectLabel>
                          <SelectItem id="color-red" value="red">
                            Red
                          </SelectItem>
                          <SelectItem id="color-green" value="green">
                            Green
                          </SelectItem>
                          <SelectItem id="color-blue" value="blue">
                            Blue
                          </SelectItem>
                          <SelectItem id="color-yellow" value="yellow">
                            Yellow
                          </SelectItem>
                          <SelectItem id="color-purple" value="purple">
                            Purple
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedColor && (
                    <div
                      id="color-preview"
                      className="h-10 rounded-md border"
                      style={{ backgroundColor: selectedColor }}
                    />
                  )}

                  <div className="space-y-2">
                    <Label>Grouped Select</Label>
                    <Select>
                      <SelectTrigger id="grouped-select" className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Berries</SelectLabel>
                          <SelectItem id="fruit-strawberry" value="strawberry">
                            Strawberry
                          </SelectItem>
                          <SelectItem id="fruit-blueberry" value="blueberry">
                            Blueberry
                          </SelectItem>
                          <SelectItem id="fruit-raspberry" value="raspberry">
                            Raspberry
                          </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Citrus</SelectLabel>
                          <SelectItem id="fruit-orange" value="orange">
                            Orange
                          </SelectItem>
                          <SelectItem id="fruit-lemon" value="lemon">
                            Lemon
                          </SelectItem>
                          <SelectItem id="fruit-lime" value="lime">
                            Lime
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Selects */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Advanced Selects</h4>
                <div className="space-y-4">
                  {/* Combobox */}
                  <div className="space-y-2">
                    <Label>Searchable Dropdown (Combobox)</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          id="combobox-button"
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full justify-between"
                        >
                          {selectedFramework
                            ? frameworks.find((framework) => framework.value === selectedFramework)?.label
                            : "Select framework..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput id="combobox-search" placeholder="Search framework..." />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {frameworks.map((framework) => (
                                <CommandItem
                                  key={framework.value}
                                  id={`combobox-item-${framework.value}`}
                                  value={framework.value}
                                  onSelect={(currentValue) => {
                                    setSelectedFramework(currentValue === selectedFramework ? "" : currentValue)
                                    setOpen(false)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      selectedFramework === framework.value ? "opacity-100" : "opacity-0",
                                    )}
                                  />
                                  {framework.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Multi-select with checkboxes */}
                  <div className="space-y-2">
                    <Label>Multi-select with Checkboxes</Label>
                    <div id="multi-select" className="rounded-md border p-4">
                      <div className="space-y-2">
                        {languages.map((language) => (
                          <div key={language.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`language-${language.value}`}
                              checked={selectedLanguages.includes(language.value)}
                              onCheckedChange={() => toggleLanguage(language.value)}
                            />
                            <label
                              htmlFor={`language-${language.value}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {language.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {selectedLanguages.length > 0 && (
                      <div id="selected-languages" className="flex flex-wrap gap-1 mt-2">
                        {selectedLanguages.map((value) => (
                          <Badge key={value} variant="secondary" className="text-xs">
                            {languages.find((l) => l.value === value)?.label}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Miscellaneous Interactions */}
        <TabsContent value="misc" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Drag Interactions */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Checkbox Group</h4>
                <div className="space-y-4">
                  <div id="fruit-checkboxes" className="grid grid-cols-2 gap-2">
                    {["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple"].map((fruit) => (
                      <div key={fruit} className="flex items-center space-x-2">
                        <Checkbox
                          id={`fruit-${fruit.toLowerCase()}`}
                          checked={selectedFruits.includes(fruit.toLowerCase())}
                          onCheckedChange={() => handleFruitChange(fruit.toLowerCase())}
                        />
                        <label htmlFor={`fruit-${fruit.toLowerCase()}`} className="text-sm font-medium leading-none">
                          {fruit}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected fruits:</p>
                    <div id="selected-fruits" className="min-h-[40px] p-2 border rounded-md">
                      {selectedFruits.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No fruits selected</p>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {selectedFruits.map((fruit) => (
                            <Badge key={fruit} variant="outline" className="capitalize">
                              {fruit}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      id="select-all-fruits"
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedFruits(["apple", "banana", "orange", "grape", "mango", "pineapple"])}
                    >
                      Select All
                    </Button>
                    <Button id="clear-fruits" variant="outline" size="sm" onClick={() => setSelectedFruits([])}>
                      Clear All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Focus and Blur */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 font-medium">Focus and Blur Events</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="focus-input">Focus/Blur Testing</Label>
                    <input
                      id="focus-input"
                      className="w-full p-2 border rounded-md"
                      placeholder="Click here to focus"
                      onFocus={() => {
                        toast({
                          title: "Focus Event",
                          description: "Input field focused",
                        })
                      }}
                      onBlur={() => {
                        toast({
                          title: "Blur Event",
                          description: "Input field lost focus",
                        })
                      }}
                    />
                    <p className="text-xs text-muted-foreground">
                      Focus and blur events will trigger toast notifications
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="key-press-input">Key Press Testing</Label>
                    <input
                      id="key-press-input"
                      className="w-full p-2 border rounded-md"
                      placeholder="Type here to test key events"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          toast({
                            title: "Enter Key Pressed",
                            description: "You pressed the Enter key",
                          })
                        }
                      }}
                    />
                    <p className="text-xs text-muted-foreground">Press Enter to trigger a toast notification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
