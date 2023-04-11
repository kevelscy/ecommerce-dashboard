import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Link from 'next/link'

type LinkNavigationProps = {
  to: '/dashboard' |
  '/tienda/productos' |
  '/tienda/productos/categorias' |
  '/usuarios' |
  '/pedidos' |
  '/vendedores' |
  '/cupones' |
  '/transacciones' |
  '/estadisticas' |
  '/mi-cuenta'
  label: string
  icon?: ReactNode
}

export const LinkNavigation = ({ to, label, icon }: LinkNavigationProps) => {
  const router = useRouter()

  return (
    <Link
      href={`${to}`}
      className={
        `border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 
        ${router.pathname.includes(to) && 'border-2 border-gray-300 bg-gray-300'} select-none`
      }
    >
      <div>{icon}</div>
      <span className='pl-2 mt-0.5'>{label}</span>
    </Link>
  )
}
