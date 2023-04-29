import { IconUser, IconChartPie, IconShoppingBag, IconCategory, IconBuildingStore, IconLogout, IconUsersGroup, IconUsers, IconTicket, IconCash, IconChartHistogram, IconClipboardList, IconUserCircle, IconUserShield, IconTruckDelivery, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
import { getLocalStorage } from '@/lib/utils/localStorage'
import { useDrawerStore } from '@/lib/store/Drawer'
import { signOut } from '@/lib/services/auth'

import { LinkNavigationNested } from './LinkNavigationNested'
import { LinkNavigation } from './LinkNavigation'
import { Badge, Button, Divider } from '@tremor/react'

export const DrawerMobile = () => {
  const [, setIsLoading] = useState(false)
  const { isOpen, closeDrawer } = useDrawerStore()

  const logout = async () => {
    setIsLoading(true)
    const accessToken = getLocalStorage('accessToken')
    const { error } = await signOut(accessToken)

    if (error) {
      setIsLoading(false)
      handleFetchErrors(error.status, error.message)
      return
    }

    setIsLoading(false)
  }

  return (
    <div
      id='drawer-navigation'
      tabIndex={-1}
      aria-labelledby='drawer-navigation-label'
      className={
        `${isOpen ? '-translate-x-0' : '-translate-x-full'} h-screen fixed overflow-auto top-0 left-0 z-50 w-full bg-white md:hidden py-4`
      }
    >
      <section className='flex justify-start items-center text-gray-500 capitalize relative'>
        <div className='p-4 mr-3 border border-gray-200 shadow-sm rounded-md'>
          <IconUser />
        </div>

        <div className='text-left'>
          {/* <span>{ auth?.firstName } { auth?.lastName }</span> <br /> */}
          <span>Kevin Blanco</span> <br />
          <Badge color='indigo' className='rounded-md text-xs mt-1' size='md'>Administrador</Badge>
        </div>

        <Button
          onClick={closeDrawer}
          variant='secondary'
          size='xs'
          color='red'
          className='px-1.5 absolute top-3 right-3'
        >
          <IconX size={18} />
        </Button>
      </section>

      <div className='w-full py-4 overflow-y-auto'>
        <ul className='space-y-2'>
          <li>
            <LinkNavigation
              to='/dashboard'
              label='Dashboard'
              icon={<IconChartPie />}
            />
          </li>

          <li>
            <LinkNavigationNested
              label='Tienda'
              icon={<IconBuildingStore />}
              subLinks={[
                {
                  label: 'Categorias',
                  to: '/tienda/categorias',
                  icon: <IconCategory />
                },
                {
                  label: 'Productos',
                  to: '/tienda/productos',
                  icon: <IconShoppingBag />
                }
              ]}
            />
          </li>

          <li>
            <LinkNavigation
              to='/pedidos'
              label='Pedidos'
              icon={<IconClipboardList />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/cupones'
              label='Cupones'
              icon={<IconTicket />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/usuarios'
              label='Usuarios'
              icon={<IconUsers />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/vendedores'
              label='Vendedores'
              icon={<IconUsersGroup />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/repartidores'
              label='Repartidores'
              icon={<IconTruckDelivery />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/transacciones'
              label='Transacciones'
              icon={<IconCash />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/estadisticas'
              label='Estadisticas'
              icon={<IconChartHistogram />}
            />
          </li>

        </ul>

        <Divider />

        <ul className='mt-2 space-y-2'>
          <li>
            <LinkNavigation
              to='/mi-cuenta'
              label='Mi Cuenta'
              icon={<IconUserCircle />}
            />
          </li>

          <li>
            <LinkNavigation
              to='/soporte-tecnico'
              label='Soporte Tecnico'
              icon={<IconUserShield />}
            />
          </li>

          <li>
            <button
              onClick={logout}
              className='w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 select-none'
            >
              <IconLogout />
              <span className='pl-2'>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
