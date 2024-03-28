import { Separator } from '@/components/ui/separator'
import { UIState } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export interface ChatList {
  messages: UIState
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    // <div className="relative mx-auto max-w-2xl px-4">
    <div>
      {/* {!isShared && !session ? (
        <>
          <div className="group relative mb-4 flex items-start md:-ml-12">
            <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm">
              <ExclamationTriangleIcon />
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
              <p className="text-muted-foreground leading-normal">
                Please{' '}
                <Link href="/login" className="underline">
                  log in
                </Link>{' '}
                or{' '}
                <Link href="/signup" className="underline">
                  sign up
                </Link>{' '}
                to save and revisit your chat history!
              </p>
            </div>
          </div>
          <Separator className="my-4" />
        </>
      ) : null} */}

      {messages.map((message, index) => (
        // if even make bg gray else white
        <div
          key={message.id}
          className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-background/30' : 'bg-white dark:bg-background/60'}`}
        >
          <div className="relative mx-auto max-w-2xl px-4 p-6 md:p-8">
            {message.display}
            {/* {index < messages.length - 1 && <Separator className="my-4" />} */}
          </div>
        </div>
      ))}
    </div>
  )
}
