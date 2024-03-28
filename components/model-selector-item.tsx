'use client'

import * as React from 'react'
import { useMutationObserver } from '@/lib/hooks/use-mutation-observer'
import { CommandItem } from '@/components/ui/command'
import { getModelIcon } from '@/components/ui/icons'
import { CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface ModelItemProps {
  model: any
  isSelected: boolean
  onSelect: () => void
  onPeek: (model: any) => void
}

export function ModelItem({
  model,
  isSelected,
  onSelect,
  onPeek
}: ModelItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const icon = getModelIcon(model.created_by)

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
      <span className="mr-2">{icon}</span>
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
