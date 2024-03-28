// 'use client'

// import * as React from 'react'

// import { useSidebar } from '@/lib/hooks/use-sidebar'
// import { cn } from '@/lib/utils'

// export interface SidebarProps extends React.ComponentProps<'div'> {}

// export function Sidebar({ className, children }: SidebarProps) {
//   const { isSidebarOpen, isLoading } = useSidebar()

//   return (
//     <div
//       data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
//       className={cn(className, 'h-full flex-col dark:bg-zinc-950')}
//     >
//       {children}
//     </div>
//   )
// }

'use client'

import * as React from 'react'

import { useSidebar } from '@/lib/hooks/use-sidebar'
import { cn } from '@/lib/utils'

export interface SidebarProps extends React.ComponentProps<'div'> {
  side: 'left' | 'right' // Add this to distinguish between left and right sidebars
}

export function Sidebar({ className, children, side }: SidebarProps) {
  const { isLeftSidebarOpen, isRightSidebarOpen, isLoading } = useSidebar()

  // Determine which sidebar's state to use based on the 'side' prop
  const isSidebarOpen = side === 'left' ? isLeftSidebarOpen : isRightSidebarOpen

  return (
    <div
      data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
      // data-state-right={isRightSidebarOpen && !isLoading ? 'open' : 'closed'}
      className={cn(className, 'h-full flex-col dark:bg-zinc-950')}
    >
      {children}
    </div>
  )
}
