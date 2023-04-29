import { Title, Text, Grid, Col, Card, Flex, Divider, Badge, List, ListItem, TextInput, Bold } from '@tremor/react'
import { IconUserCircle } from '@tabler/icons-react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

const MyAccountPage = () => {
  const generalInfo = [
    {
      label: 'ID',
      value: '23443'
    },
    {
      label: 'Activo',
      value: 'Si'
    },
    {
      label: 'Creado',
      value: '11 de abril de 2023'
    }
  ]

  return (
    <div className='min-h-screen w-full h-full max-w-6xl'>
      <Title>Mi Cuenta</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numCols={1} numColsMd={6} className='gap-x-6 gap-y-6 mt-10 relative'>
        <Col numColSpanMd={2} className='md:sticky top-0'>
          <Card>
            <Flex flexDirection='col' justifyContent='center' alignItems='center'>
              <IconUserCircle size={80} />
              <Text className='text-lg font-semibold'>Kevin Blanco</Text>
            </Flex>

            <Divider className='my-4' />

            <List>
              {
                generalInfo.map((item) => (
                  <ListItem key={item.value} className='border-none justify-start py-1'>
                    <span>{item.label}: &nbsp;</span>
                    <span>{item.value}</span>
                  </ListItem>
                ))
              }
            </List>

            <Divider className='mt-4 mb-0' />

            <Badge size='xl' className='w-full rounded-md mt-4 font-bold text-xl' color='indigo'>
              Administrador
            </Badge>
          </Card>
        </Col>

        <Col numColSpanMd={4}>
          <Card>
            <Text className='text-lg font-semibold'>
              Imagen de Perfil
            </Text>

            <Flex flexDirection='col' justifyContent='center' alignItems='center'>
              <IconUserCircle size={110} />
            </Flex>
          </Card>

          <Card className='mt-8'>
            <Text className='text-lg font-semibold'>Información Básica</Text>

            <form className='mt-4 space-y-4'>
              <Flex className='flex-col md:flex-row gap-x-6'>
                <div className='w-full'>
                  <Bold>Nombre</Bold>
                  <TextInput placeholder='Nombre' disabled className='mt-1' />
                </div>

                <div className='w-full mt-4 md:mt-0'>
                  <Bold>Apellido</Bold>
                  <TextInput placeholder='Apellido' disabled className='mt-1' />
                </div>
              </Flex>

              <Flex className='flex-col md:flex-row gap-x-6'>
                <div className='w-full'>
                  <Bold>Teléfono</Bold>
                  <TextInput placeholder='Teléfono' disabled className='mt-1' />
                </div>

                <div className='w-full mt-4 md:mt-0'>
                  <Bold>Data</Bold>
                  <TextInput placeholder='Data' disabled className='mt-1' />
                </div>
              </Flex>

              <Flex className='flex-col md:flex-row gap-x-6'>
                <div className='w-full'>
                  <Bold>Correo electrónico</Bold>
                  <TextInput placeholder='Correo electrónico' disabled className='mt-1' />
                </div>

                <div className='w-full mt-4 md:mt-0'>
                  <Bold>Suscripción</Bold>
                  <TextInput value={'Suscrito'} placeholder='Suscripción' disabled className='mt-1' />
                </div>
              </Flex>
            </form>
          </Card>
        </Col>
      </Grid>
    </div>
  )
}

MyAccountPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Mi Cuenta</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default MyAccountPage
