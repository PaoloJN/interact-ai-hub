'use client'

import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { cache } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import { prompts } from '@/database/prompts'
import { Card, CardHeader, CardTitle } from './ui/card'
import { useInput } from '@/lib/hooks/use-form-input'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import {
  BookmarkIcon,
  CheckIcon,
  CopyIcon,
  DotsHorizontalIcon,
  RocketIcon
} from '@radix-ui/react-icons'
import React from 'react'

interface PromptListProps {
  children?: React.ReactNode
}

export async function PromptList({}: PromptListProps) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium">Prompt Library</h4>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="space-y-2 px-3">
          {/* <SidebarItems chats={chats} /> */}
          <Tabs defaultValue="all">
            <TabsList className=" rounded-sm">
              <TabsTrigger value="all">All {`(${prompts.length})`}</TabsTrigger>
              {/* <TabsTrigger value="custom">Custom</TabsTrigger> */}
              <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="flex flex-col space-y-2">
                {/* @ts-ignore */}
                {prompts.map(prompt => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </TabsContent>
            {/* <TabsContent value="custom"></TabsContent> */}
            <TabsContent value="bookmarked"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

// prompt item
function PromptCard({ prompt }: any) {
  const { inputValue, setInputValue } = useInput()

  // check mark on action for 2000 ms
  const [isAction, setIsAction] = React.useState(false)

  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  return (
    <>
      <div className="bg-background py-1 px-2 rounded-md dark:border">
        <div className="flex flex-row w-full items-center justify-between">
          <span className="text-[13px] font-semibold text-foreground">
            {prompt.title}
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 p-0 hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {isAction ? (
                  <CheckIcon className="size-4" />
                ) : (
                  <DotsHorizontalIcon className="size-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  setIsAction(true)
                  setTimeout(() => {
                    setIsAction(false)
                  }, 1000)
                  setInputValue(prompt.prompt)
                }}
              >
                <RocketIcon className="size-4 mr-2" />
                <span className="text-xs">Use Prompt</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookmarkIcon className="size-4 mr-2" />
                <span className="text-xs">Bookmark</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setIsAction(true)
                  setTimeout(() => {
                    setIsAction(false)
                  }, 1000)
                  copyToClipboard(prompt.prompt)
                }}
              >
                <CopyIcon className="size-4 mr-2" />
                <span className="text-xs">Copy to clipboard</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-xs text-muted-foreground leading-normal">
          {prompt.remark}
        </div>
      </div>
    </>
  )
}
