'use client'

import * as React from 'react'

import { SliderProps } from '@radix-ui/react-slider'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components//ui/hover-card'
import { Slider } from '@/components//ui/slider'
import { Label } from '@/components/ui/label'
import { InfoCircledIcon } from '@radix-ui/react-icons'

interface ConfigSliderProps {
  defaultValue: SliderProps['defaultValue']
  label: string
  step?: number
  min_value: number
  max_value: number
  information: string
}

export function ConfigSlider({
  defaultValue,
  label,
  step = 1,
  min_value,
  max_value,
  information
}: ConfigSliderProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Label htmlFor="temperature" className="text-sm">
                {label}
              </Label>
              <HoverCardTrigger asChild>
                <InfoCircledIcon className="size-4 opacity-50" />
              </HoverCardTrigger>
            </div>

            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {value}
            </span>
          </div>
          <Slider
            id={label.toLowerCase()}
            max={max_value}
            min={min_value}
            defaultValue={value}
            step={step}
            onValueChange={setValue}
            className="[&_[role=slider]]:size-[12px]"
            aria-label={label}
          />
        </div>
        <HoverCardContent
          align="center"
          className="w-[260px] text-sm text-center"
        >
          {information}
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
