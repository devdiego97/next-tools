// context/AppContext.tsx
'use client' // Necessário para componentes client-side no Next.js 13+

import { createContext, useContext, ReactNode, useState } from 'react'

interface AppContextType {
  onModal:boolean
  handleModal: () => void
  user: User | null
  setUser: (user: User | null) => void
}

interface User {
  name: string
  email: string
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [onModal, toggleModal] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  
  const handleModal = () => {
    toggleModal(prev => prev === false ? true : false )
  }

  return (
    <AppContext.Provider value={{ onModal, handleModal, user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}