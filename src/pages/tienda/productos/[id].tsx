import { useRouter } from 'next/router'
import { Title, Text } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

const ProductDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='h-screen'>
      <Title>Producto {id}</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
    </div>
  )
}

ProductDetailPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Detalle de Producto</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default ProductDetailPage
