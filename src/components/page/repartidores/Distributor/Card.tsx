import { Button, Card, Divider, Text } from '@tremor/react'
import { IconEye } from '@tabler/icons-react'
// import Link from 'next/link'

import { IDistributor } from '@/lib/types/distributors'

export const DistributorCard = (distributor: IDistributor) => {
  return (
    <Card className='max-w-xs mx-auto text-center' decoration='top' decorationColor='indigo'>
      <section>
        <img
          className='rounded-full w-16 h-16 bg-slate-500 m-auto object-cover'
          src={distributor.picture}
          alt={distributor.firstName}
          height={64}
          width={64}
        />
      </section>

      <Text className='font-semibold text-lg text-black'>
        { distributor.firstName } { distributor.lastName }
      </Text>

      <Divider className='mt-2 mb-3' />

      <section className='text-left'>
        <Text>{ distributor.email }</Text>
        <Text>{ distributor.phone }</Text>
      </section>

      <Divider className='mt-3 mb-2' />

      {/* <Link href={`/repartidores/${distributor.id}`}> */}
      <Button
        icon={IconEye}
        variant='secondary'
        className='w-full mt-2'
        size='xs'
      >
        Ver Perfil
      </Button>
      {/* </Link> */}
    </Card>
  )
}
