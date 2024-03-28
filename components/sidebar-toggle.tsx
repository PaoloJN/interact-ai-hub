// 'use client'

// import * as React from 'react'

// import { useSidebar } from '@/lib/hooks/use-sidebar'
// import { Button } from '@/components/ui/button'
// import { IconSidebar } from '@/components/ui/icons'

// export function SidebarToggle() {
//   const { toggleSidebar } = useSidebar()

//   return (
//     <Button
//       variant="ghost"
//       className="-ml-2 hidden size-9 p-0 lg:flex"
//       onClick={() => {
//         toggleSidebar()
//       }}
//     >
//       <IconSidebar className="size-6" />
//       <span className="sr-only">Toggle Sidebar</span>
//     </Button>
//   )
// }

'use client'

import * as React from 'react'

import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Button } from '@/components/ui/button'
import { IconSidebar } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface SidebarToggleProps {
  side: 'left' | 'right'
}

export function SidebarToggle({ side }: SidebarToggleProps) {
  const { toggleLeftSidebar, toggleRightSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      className="hidden size-9 p-0 lg:flex"
      onClick={() => {
        side === 'right' ? toggleRightSidebar() : toggleLeftSidebar()
      }}
    >
      <IconSidebar
        className={cn(side === 'right' ? 'rotate-180' : '', 'size-6')}
      />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
