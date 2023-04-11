import { create } from 'zustand'
import { removeLocalStorage } from '@/lib/utils/localStorage'
import { IAuth } from '@/lib/types/auth'

interface IAuthAtom {
  auth: IAuth | null
  setAuth: (auth: IAuth) => void
  removeAuth: () => void
}

export const useAuthStore = create<IAuthAtom>(set => ({
  auth: null,

  setAuth: (auth) => set({ auth }),

  removeAuth: () => {
    removeLocalStorage('accessToken')
    set({ auth: null })
  }
}))
