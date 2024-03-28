'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { InputProvider } from '@/lib/hooks/use-form-input'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <InputProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </InputProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}
