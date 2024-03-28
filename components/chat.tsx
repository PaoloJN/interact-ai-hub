'use client'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useEffect, useState } from 'react'
import { useUIState, useAIState } from 'ai/rsc'
import { usePathname, useRouter } from 'next/navigation'
import { Message } from '@/lib/chat/actions'
import { useScrollAnchor } from '@/lib/hooks/use-scroll-anchor'
import { Header } from './header'
import { Models } from '@/lib/types'
import { useSidebar } from '@/lib/hooks/use-sidebar'
// import { toast } from 'sonner'

import { useInput } from '@/lib/hooks/use-form-input'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
  models: Models
}

export function Chat({ id, className, models }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  // const [input, setInput] = useState('')
  const { inputValue, setInputValue } = useInput()
  const [messages] = useUIState()
  const [aiState] = useAIState()

  const [_, setNewChatId] = useLocalStorage('newChatId', id)

  useEffect(() => {
    if (!path.includes('chat') && messages.length === 1) {
      window.history.replaceState({}, '', `/chat/${id}`)
    }
  }, [id, path, messages])

  useEffect(() => {
    const messagesLength = aiState.messages?.length
    if (messagesLength === 2) {
      router.refresh()
    }
  }, [aiState.messages, router])

  useEffect(() => {
    setNewChatId(id)
    setInputValue('')
  }, [])

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor()

  const { isLeftSidebarOpen, isRightSidebarOpen } = useSidebar()

  return (
    <div
      // className="group w-full overflow-auto duration-300 ease-in-out pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px] no-scrollbar"
      className={cn(
        'group w-full overflow-auto duration-300 ease-in-out pl-0 no-scrollbar',
        isLeftSidebarOpen ? 'lg:pl-[250px] xl:pl-[300px]' : '',
        isRightSidebarOpen ? 'lg:pr-[250px] xl:pr-[300px]' : ''
      )}
      ref={scrollRef}
    >
      <Header models={models} />
      <div className={cn('pb-[200px]', className)} ref={messagesRef}>
        {messages.length ? <ChatList messages={messages} /> : <EmptyScreen />}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  )
}
