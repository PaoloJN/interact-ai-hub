'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
// import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel,
  IconSettings,
  IconDownload
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { ModelSelector } from './model-selector'

interface HeaderProps {
  models?: any
}

export function Header({ models }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-background ">
      <div className="flex items-center">
        {/* <React.Suspense fallback={<div className="flex-1 overflow-auto" />}> */}
        <SidebarMobile>
          <ChatHistory />
        </SidebarMobile>
        <SidebarToggle />
        <ModelSelector models={models} />
        {/* </React.Suspense> */}
      </div>

      <div className="flex items-center justify-end space-x-2">
        {/* Settings Button */}
        <Button variant="ghost" size="icon">
          <IconSettings />
        </Button>
        {/* Install models */}
        <Button variant="outline" size="icon">
          <IconDownload />
        </Button>
      </div>
    </header>
  )
}
