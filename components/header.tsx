'use client'

import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { IconSettings, IconDownload } from '@/components/ui/icons'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { ModelSelector } from './model-selector'
import { ModelConfig } from './model-config'
import { Models } from '@/lib/types'

import { PromptLibrary } from './prompt-library'

interface HeaderProps {
  models: Models
}

export function Header({ models }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-3 border-b shrink-0 bg-background ">
      <div className="flex items-center">
        <SidebarMobile side="left">
          <ChatHistory />
        </SidebarMobile>
        <SidebarToggle side="left" />

        <div className="flex flex-row space-x-2 ml-2">
          <ModelSelector models={models} />
          <ModelConfig />
        </div>
      </div>

      {/* space-x-2 */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          <IconSettings />
        </Button>

        <SidebarMobile side="right">
          <PromptLibrary />
        </SidebarMobile>
        <SidebarToggle side="right" />
      </div>
    </header>
  )
}
