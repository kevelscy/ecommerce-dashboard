import { IconUser, IconChartPie, IconShoppingBag, IconCategory, IconBuildingStore, IconLogout, IconUsersGroup, IconUsers, IconTicket, IconCash, IconChartHistogram, IconClipboardList, IconUserCircle, IconUserShield, IconTruckDelivery } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import { useState } from 'react'
// import { useTheme } from '@/lib/hooks/useTheme'

import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
import { getLocalStorage } from '@/lib/utils/localStorage'
import { useDrawerStore } from '@/lib/store/Drawer'
import { useAuthStore } from '@/lib/store/Auth'
import { signOut } from '@/lib/services/auth'

import { LinkNavigationNested } from './LinkNavigationNested'
import { LinkNavigation } from './LinkNavigation'
import { Badge, Divider } from '@tremor/react'

export const Drawer = () => {
  const { removeAuth } = useAuthStore()
  // const { theme, toggleTheme } = useTheme()
  const [, setIsLoading] = useState(false)
  const { isOpen } = useDrawerStore()
  const router = useRouter()

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
    router.push('/auth/signin')
    removeAuth()
    toast.message('Sesión Cerrada')
  }

  return (
    <div
      id='drawer-navigation'
      tabIndex={-1}
      aria-labelledby='drawer-navigation-label'
      className={
        `${isOpen ? '-translate-x-0' : '-translate-x-full'} authLayout_sidebar bg-white`
      }
    >
      <section className='flex justify-start items-center text-gray-500 capitalize'>
        <div className='p-4 mr-3 border border-gray-200 shadow-sm rounded-md'>
          <IconUser />
        </div>

        <div className='text-left'>
          {/* <span>{ auth?.firstName } { auth?.lastName }</span> <br /> */}
          <span>Kevin Blanco</span> <br />
          <Badge color='indigo' className='rounded-md text-xs mt-1' size='md'>Administrador</Badge>
        </div>
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
