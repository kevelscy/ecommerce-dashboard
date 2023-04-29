import type { ReactNode } from '@/lib/types'
import { Drawer } from '@/components/layout/Drawer'
import { DrawerMobile } from '@/components/layout/Drawer/Responsive'
import { IconMenu2 } from '@tabler/icons-react'
import { useDrawerStore } from '@/lib/store/Drawer'
import { Button } from '@tremor/react'

export const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  const { openDrawer } = useDrawerStore()

  return (
    <div className='authLayout-container'>
      <Drawer />
      <DrawerMobile />

      <Button
        onClick={openDrawer}
        variant='secondary'
        size='xs'
        color='blue'
        className='px-1.5 absolute top-3 right-3'
      >
        <IconMenu2 size={18} />
      </Button>

      <main className='p-6 sm:p-10'>
        {children}
      </main>
    </div>
  )
}
