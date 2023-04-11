import { ToastContainer } from 'react-toastify'
import { ThemeProvider, useTheme } from 'next-themes'

import { AppProps, NextPage, ReactElement, ReactNode } from '@/lib/types'
import { useLoadingPage } from '@/lib/hooks/useLoadingPage'

import { LoadingPage } from '@/components/layout/LoadingPage'

import 'react-toastify/dist/ReactToastify.min.css'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function EcommerceAdminApp ({ Component, pageProps }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const { theme } = useTheme()

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute="class">
      <div className='relative'>
        <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />

        {getLayout(<Component {...pageProps} />)}

        <ToastContainer
          position='bottom-left'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
          theme={theme as any}
        />
      </div>
    </ThemeProvider>
  )
}
