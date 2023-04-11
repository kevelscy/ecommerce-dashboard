import { Title, Text } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

import { ProductCard } from '@/components/common/Product'
import { ProductListCards } from '@/components/common/Product/ListCards'

const OrdersPage = () => {
  return (
    <div className='h-screen'>
      <Title>Pedidos</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <ProductListCards className='mt-2'>
        <ProductCard />
      </ProductListCards>
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
