import type { ReactNode } from '@/lib/types'
import { Drawer } from '@/components/layout/Drawer'

export const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='authLayout-container'>
      <Drawer />

      <main className='p-6 sm:p-10'>
        {children}
      </main>
    </div>
  )
}
