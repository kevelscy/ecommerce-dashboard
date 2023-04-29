import { create } from 'zustand'

interface IDrawerAtom {
  isOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  toggleDrawer: () => void
}

export const useDrawerStore = create<IDrawerAtom>(set => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  toggleDrawer: () => set(prevState => ({ isOpen: !prevState.isOpen }))
}))
