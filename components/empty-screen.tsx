import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import {
  IconArrowRight,
  IconGitHub,
  IconNextChat,
  getModelIcon
} from '@/components/ui/icons'
import { Card, CardContent } from '@/components/ui/card'
import { useAIState } from 'ai/rsc'

import { prompts } from '@/database/prompts'

import { PromptCardHome } from './prompt-list'
import Link from 'next/link'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

// export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
export function EmptyScreen() {
  const [aiState] = useAIState()
  const selected = aiState.model

  const icon = getModelIcon(selected.created_by)

  // get the first 5 prompts
  const examplePrompts = prompts.slice(87, 91)

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 md:pt-16">
      <Card>
        <div className="px-6 pt-5 text-sm bg-background rounded-t-lg">
          <div className="flex items-center">
            <span className="mr-2 mb-0.5">{icon}</span>

            <div className="space-x-1">
              <span className="text-zinc-500 dark:text-zinc-100">Model</span>
              <span className="text-foreground">/</span>
              <span className="font-medium text-foreground">
                {selected.label}
              </span>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
            {selected.description}
          </div>
        </div>
        <CardContent className="px-6 py-5 text-xs bg-background ">
          {/* <div className="flex items-start py-3">
            <div className="font-medium w-28">Context</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Input Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Output Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
            </div>
          </div> */}
          <div className="text-muted-foreground">
            You can start a conversation here or try the following examples:
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {examplePrompts.map((prompt: any, index: any) => (
              <PromptCardHome key={index} prompt={prompt} />
            ))}
          </div>
        </CardContent>
        <div className="px-6 py-5 text-xs font-medium border-t rounded-b-lg bg-zinc-100/75 dark:bg-background">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-4">
              <Link
                href="/chat"
                className="inline-flex items-center text-zinc-500"
              >
                <ExternalLink href="/chat">
                  <span>Github</span>
                </ExternalLink>
              </Link>
            </div>
            <Link
              href="/chat"
              className="inline-flex items-center text-zinc-500"
            >
              <ExternalLink href="/chat">
                <span>Twitter</span>
              </ExternalLink>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
