"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export function IFrameExample() {
  const [iframeContent, setIframeContent] = useState(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: system-ui, sans-serif;
          padding: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }
        input, select {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #1d4ed8;
        }
        #result {
          margin-top: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          display: none;
        }
      </style>
    </head>
    <body>
      <h2>iFrame Form Example</h2>
      <p>This form is inside an iFrame. Practice interacting with elements inside iFrames.</p>
      
      <form id="iframe-form">
        <div class="form-group">
          <label for="iframe-name">Name:</label>
          <input type="text" id="iframe-name" placeholder="Enter your name">
        </div>
        
        <div class="form-group">
          <label for="iframe-email">Email:</label>
          <input type="email" id="iframe-email" placeholder="Enter your email">
        </div>
        
        <div class="form-group">
          <label for="iframe-country">Country:</label>
          <select id="iframe-country">
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
          </select>
        </div>
        
        <button type="button" id="iframe-submit">Submit</button>
      </form>
      
      <div id="result">
        <h3>Form Submitted</h3>
        <p id="result-text"></p>
      </div>
      
      <script>
        document.getElementById('iframe-submit').addEventListener('click', function() {
          const name = document.getElementById('iframe-name').value;
          const email = document.getElementById('iframe-email').value;
          const country = document.getElementById('iframe-country').value;
          
          if (!name || !email || !country) {
            alert('Please fill out all fields');
            return;
          }
          
          const resultElement = document.getElementById('result');
          const resultText = document.getElementById('result-text');
          
          resultText.textContent = 'Name: ' + name + ', Email: ' + email + ', Country: ' + country;
          resultElement.style.display = 'block';
        });
      </script>
    </body>
    </html>
  `)

  const [customUrl, setCustomUrl] = useState("")
  const [isExternalUrl, setIsExternalUrl] = useState(false)

  const loadExternalUrl = () => {
    if (!customUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a URL to load.",
        variant: "destructive",
      })
      return
    }

    // Validate URL format
    try {
      new URL(customUrl)
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL including https://",
        variant: "destructive",
      })
      return
    }

    // Check if URL starts with https://
    if (!customUrl.startsWith("https://")) {
      toast({
        title: "HTTPS Required",
        description: "For security reasons, only HTTPS URLs are supported.",
        variant: "destructive",
      })
      return
    }

    setIsExternalUrl(true)
    setIframeContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; height: 100vh; overflow: hidden; }
          iframe { width: 100%; height: 100%; border: none; }
        </style>
      </head>
      <body>
        <iframe src="${customUrl}" title="External content" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
      </body>
      </html>
    `)

    toast({
      title: "URL Loaded",
      description: `Successfully loaded: ${customUrl}`,
    })
  }

  const resetIframe = () => {
    setCustomUrl("")
    setIsExternalUrl(false)
    setIframeContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: system-ui, sans-serif;
            padding: 20px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
          }
          input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            background-color: #2563eb;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #1d4ed8;
          }
          #result {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            display: none;
          }
        </style>
      </head>
      <body>
        <h2>iFrame Form Example</h2>
        <p>This form is inside an iFrame. Practice interacting with elements inside iFrames.</p>
        
        <form id="iframe-form">
          <div class="form-group">
            <label for="iframe-name">Name:</label>
            <input type="text" id="iframe-name" placeholder="Enter your name">
          </div>
          
          <div class="form-group">
            <label for="iframe-email">Email:</label>
            <input type="email" id="iframe-email" placeholder="Enter your email">
          </div>
          
          <div class="form-group">
            <label for="iframe-country">Country:</label>
            <select id="iframe-country">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
            </select>
          </div>
          
          <button type="button" id="iframe-submit">Submit</button>
        </form>
        
        <div id="result">
          <h3>Form Submitted</h3>
          <p id="result-text"></p>
        </div>
        
        <script>
          document.getElementById('iframe-submit').addEventListener('click', function() {
            const name = document.getElementById('iframe-name').value;
            const email = document.getElementById('iframe-email').value;
            const country = document.getElementById('iframe-country').value;
            
            if (!name || !email || !country) {
              alert('Please fill out all fields');
              return;
            }
            
            const resultElement = document.getElementById('result');
            const resultText = document.getElementById('result-text');
            
            resultText.textContent = 'Name: ' + name + ', Email: ' + email + ', Country: ' + country;
            resultElement.style.display = 'block';
          });
        </script>
      </body>
      </html>
    `)

    toast({
      title: "iFrame Reset",
      description: "The iFrame has been reset to the default content.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="rounded-lg border">
          <iframe
            id="test-iframe"
            srcDoc={iframeContent}
            title="Test iFrame"
            className="h-[400px] sm:h-[500px] w-full rounded-lg"
            sandbox="allow-scripts allow-forms"
          />
        </div>

        <div className="space-y-4 rounded-lg border p-4">
          <h4 className="font-medium">Load External URL in iFrame</h4>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex-1">
              <Label htmlFor="iframe-url">URL</Label>
              <Input
                id="iframe-url"
                placeholder="https://example.com"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
              />
            </div>
            <div className="sm:flex sm:items-end">
              <Button id="load-iframe-button" onClick={loadExternalUrl} className="w-full mt-2 sm:mt-0 sm:w-auto">
                Load URL
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Note: Only HTTPS URLs are supported for security reasons.</p>
        </div>

        <Button id="reset-iframe-button" variant="outline" onClick={resetIframe}>
          Reset iFrame
        </Button>
      </div>
    </div>
  )
}
