'use client'

import * as React from 'react'
import {
  CaretSortIcon,
  CheckIcon,
  MixerHorizontalIcon
} from '@radix-ui/react-icons'
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

import Image from 'next/image'
import { useAIState } from 'ai/rsc'
import { IconDownload, getModelIcon } from './ui/icons'

interface ModelSelectorProps {
  // TODO: add types
  models: any
}

export function ModelSelector({ models }: ModelSelectorProps) {
  // @ts-ignore
  const installed = Object.values(models).filter(model => model.installed)

  const [open, setOpen] = React.useState(false)
  const [selectedModel, setSelectedModel] = React.useState<any>(installed[0])
  // const [peekedModel, setPeekedModel] = React.useState<any>(models[0])

  const [aiState, setAIState] = useAIState()

  const icon = getModelIcon(selectedModel.created_by)

  return (
    <div className="ml-2 space-x-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a model"
            className="min-w-56 justify-between"
          >
            <div className="flex flex-row">
              <span>{icon}</span>
              <span className="truncate text-xs">
                {selectedModel.created_by} - {selectedModel.label}
              </span>
            </div>

            <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-56 p-0">
          <Command loop>
            <CommandInput placeholder="Search Models..." />
            {/* KEEP: h-[var(--cmdk-list-height)] */}
            <CommandList className="h-fit max-h-[300px] overflow-y-auto overflow-x-hidden md:max-h-[450px] z-50">
              <CommandEmpty>No Models found.</CommandEmpty>
              {/* <HoverCardTrigger /> */}
              <CommandGroup heading="Private AI">
                {/* @ts-ignore */}
                {/* {models.map(model => (
                  <ModelItem
                    key={model.id}
                    model={model}
                    isSelected={selectedModel?.id === model.id}
                    // onPeek={model => setPeekedModel(model)}
                    onSelect={() => {
                      setSelectedModel(model)
                      // update ai state with selected model
                      setAIState({ ...aiState, model: model })

                      console.log('client', aiState)
                      setOpen(false)
                    }}
                  />
                ))} */}

                {installed.map(model => (
                  <ModelItem
                    key={model.id}
                    model={model}
                    isSelected={selectedModel?.id === model.id}
                    // onPeek={model => setPeekedModel(model)}
                    onSelect={() => {
                      setSelectedModel(model)
                      // update ai state with selected model
                      setAIState({ ...aiState, model: model })

                      console.log('client', aiState)
                      setOpen(false)
                    }}
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Button variant="outline" size="icon">
        <MixerHorizontalIcon />
      </Button>
    </div>
  )
}

interface ModelItemProps {
  model: any
  isSelected: boolean
  onSelect: () => void
  // onPeek: (model: any) => void
}

function ModelItem({ model, isSelected, onSelect }: ModelItemProps) {
  // const ref = React.useRef<HTMLDivElement>(null)

  // useMutationObserver(ref, mutations => {
  //   for (const mutation of mutations) {
  //     if (mutation.type === 'attributes') {
  //       if (mutation.attributeName === 'aria-selected') {
  //         onPeek(model)
  //       }
  //     }
  //   }
  // })

  const icon = getModelIcon(model.created_by)

  return (
    <CommandItem
      key={model.id}
      onSelect={onSelect}
      // ref={ref}
      className="text-xs aria-selected:bg-zinc-100 aria-selected:text-black"
    >
      <span>{icon}</span>
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
