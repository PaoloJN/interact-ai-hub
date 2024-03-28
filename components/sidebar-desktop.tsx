// import { Sidebar } from '@/components/sidebar'

// import { ChatHistory } from '@/components/chat-history'

// export async function SidebarDesktop() {
//   return (
//     <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
//       {/* @ts-ignore */}
//       <ChatHistory />
//     </Sidebar>
//   )
// }

import { Sidebar } from '@/components/sidebar'

import { cn } from '@/lib/utils'

interface SidebarDesktopProps {
  side: 'left' | 'right'
  children: React.ReactNode
}

export async function SidebarDesktop({ children, side }: SidebarDesktopProps) {
  return (
    <Sidebar
      side={side}
      className={cn(
        'peer absolute inset-y-0 z-30 hidden bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]',
        side === 'left'
          ? 'border-r left-0 -translate-x-full'
          : 'border-l right-0 translate-x-full'
      )}
    >
      {children}
    </Sidebar>
  )
}

// export async function SidebarDesktopRight() {
//   return (
//     <Sidebar
//       side="right"
//       className={cn(
//         'peer absolute inset-y-0 z-30 hidden  border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px] right-0 translate-x-full'
//       )}
//     >
//       {/* <ChatHistory /> */}
//       <PromptLibrary />
//     </Sidebar>
//   )
// }

// export async function SidebarDesktopLeft() {
//   return (
//     <Sidebar
//       side="left"
//       className={cn(
//         'peer absolute inset-y-0 z-30 hidden  border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px] left-0 -translate-x-full'
//       )}
//     >
//       <ChatHistory />
//     </Sidebar>
//   )
// }
