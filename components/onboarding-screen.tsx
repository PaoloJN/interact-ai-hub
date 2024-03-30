import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { IconCopy, IconOllama } from './ui/icons'
import { DownloadIcon } from '@radix-ui/react-icons'

// Get up and running with large language models locally.

// macOS
// Download

// Windows preview
// Download

// Linux
// curl -fsSL https://ollama.com/install.sh | sh
// Manual install instructions

// Docker
// The official Ollama Docker image ollama/ollama is available on Docker Hub.

// Libraries
// ollama-python
// ollama-js
// Quickstart
// To run and chat with Llama 2:

// ollama run llama2

export function OnBoardingScreen() {
  return (
    <div className="size-full flex items-center justify-center -mt-28">
      <Card className="w-[500px]">
        <CardHeader className="border-b pb-4">
          <CardTitle>Get started with Ollama</CardTitle>
          <CardDescription className="pt-2">
            Oops! It seems like you don&apos;t have Ollama running or installed,
            or perhaps you haven&apos;t added any models yet.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 space-y-6">
          {/* download mac, linux, windows */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">
              Install Ollama for your operating system:
            </div>
            <div className="flex flex-row space-x-2">
              <Button variant="outline">macOS</Button>
              <Button variant="outline">Windows</Button>
              <Button variant="outline">Linux</Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">
              Install Ollama manually using the following command:
            </div>
            <ClickToCopyCommand command="curl -fsSL https://ollama.com/install.sh | sh" />
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">
              Install one of supported models:
            </div>
            <CardDescription>
              Once you have Ollama installed and running and have added a model
              make sure ollama is running on port 11434
            </CardDescription>
            <div className="flex flex-row space-x-2">
              <ClickToCopyCommand command="ollama run llama2:7b" />
              <ClickToCopyCommand command="ollama run llama2:7b" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ClickToCopyCommand({ command }: { command: string }) {
  //   const [isCopied, setIsCopied] = React.useState(false)

  return (
    <div className="flex flex-row">
      <Input
        className="border-l-0 rounded-r-none  border-[1px]"
        defaultValue={command}
        readOnly
      />
      <Button variant="outline" className="rounded-l-none">
        <IconCopy />
      </Button>
    </div>
  )
}
