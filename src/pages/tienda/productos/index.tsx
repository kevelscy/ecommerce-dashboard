import { Title, Text, Flex, Dropdown, DropdownItem, Card, TextInput } from '@tremor/react'
import { IconLayoutCards, IconLayoutList, IconSearch } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { getProducts } from '@/lib/services/products'
import { IProduct } from '@/lib/types'

import { ProductCard } from '@/components/common/Product'
import { ProductListCards } from '@/components/common/Product/ListCards'
import { ProductList } from '@/components/common/Product/List'
import { useRouter } from 'next/router'

const ProductsPage = () => {
  const { handleSubmit, reset, register } = useForm()
  const [products, setProducts] = useState<IProduct[]>([])
  const [layout, setLayout] = useState<'LIST' | 'CARDS'>('CARDS')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  const handleToggleLayout = (layoutValue: string) => {
    setLayout(layoutValue as 'LIST' | 'CARDS')
  }

  useEffect(() => {
    (async () => {
      const dataProducts = await getProducts()
      setProducts(dataProducts)
      setIsLoading(false)
    })()
  }, [])

  return (
    <div className='min-h-screen h-full'>
      <Flex>
        <div>
          <Title className='text-2xl font-bold'>Productos</Title>
          <Text>Listado de productos</Text>
        </div>

        <Card className='max-w-xs'>
          <Text>Cambiar visualización de los productos</Text>

          <Dropdown
            className='mt-2'
            onValueChange={handleToggleLayout}
            placeholder='Selecciona una opción'
            value={layout}
          >
            <DropdownItem value='LIST' text='Lista' icon={IconLayoutList} />
            <DropdownItem value='CARDS' text='Tarjetas' icon={IconLayoutCards} />
          </Dropdown>
        </Card>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)} className='max-w-xs w-full'>
        <TextInput
          {...register('searchProduct')}
          icon={IconSearch}
          placeholder='Buscar producto'
        />
      </form>

      {
        isLoading
          ? (
            <div className='mt-10'>
              <Text className='text-2xl font-bold'>Cargando...</Text>
            </div>
          )
          : layout === 'CARDS'
            ? (
              <ProductListCards className='mt-10 gap-5'>
                { products.map((product: IProduct) => <ProductCard key={product.id} {...product} />) }
              </ProductListCards>
            )
            : (<ProductList products={products} router={router} />)
      }

    </div>
  )
}

ProductsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Productos</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default ProductsPage
