'use client'

import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { PopoverProps } from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'
import { useMutationObserver } from '@/lib/hooks/use-mutation-observer'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import { MetaLlama, Mistral } from '@/components/ui/icons'

import Image from 'next/image'

// interface ModelSelectorProps extends PopoverProps {
//   types: readonly ModelType[]
//   models: Model[]
// }

export const types = ['GPT-3', 'Codex'] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  // description: string
  // strengths?: string
  // type: Type
}

export const models: any = [
  // {
  //   id: '1',
  //   name: 'Claude-1',
  //   family: 'Claude',
  //   compony: 'Anthropic',
  //   type: 'Proprietary',
  //   properties: {
  //     description:
  //       'A faster, cheaper yet still very capable version of Claude, which can handle a range of tasks including casual dialogue, text analysis, summarization, and document comprehension.',
  //     context: '100,000 tokens',
  //     inputPricing: '$1.63 / million tokens',
  //     outputPricing: '$5.51 / million tokens'
  //   }
  // },
  // {
  //   id: '2',
  //   name: 'Claude-2'
  // },
  // {
  //   id: '3',
  //   name: 'Claude-3-opus'
  // },
  // {
  //   id: '4',
  //   name: 'Claude-3-sonnet'
  // },
  // {
  //   id: '5',
  //   name: 'Claude-3-haiku'
  // },
  {
    id: '6',
    compony: 'Meta',
    name: 'llama-v2-7b-chat',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '7',
    compony: 'Meta',
    name: 'llama-v2-7b-chat',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '8',
    compony: 'Meta',
    name: 'llama-v2-13b-chat',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '9',
    compony: 'Meta',
    name: 'llama-v2-70b-chat',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '10',
    compony: 'Meta',
    name: 'llama-v2-70b-chat-groq',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '11',
    compony: 'Meta',
    name: 'codelama-34b-instruct',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '12',
    compony: 'Meta',
    name: 'codelama-70b-instruct',
    icon: (
      <MetaLlama
        width={16}
        height={16}
        className="size-4 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '13',
    compony: 'Mistral',
    name: 'mistral-7b-instruct-4k',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '14',
    compony: 'Mistral',
    name: 'mistral-8x7b',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '15',
    compony: 'Mistral',
    name: 'mistral-8x7b-groq',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '16',
    compony: 'Mistral',
    name: 'mistral-small',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '17',
    compony: 'Mistral',
    name: 'mistral-medium',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  },
  {
    id: '18',
    compony: 'Mistral',
    name: 'mistral-large',
    icon: (
      <Mistral
        width={16}
        height={16}
        className="size-3.5 align-middle block shrink-0 mr-2"
      />
    )
  }
]

export function ModelSelector() {
  const [open, setOpen] = React.useState(false)
  const [selectedModel, setSelectedModel] = React.useState<Model>(models[0])
  const [peekedModel, setPeekedModel] = React.useState<Model>(models[0])

  return (
    <div className="ml-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a model"
            className="w-full justify-between"
          >
            {selectedModel && selectedModel.icon}
            {selectedModel ? (
              <span className="truncate text-xs">
                {selectedModel.compony} - {selectedModel.name}
              </span>
            ) : (
              'Select a model...'
            )}
            <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-72 p-0">
          <Command loop>
            <CommandInput placeholder="Search Models..." />
            <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden h-[var(--cmdk-list-height)] md:max-h-[450px] z-50">
              <CommandEmpty>No Models found.</CommandEmpty>
              {/* <HoverCardTrigger /> */}
              <CommandGroup>
                {models.map(model => (
                  <ModelItem
                    key={model.id}
                    model={model}
                    isSelected={selectedModel?.id === model.id}
                    onPeek={model => setPeekedModel(model)}
                    onSelect={() => {
                      setSelectedModel(model)
                      setOpen(false)
                    }}
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

interface ModelItemProps {
  model: Model
  isSelected: boolean
  onSelect: () => void
  onPeek: (model: Model) => void
}

function ModelItem({ model, isSelected, onSelect, onPeek }: ModelItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'aria-selected') {
          onPeek(model)
        }
      }
    }
  })

  return (
    <CommandItem
      key={model.id}
      onSelect={onSelect}
      ref={ref}
      className="text-xs aria-selected:bg-zinc-100 aria-selected:text-black"
    >
      {model.icon}
      <span className="truncate max-w-[200px] @sm:max-w-[300px] text-xs">
        {model.name}
      </span>
      <CheckIcon
        className={cn(
          'ml-auto size-4',
          isSelected ? 'opacity-100' : 'opacity-0'
        )}
      />
    </CommandItem>
  )
}
