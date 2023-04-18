import { Card, Flex, Text, Title } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { IconUserShield } from '@tabler/icons-react'

const SupportPage = () => {
  return (
    <div>
      <Title>Soporte Ténico</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Flex justifyContent='center' alignItems='center' className='w-full h-[70vh]'>
        <Card className='max-w-lg mx-auto w-full'>
          <section className='flex justify-center items-center'>
            <IconUserShield size={32} />
          </section>

          <Title className='text-center w-full'>Soporte Técnico</Title>

          <Text className='w-full text-center'>
              Comunícate con nuestro agente de soporte tecnico&nbsp;
            <a
              href='mailto:kevelscy@gmail.com'
              className='underline text-blue-400 hover:text-blue-500'
            >
              kevelscy@gmail.com
            </a>
          </Text>
        </Card>
      </Flex>
    </div>
  )
}

SupportPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Soporte Ténico</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default SupportPage
