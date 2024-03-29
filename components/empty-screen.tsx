import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight, getModelIcon } from '@/components/ui/icons'
import { Card, CardContent } from '@/components/ui/card'
import { useAIState } from 'ai/rsc'

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

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 md:pt-16">
      <Card>
        <div className="px-6 pt-5 text-sm bg-background rounded-t-lg">
          <div className="flex items-center">
            <span className="mr-2">{icon}</span>

            <div className="space-x-1">
              <span className="text-zinc-500 dark:text-zinc-300">Model</span>
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
        <CardContent className="px-6 py-5 text-xs bg-background divide-y">
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Context</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {/* {selected.properties.context} tokens */}
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Input Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {/* {selected.properties.inputPricing} */}
            </div>
          </div>
          <div className="flex items-start py-3">
            <div className="font-medium w-28">Output Pricing</div>
            <div className="flex-1 text-zinc-600 dark:text-zinc-400">
              {/* {selected.properties.outputPricing} */}
            </div>
          </div>
          {/* <p className="leading-normal text-muted-foreground">
            You can start a conversation here or try the following examples:
          </p>
          <div className="mt-4 flex flex-col items-start space-y-2">
            {exampleMessages.map((message, index) => (
              <Button
                key={index}
                variant="link"
                className="h-auto p-0 text-base"
                onClick={() => setInput(message.message)}
              >
                <IconArrowRight className="mr-2 text-muted-foreground" />
                {message.heading}
              </Button>
            ))}
          </div> */}
        </CardContent>
        <div className="px-6 py-5 text-xs font-medium border-t rounded-b-lg bg-zinc-100/75 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between space-x-4">
              <a
                href="https://ai.meta.com/llama/"
                className="inline-flex items-center text-zinc-500"
              >
                <span>Model Page</span>
                <svg
                  fill="none"
                  height="16"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="size-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                href="https://readme.fireworks.ai/page/pricing"
                className="inline-flex items-center text-zinc-500"
              >
                <span>Pricing</span>
                <svg
                  fill="none"
                  height="16"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="size-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
            <a
              href="https://ai.meta.com/llama/"
              className="inline-flex items-center text-zinc-500"
            >
              <span>Website</span>
              <svg
                fill="none"
                height="16"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="16"
                aria-hidden="true"
                className="size-3 ml-1"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
