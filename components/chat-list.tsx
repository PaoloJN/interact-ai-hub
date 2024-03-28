import { UIState } from '@/lib/chat/actions'

export interface ChatList {
  messages: UIState
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-background/30' : 'bg-white dark:bg-background/60'}`}
        >
          <div className="relative mx-auto max-w-2xl px-4 p-6 md:p-8">
            {message.display}
          </div>
        </div>
      ))}
    </div>
  )
}
