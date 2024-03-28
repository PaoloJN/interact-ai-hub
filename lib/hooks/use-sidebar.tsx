// 'use client'

// import * as React from 'react'

// const LOCAL_STORAGE_KEY = 'sidebar'

// interface SidebarContext {
//   isSidebarOpen: boolean
//   toggleSidebar: () => void
//   isLoading: boolean
// }

// const SidebarContext = React.createContext<SidebarContext | undefined>(
//   undefined
// )

// export function useSidebar() {
//   const context = React.useContext(SidebarContext)
//   if (!context) {
//     throw new Error('useSidebarContext must be used within a SidebarProvider')
//   }
//   return context
// }

// interface SidebarProviderProps {
//   children: React.ReactNode
// }

// export function SidebarProvider({ children }: SidebarProviderProps) {
//   const [isSidebarOpen, setSidebarOpen] = React.useState(true)
//   const [isLoading, setLoading] = React.useState(true)

//   React.useEffect(() => {
//     const value = localStorage.getItem(LOCAL_STORAGE_KEY)
//     if (value) {
//       setSidebarOpen(JSON.parse(value))
//     }
//     setLoading(false)
//   }, [])

//   const toggleSidebar = () => {
//     setSidebarOpen(value => {
//       const newState = !value
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState))
//       return newState
//     })
//   }

//   if (isLoading) {
//     return null
//   }

//   return (
//     <SidebarContext.Provider
//       value={{ isSidebarOpen, toggleSidebar, isLoading }}
//     >
//       {children}
//     </SidebarContext.Provider>
//   )
// }
'use client'

import * as React from 'react'

const LOCAL_STORAGE_KEY_LEFT = 'leftSidebar'
const LOCAL_STORAGE_KEY_RIGHT = 'rightSidebar'

interface SidebarContext {
  isLeftSidebarOpen: boolean
  isRightSidebarOpen: boolean
  toggleLeftSidebar: () => void
  toggleRightSidebar: () => void
  isLoading: boolean
}

const SidebarContext = React.createContext<SidebarContext | undefined>(
  undefined
)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = React.useState(true)
  const [isRightSidebarOpen, setRightSidebarOpen] = React.useState(true)
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const leftValue = localStorage.getItem(LOCAL_STORAGE_KEY_LEFT)
    const rightValue = localStorage.getItem(LOCAL_STORAGE_KEY_RIGHT)
    if (leftValue) {
      setLeftSidebarOpen(JSON.parse(leftValue))
    }
    if (rightValue) {
      setRightSidebarOpen(JSON.parse(rightValue))
    }
    setLoading(false)
  }, [])

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(value => {
      const newState = !value
      localStorage.setItem(LOCAL_STORAGE_KEY_LEFT, JSON.stringify(newState))
      return newState
    })
  }

  const toggleRightSidebar = () => {
    setRightSidebarOpen(value => {
      const newState = !value
      localStorage.setItem(LOCAL_STORAGE_KEY_RIGHT, JSON.stringify(newState))
      return newState
    })
  }

  if (isLoading) {
    return null
  }

  return (
    <SidebarContext.Provider
      value={{
        isLeftSidebarOpen,
        isRightSidebarOpen,
        toggleLeftSidebar,
        toggleRightSidebar,
        isLoading
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
