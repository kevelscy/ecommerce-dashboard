import { Title, Text, Flex, Dropdown, DropdownItem, Card, TextInput, Button } from '@tremor/react'
import { IconLayoutCards, IconLayoutList, IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import { sellers } from '@/lib/utils/dummyData'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { SellerCard, SellerListCards, SellersList } from '@/components/page/vendedores/Seller'
import { ISeller } from '@/lib/types'

const SellersPage = () => {
  const { handleSubmit, reset, register } = useForm()
  const [layout, setLayout] = useState<'LIST' | 'CARDS'>('CARDS')

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  const handleToggleLayout = () => {
    setLayout(prevState => {
      if (prevState === 'CARDS') return 'LIST'
      if (prevState === 'LIST') return 'CARDS'
    })
  }

  return (
    <div className='min-h-screen h-full'>
      <Flex className='flex-col lg:flex-row'>
        <Title className='text-2xl font-bold'>Vendedores</Title>

        <Card className='max-w-xs hidden lg:block'>
          <Text>Cambiar visualización de los vendedores</Text>

          <Dropdown
            className='mt-2'
            onValueChange={setLayout as any}
            placeholder='Selecciona una opción'
            value={layout}
          >
            <DropdownItem value='LIST' text='Lista' icon={IconLayoutList} />
            <DropdownItem value='CARDS' text='Tarjetas' icon={IconLayoutCards} />
          </Dropdown>
        </Card>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 lg:mt-0 lg:max-w-xs w-full flex justify-between items-center'>
        <TextInput
          {...register('searchProduct')}
          icon={IconSearch}
          placeholder='Buscar Repartidor'
          className='mr-4'
        />

        <Button variant='secondary' size='xs' onClick={handleToggleLayout} className='lg:hidden'>
          {
            layout === 'CARDS'
              ? <IconLayoutList size={22} />
              : <IconLayoutCards size={22} />
          }
        </Button>
      </form>

      {
        // eslint-disable-next-line no-constant-condition
        false // loading
          ? (
            <div className='mt-6 md:mt-10'>
              <Text className='text-2xl font-bold'>Cargando...</Text>
            </div>
          )
          : layout === 'CARDS'
            ? (
              <SellerListCards className='mt-6 md:mt-10 gap-5'>
                { sellers.map((seller: ISeller) => <SellerCard key={seller.id} {...seller} />) }
              </SellerListCards>
            )
            : (<SellersList sellers={sellers} />)
      }
    </div>
  )
}

SellersPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Vendedores</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default SellersPage
