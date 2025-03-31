// stores/useStore.ts
import { TNotes } from '@/data/notes'
import { Ttask } from '@/data/tasks'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface StoreState {
  note: TNotes | null
  task: Ttask | null
  handleNote: (newNote: TNotes | null) => void
  handleTask: (newTask: Ttask | null) => void
  reset: () => void
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        note: null,
        task: null,
        handleNote: (newNote) => set({ note: newNote }),
        handleTask: (newTask) => set({ task: newTask }),
        reset: () => set({ note: null, task: null }),
      }),
      {
        name: 'data-storage', 
      }
    )
  )
)