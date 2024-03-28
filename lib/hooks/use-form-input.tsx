'use client'

import * as React from 'react'

interface InputContextType {
  inputValue: string
  setInputValue: (value: string) => void
}

const InputContext = React.createContext<InputContextType | undefined>(
  undefined
)

export function useInput() {
  const context = React.useContext(InputContext)
  if (!context) {
    throw new Error('useInput must be used within an InputProvider')
  }
  return context
}

// Provider component
interface InputProviderProps {
  children: React.ReactNode
}

export function InputProvider({ children }: InputProviderProps) {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  )
}
