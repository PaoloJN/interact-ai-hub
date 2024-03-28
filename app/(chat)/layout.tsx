import { SidebarDesktop } from '@/components/sidebar-desktop'

import { PromptLibrary } from '@/components/prompt-library'
import { ChatHistory } from '@/components/chat-history'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    // h-[calc(100vh_-_theme(spacing.16))]
    <div className="relative flex h-screen overflow-hidden">
      <SidebarDesktop side="left">
        <ChatHistory />
      </SidebarDesktop>
      {children}
      <SidebarDesktop side="right">
        <PromptLibrary />
      </SidebarDesktop>
    </div>
  )
}
