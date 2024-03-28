// 'use client'

// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

// import { Sidebar } from '@/components/sidebar'
// import { Button } from '@/components/ui/button'

// import { IconSidebar } from '@/components/ui/icons'

// interface SidebarMobileProps {
//   children: React.ReactNode
// }

// export function SidebarMobile({ children }: SidebarMobileProps) {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="ghost" className="-ml-2 flex size-9 p-0 lg:hidden">
//           <IconSidebar className="size-6" />
//           <span className="sr-only">Toggle Sidebar</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent
//         side="left"
//         className="inset-y-0 flex h-auto w-[300px] flex-col p-0"
//       >
//         <Sidebar className="flex">{children}</Sidebar>
//       </SheetContent>
//     </Sheet>
//   )
// }

'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'

import { IconSidebar } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface SidebarMobileProps {
  children: React.ReactNode
  side: 'left' | 'right'
}

export function SidebarMobile({ children, side }: SidebarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="-ml-2 flex size-9 p-0 lg:hidden">
          <IconSidebar
            className={cn(side === 'right' ? 'rotate-180' : '', 'size-6')}
          />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={side}
        className={cn(
          'inset-y-0 flex h-auto w-[300px] flex-col p-0',
          side === 'right' ? 'right-0' : 'left-0'
        )}
      >
        <Sidebar side={side} className="flex">
          {children}
        </Sidebar>
      </SheetContent>
    </Sheet>
  )
}
