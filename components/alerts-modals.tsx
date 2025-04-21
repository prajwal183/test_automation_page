"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export function AlertsModals() {
  const [isOpen, setIsOpen] = useState(false)
  const [promptValue, setPromptValue] = useState("")
  const [alertResult, setAlertResult] = useState<string | null>(null)
  const [confirmResult, setConfirmResult] = useState<string | null>(null)
  const [promptResult, setPromptResult] = useState<string | null>(null)

  const handleJsAlert = () => {
    alert("This is a JavaScript alert!")
    setAlertResult("Alert was acknowledged")
    toast({
      title: "Alert Handled",
      description: "You acknowledged the JavaScript alert",
    })
  }

  const handleJsConfirm = () => {
    const result = confirm("Do you confirm this action?")
    setConfirmResult(result ? "Action confirmed" : "Action cancelled")
    toast({
      title: result ? "Confirmed" : "Cancelled",
      description: result ? "You confirmed the action" : "You cancelled the action",
    })
  }

  const handleJsPrompt = () => {
    const result = prompt("Please enter your name:", "")
    if (result === null) {
      setPromptResult("Prompt cancelled")
      toast({
        title: "Prompt Cancelled",
        description: "You cancelled the prompt",
      })
    } else {
      setPromptResult(`You entered: ${result}`)
      toast({
        title: "Prompt Submitted",
        description: `You entered: ${result}`,
      })
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* JavaScript Alerts */}
        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">JavaScript Alerts</h4>
          <div className="space-y-4">
            <div>
              <Button id="js-alert-button" onClick={handleJsAlert} className="w-full sm:w-auto">
                Show JS Alert
              </Button>
              {alertResult && (
                <p id="js-alert-result" className="mt-2 text-sm text-muted-foreground">
                  Result: {alertResult}
                </p>
              )}
            </div>

            <div>
              <Button id="js-confirm-button" onClick={handleJsConfirm} className="w-full sm:w-auto">
                Show JS Confirm
              </Button>
              {confirmResult && (
                <p id="js-confirm-result" className="mt-2 text-sm text-muted-foreground">
                  Result: {confirmResult}
                </p>
              )}
            </div>

            <div>
              <Button id="js-prompt-button" onClick={handleJsPrompt} className="w-full sm:w-auto">
                Show JS Prompt
              </Button>
              {promptResult && (
                <p id="js-prompt-result" className="mt-2 text-sm text-muted-foreground">
                  Result: {promptResult}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal Dialogs */}
        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">Modal Dialogs</h4>
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button id="open-dialog-button">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-[425px] sm:w-auto">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="dialog-name-input" defaultValue="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="dialog-username-input" defaultValue="@johndoe" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button id="dialog-save-button" type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button id="open-alert-dialog-button" variant="destructive">
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel id="cancel-delete-button">Cancel</AlertDialogCancel>
                  <AlertDialogAction id="confirm-delete-button">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div>
              <Button id="custom-prompt-button" onClick={() => setIsOpen(true)}>
                Custom Prompt
              </Button>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[95vw] max-w-[425px] sm:w-auto">
                  <DialogHeader>
                    <DialogTitle>Enter Information</DialogTitle>
                    <DialogDescription>Please provide the requested information below.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="prompt-input" className="text-right">
                        Value
                      </Label>
                      <Input
                        id="prompt-input"
                        value={promptValue}
                        onChange={(e) => setPromptValue(e.target.value)}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      id="prompt-cancel-button"
                      variant="outline"
                      onClick={() => {
                        setIsOpen(false)
                        setPromptValue("")
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      id="prompt-submit-button"
                      onClick={() => {
                        toast({
                          title: "Value Submitted",
                          description: `You entered: ${promptValue}`,
                        })
                        setIsOpen(false)
                        setPromptValue("")
                      }}
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
