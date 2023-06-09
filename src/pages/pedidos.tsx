import { Title, Text } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { OrdersList } from '@/components/page/pedidos/OrdersList'
import { orders } from '@/lib/utils/dummyData'

const OrdersPage = () => {
  return (
    <div className='min-h-screen w-full h-full max-w-6xl m-auto'>
      <Title>Pedidos</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <OrdersList orders={orders} />
    </div>
  )
}

OrdersPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Pedidos</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default OrdersPage
