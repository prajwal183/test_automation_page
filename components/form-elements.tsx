"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  bio: z.string().optional(),
  notifications: z.boolean().default(false),
  accountType: z.enum(["personal", "business", "education"], {
    required_error: "Please select an account type.",
  }),
  country: z.string({
    required_error: "Please select a country.",
  }),
})

export function FormElements() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      bio: "",
      notifications: false,
      accountType: "personal",
      country: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true)
    toast({
      title: "Form submitted!",
      description: "Form data has been successfully submitted.",
    })
    console.log(values)
  }

  // Function to properly clear the form
  const clearForm = () => {
    form.reset({
      username: "",
      email: "",
      password: "",
      bio: "",
      notifications: false,
      accountType: "personal",
      country: "",
    })

    // Force update the form state
    Object.keys(form.getValues()).forEach((key) => {
      form.trigger(key as any)
    })

    toast({
      title: "Form cleared",
      description: "All form fields have been reset.",
    })
  }

  return (
    <div className="space-y-8">
      {isSubmitted ? (
        <div id="form-success" className="rounded-md bg-green-50 p-4 text-green-700">
          <h4 className="font-medium">Form submitted successfully!</h4>
          <p className="mt-2 text-sm">Your form has been processed. You can reset the form to try again.</p>
          <Button
            id="reset-form-button"
            variant="outline"
            className="mt-4"
            onClick={() => {
              form.reset()
              setIsSubmitted(false)
            }}
          >
            Reset Form
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="practice-form">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input id="username-input" placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input id="email-input" type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormDescription>We'll never share your email with anyone else.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input id="password-input" type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormDescription>Must be at least 8 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      id="bio-textarea"
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional: Share something about yourself.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Account Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem id="account-type-personal" value="personal" />
                        </FormControl>
                        <FormLabel className="font-normal">Personal</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem id="account-type-business" value="business" />
                        </FormControl>
                        <FormLabel className="font-normal">Business</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem id="account-type-education" value="education" />
                        </FormControl>
                        <FormLabel className="font-normal">Education</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger id="country-select">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem id="country-us" value="us">
                        United States
                      </SelectItem>
                      <SelectItem id="country-ca" value="ca">
                        Canada
                      </SelectItem>
                      <SelectItem id="country-uk" value="uk">
                        United Kingdom
                      </SelectItem>
                      <SelectItem id="country-au" value="au">
                        Australia
                      </SelectItem>
                      <SelectItem id="country-de" value="de">
                        Germany
                      </SelectItem>
                      <SelectItem id="country-fr" value="fr">
                        France
                      </SelectItem>
                      <SelectItem id="country-jp" value="jp">
                        Japan
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Select your country of residence.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox id="notifications-checkbox" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Email Notifications</FormLabel>
                    <FormDescription>Receive emails about your account activity.</FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Button id="submit-form-button" type="submit">
                Submit
              </Button>
              <Button id="clear-form-button" type="button" variant="outline" onClick={clearForm}>
                Clear Form
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
