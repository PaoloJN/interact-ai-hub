import * as React from 'react'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { ModelItem } from './model-selector-item'
import { useAIState } from 'ai/rsc'
import { getModelIcon } from '@/components/ui/icons'
import { Models } from '@/lib/types'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

interface ModelSelectorProps {
  models: Models
}

export function ModelSelector({ models }: ModelSelectorProps) {
  // url and check if include something after chat then don't allow to change model
  const pathname = usePathname()
  const router = useRouter()
  // const router = useRouter()
  const [aiState, setAIState] = useAIState()

  const [open, setOpen] = React.useState(false)
  const [peekedModel, setPeekedModel] = React.useState<any>(models[0])
  const installed = Object.values(models).filter(model => model.installed)

  const [selectedModel, setSelectedModel] = React.useState<any>(
    aiState.model ?? installed[0]
  )

  const icon = getModelIcon(selectedModel.created_by)

  return (
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
            <span className="mr-2">{icon}</span>
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
          <CommandList className="h-fit max-h-[300px] overflow-y-auto overflow-x-hidden md:max-h-[450px] z-50">
            <CommandEmpty>No Models found.</CommandEmpty>
            <CommandGroup heading="Private AI">
              {installed.map(model => (
                <ModelItem
                  key={model.id}
                  model={model}
                  isSelected={selectedModel?.id === model.id}
                  onPeek={model => setPeekedModel(model)}
                  onSelect={() => {
                    if (pathname.includes('/chat/')) {
                      router.push(`/?model=${model.name}`)
                    } else {
                      setSelectedModel(model)
                      setAIState({ ...aiState, model: model })
                      setOpen(false)
                    }
                  }}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
