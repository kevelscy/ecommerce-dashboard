import { Title, Text, Flex, Dropdown, DropdownItem, Card, TextInput, Button } from '@tremor/react'
import { IconLayoutCards, IconLayoutList, IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Head from 'next/head'

import { IDistributor } from '@/lib/types/distributors'
import { distributors } from '@/lib/utils/dummyData'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DistributorListCards, DistributorsList } from '@/components/page/repartidores/Distributor'
import { DistributorCard } from '@/components/page/repartidores/Distributor/Card'

const DistributorsPage = () => {
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
        <Title className='text-2xl font-bold'>Repartidores</Title>

        <Card className='max-w-xs hidden lg:block'>
          <Text>Cambiar visualización de los repartidores</Text>

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
              <DistributorListCards className='mt-6 md:mt-10 gap-5'>
                { distributors.map((distributor: IDistributor) => <DistributorCard key={distributor.id} {...distributor} />) }
              </DistributorListCards>
            )
            : (<DistributorsList distributors={distributors} />)
      }
    </div>
  )
}

DistributorsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Repartidores</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default DistributorsPage
