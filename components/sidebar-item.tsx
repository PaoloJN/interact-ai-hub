'use client'

import * as React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

import { buttonVariants } from '@/components/ui/button'
import { IconMessage, IconUsers, getModelIcon } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { type Chat } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useAIState } from 'ai/rsc'

interface SidebarItemProps {
  index: number
  chat: Chat
  children: React.ReactNode
}

export function SidebarItem({ index, chat, children }: SidebarItemProps) {
  const pathname = usePathname()

  const isActive = pathname === chat.path
  const [newChatId, setNewChatId] = useLocalStorage('newChatId', null)
  const shouldAnimate = index === 0 && isActive && newChatId

  const icon = getModelIcon(chat.model.created_by)

  if (!chat?.id) return null

  return (
    <motion.div
      className="relative"
      variants={{
        initial: {
          height: 0,
          opacity: 0
        },
        animate: {
          height: 'auto',
          opacity: 1
        }
      }}
      initial={shouldAnimate ? 'initial' : undefined}
      animate={shouldAnimate ? 'animate' : undefined}
      transition={{
        duration: 0.25,
        ease: 'easeIn'
      }}
    >
      <div className="absolute left-3 top-[8px] flex size-6 items-center justify-center">
        <span className="mr-2">{icon}</span>
      </div>
      <Link
        href={chat.path}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'group w-full px-10 py-[20px] transition-colors hover:bg-zinc-300/40 dark:hover:bg-zinc-300/10',
          isActive && 'bg-background pr-16 font-semibold dark:bg-zinc-900'
        )}
      >
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
          title={chat.title}
        >
          <span className="whitespace-nowrap">
            {shouldAnimate ? (
              chat.title.split('').map((character, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -100
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    }
                  }}
                  initial={shouldAnimate ? 'initial' : undefined}
                  animate={shouldAnimate ? 'animate' : undefined}
                  transition={{
                    duration: 0.25,
                    ease: 'easeIn',
                    delay: index * 0.05,
                    staggerChildren: 0.05
                  }}
                  onAnimationComplete={() => {
                    if (index === chat.title.length - 1) {
                      setNewChatId(null)
                    }
                  }}
                >
                  {character}
                </motion.span>
              ))
            ) : (
              <span>{chat.title}</span>
            )}
          </span>
        </div>
      </Link>
      {isActive && <div className="absolute right-2 top-1">{children}</div>}
    </motion.div>
  )
}
