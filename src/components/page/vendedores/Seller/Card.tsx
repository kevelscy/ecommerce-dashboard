import { Button, Card, Divider, Text } from '@tremor/react'
import { IconEye } from '@tabler/icons-react'
// import Link from 'next/link'

import { ISeller } from '@/lib/types'

export const SellerCard = (seller: ISeller) => {
  return (
    <Card className='max-w-xs mx-auto text-center' decoration='top' decorationColor='green'>
      <section>
        <img
          className='rounded-full w-16 h-16 bg-slate-500 m-auto object-cover'
          src={seller.picture}
          alt={seller.firstName}
          height={64}
          width={64}
        />
      </section>

      <Text className='font-semibold text-lg text-black'>
        { seller.firstName } { seller.lastName }
      </Text>

      <Divider className='mt-2 mb-3' />

      <section className='text-left'>
        <Text>{ seller.email }</Text>
        <Text>{ seller.phone }</Text>
      </section>

      <Divider className='mt-3 mb-2' />

      {/* <Link href={`/vendedores/${seller.id}`}> */}
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
