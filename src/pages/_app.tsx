import { AppProps, NextPage, ReactElement, ReactNode } from '@/lib/types'
import { useLoadingPage } from '@/lib/hooks/useLoadingPage'

import { LoadingPage } from '@/components/layout/LoadingPage'
import { Toaster } from '@/components/ui'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function EcommerceAdminApp ({ Component, pageProps }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className='relative'>
      <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />

      {getLayout(<Component {...pageProps} />)}

      <Toaster />
      <Analytics />
    </div>
  )
}
