import { Title, Text } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

import { ProductCard } from '@/components/common/Product'
import { ProductListCards } from '@/components/common/Product/ListCards'

const CategoryProductsPage = () => {
  return (
    <div className='h-screen'>
      <Title>Categoria de Productos</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <ProductListCards className='mt-2'>
        <ProductCard />
      </ProductListCards>
    </div>
  )
}

CategoryProductsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Categoria de Productos</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default CategoryProductsPage
