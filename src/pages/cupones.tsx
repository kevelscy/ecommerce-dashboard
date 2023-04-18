import { Title, Text, Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Flex, Button, Grid, Col, Divider, ListItem, List } from '@tremor/react'
import { IconCalendar, IconCash, IconEye, IconNumber, IconPercentage, IconTicket, IconX } from '@tabler/icons-react'
import usePortal from 'react-cool-portal'
import { useState } from 'react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { Modal } from '@/components/layout/Modal'

interface ICupon {
  id: number
  code: string
  title: string
  discountRate: number
  usesAmount: number
  totalDiscount: number
  createdAt: Date
  updatedAt: Date
}

const CuponsPage = () => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })
  const [cuponSelected, setCuponSelected] = useState<ICupon>(null)

  const handleCuponSelected = (cupon: ICupon) => {
    setCuponSelected(cupon)
    show()
  }

  const cupons: ICupon[] = [
    {
      id: 9845,
      code: 'KEVIN_CUPO23',
      title: 'Cupón de Kevin',
      discountRate: 0.6,
      usesAmount: 23,
      totalDiscount: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4942,
      code: 'ANIVERSARIO_2023',
      title: 'Aniversario de la Empresa',
      discountRate: 0.18,
      usesAmount: 99,
      totalDiscount: 423,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 675,
      code: 'BLACK-FRIDARY',
      title: 'Dia del Black Friday',
      discountRate: 0.3,
      usesAmount: 5,
      totalDiscount: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  return (
    <>
      <Modal Portal={Portal} hide={hide}>
        <Card className='overflow-y-auto max-h-[590px] h-full'>
          <Flex justifyContent='between' alignItems='center'>
            <Title>Detalle del Cupón</Title>

            <Button
              onClick={hide}
              variant='secondary'
              size='xs'
              color='red'
              className='px-1.5'
            >
              <IconX size={18} />
            </Button>
          </Flex>

          <Divider className='mb-2' />

          <List>
            <ListItem className='w-full border-none py-1 justify-center'>
              <Text className='text-2xl sm:text-4xl font-black'>{ cuponSelected?.code }</Text>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconTicket size={22} className='mr-1' />

                <Text className='font-semibold'>ID:</Text>&nbsp;
                <Text>{ cuponSelected?.id }</Text>
              </Flex>
            </ListItem>

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconCalendar size={22} className='mr-1' />

                <Text className='whitespace-normal'>
                  <span className='font-semibold'>Fecha de Creación:</span> { cuponSelected?.createdAt.getUTCFullYear() }
                </Text>
              </Flex>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none flex-col justify-start items-start py-1'>
              <div className='space-y-1'>
                <Flex justifyContent='start' alignItems='center'>
                  <IconPercentage size={22} className='mr-1' />

                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Porcentaje de Descuento:</span> { cuponSelected?.discountRate.toLocaleString(undefined, { style: 'percent' }) }
                  </Text>
                </Flex>

                <Flex justifyContent='start' alignItems='center'>
                  <IconNumber size={22} className='mr-1' />

                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Numero de Usos:</span> { cuponSelected?.usesAmount }
                  </Text>
                </Flex>
              </div>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconCash size={22} className='mr-1' />

                <Text className='font-semibold'>Total Descontado:</Text>&nbsp;
                <Text>$ { cuponSelected?.totalDiscount }</Text>
              </Flex>
            </ListItem>
          </List>

          <Divider className='mt-2 mb-4' />

          <Flex className='w-full' justifyContent='between' alignItems='center'>
            <Button variant='primary' color='red' className='w-full font-semibold' size='lg' onClick={hide}>
              Cerrar
            </Button>
          </Flex>
        </Card>
      </Modal>

      <div className='min-h-screen w-full h-full max-w-6xl m-auto'>
        <Title>Cupones</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <Grid numCols={6} className='mt-10 gap-x-6'>
          <Col numColSpan={6}>
            <Card>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell className='text-left w-36'>ID</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Código</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Título</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Porcentaje de Descuento</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Nº de Usos</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Fecha de creacion</TableHeaderCell>
                    <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    cupons.map((cupon) => (
                      <TableRow key={cupon.id} className='border-t border-t-slate-200'>
                        <TableCell>
                          <Text className='font-semibold truncate'># { cupon.id }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{ cupon?.code }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{ cupon?.title }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text className='font-semibold'>{ cupon?.discountRate.toLocaleString(undefined, { style: 'percent' }) }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text className='truncate'>{ cupon?.usesAmount }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{ cupon?.createdAt.getUTCFullYear() }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Button
                            onClick={() => handleCuponSelected(cupon)}
                            variant='secondary'
                            color='blue'
                            size='xs'
                          >
                            <IconEye size={18} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Card>
          </Col>
        </Grid>
      </div>
    </>
  )
}

CuponsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Cupones</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default CuponsPage
