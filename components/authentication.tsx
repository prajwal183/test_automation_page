"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { UserCircle, LogOut, Mail, Lock, User, CheckCircle, Eye, EyeOff } from "lucide-react"

// Sign-in form schema
const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

// Sign-up form schema
const signUpSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export function Authentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null)
  const [activeTab, setActiveTab] = useState("sign-in")
  const [showSignInPassword, setShowSignInPassword] = useState(false)
  const [showSignUpPassword, setShowSignUpPassword] = useState(false)
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false)

  // Sign-in form
  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Sign-up form
  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  // Handle sign-in submission
  function onSignInSubmit(values: z.infer<typeof signInSchema>) {
    // Simulate API call delay
    setTimeout(() => {
      // For testing purposes, any valid form submission will succeed
      setIsAuthenticated(true)
      setCurrentUser({
        name: "Test User", // Default name for sign-in
        email: values.email,
      })

      toast({
        title: "Sign-in successful!",
        description: `Welcome back, Test User!`,
      })

      // Reset form
      signInForm.reset()
    }, 1000)
  }

  // Handle sign-up submission
  function onSignUpSubmit(values: z.infer<typeof signUpSchema>) {
    // Simulate API call delay
    setTimeout(() => {
      // For testing purposes, any valid form submission will succeed
      setIsAuthenticated(true)
      setCurrentUser({
        name: values.name,
        email: values.email,
      })

      toast({
        title: "Sign-up successful!",
        description: `Welcome, ${values.name}!`,
      })

      // Reset form
      signUpForm.reset()
    }, 1000)
  }

  // Handle logout
  function handleLogout() {
    setIsAuthenticated(false)
    setCurrentUser(null)
    setActiveTab("sign-in")

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
  }

  return (
    <div className="space-y-8">
      {isAuthenticated ? (
        <Card id="user-profile">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCircle className="h-5 w-5" />
              User Profile
            </CardTitle>
            <CardDescription>You are currently logged in.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-green-50 p-4 text-green-700 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Authentication successful</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span id="profile-name" className="font-medium">
                  {currentUser?.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span id="profile-email" className="font-medium">
                  {currentUser?.email}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button id="logout-button" variant="outline" onClick={handleLogout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Tabs defaultValue="sign-in" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger id="sign-in-tab" value="sign-in">
              Sign In
            </TabsTrigger>
            <TabsTrigger id="sign-up-tab" value="sign-up">
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Sign In Form */}
          <TabsContent value="sign-in">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your credentials to sign in to your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...signInForm}>
                  <form id="sign-in-form" onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4">
                    <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <Mail className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-in-email"
                                placeholder="email@example.com"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-in-password"
                                type={showSignInPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                              <Button
                                id="toggle-sign-in-password"
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 mr-1"
                                onClick={() => setShowSignInPassword(!showSignInPassword)}
                              >
                                {showSignInPassword ? (
                                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                                ) : (
                                  <Eye className="h-4 w-4" aria-hidden="true" />
                                )}
                                <span className="sr-only">
                                  {showSignInPassword ? "Hide password" : "Show password"}
                                </span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button id="sign-in-submit" type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button id="go-to-sign-up" variant="link" onClick={() => setActiveTab("sign-up")}>
                  Don't have an account? Sign up
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up Form */}
          <TabsContent value="sign-up">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to get started.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...signUpForm}>
                  <form id="sign-up-form" onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                    <FormField
                      control={signUpForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <User className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-up-name"
                                placeholder="John Doe"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <Mail className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-up-email"
                                placeholder="email@example.com"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-up-password"
                                type={showSignUpPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                              <Button
                                id="toggle-sign-up-password"
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 mr-1"
                                onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                              >
                                {showSignUpPassword ? (
                                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                                ) : (
                                  <Eye className="h-4 w-4" aria-hidden="true" />
                                )}
                                <span className="sr-only">
                                  {showSignUpPassword ? "Hide password" : "Show password"}
                                </span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormDescription>Password must be at least 8 characters.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                              <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="sign-up-confirm-password"
                                type={showSignUpConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="border-0 focus-visible:ring-0"
                                {...field}
                              />
                              <Button
                                id="toggle-sign-up-confirm-password"
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 mr-1"
                                onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                              >
                                {showSignUpConfirmPassword ? (
                                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                                ) : (
                                  <Eye className="h-4 w-4" aria-hidden="true" />
                                )}
                                <span className="sr-only">
                                  {showSignUpConfirmPassword ? "Hide password" : "Show password"}
                                </span>
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button id="sign-up-submit" type="submit" className="w-full">
                      Sign Up
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button id="go-to-sign-in" variant="link" onClick={() => setActiveTab("sign-in")}>
                  Already have an account? Sign in
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
