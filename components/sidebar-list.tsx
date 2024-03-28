import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { cache } from 'react'

interface SidebarListProps {
  children?: React.ReactNode
}

const loadChats = cache(async () => {
  const chats = await getChats()
  return chats?.reverse()
})

export async function SidebarList({}: SidebarListProps) {
  const chats = await loadChats()

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium">Chat History</h4>
      </div>
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-1 px-3">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
        <ClearHistory clearChats={clearChats} isEnabled={chats?.length > 0} />
      </div>
    </div>
  )
}
