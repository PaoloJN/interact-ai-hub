'use client'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useEffect, useState } from 'react'
import { useUIState, useAIState } from 'ai/rsc'
import { Session } from '@/lib/types'
import { usePathname, useRouter } from 'next/navigation'
import { Message } from '@/lib/chat/actions'
import { useScrollAnchor } from '@/lib/hooks/use-scroll-anchor'
import { Header } from './header'
// import { toast } from 'sonner'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
  models?: any
}

export function Chat({ id, className, models }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [input, setInput] = useState('')
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
    // print ai state
    // console.log('Client AI State')
    // console.log(aiState)
  })

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor()

  return (
    <div
      className="group w-full overflow-auto duration-300 ease-in-out pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px] no-scrollbar"
      ref={scrollRef}
    >
      <Header models={models} />
      <div
        // className={cn('pb-[200px] pt-6 md:pt-12', className)}
        className={cn('pb-[200px]', className)}
        ref={messagesRef}
      >
        {messages.length ? <ChatList messages={messages} /> : <EmptyScreen />}
        <div className="h-px w-full" ref={visibilityRef} />
      </div>
      <ChatPanel
        id={id}
        input={input}
        setInput={setInput}
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
    </div>
  )
}
