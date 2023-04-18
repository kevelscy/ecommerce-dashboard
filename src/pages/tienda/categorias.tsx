import { Title, Text, Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Flex, Button, Grid, Col, Divider, ListItem, List } from '@tremor/react'
import { IconAlignJustified, IconCalendar, IconEye, IconHeading, IconNumber, IconTicket, IconX } from '@tabler/icons-react'
import usePortal from 'react-cool-portal'
import { useState } from 'react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { Modal } from '@/components/layout/Modal'

interface ICategoryProduct {
  id: number
  image: string
  title: string
  description: string
  totalProducts: number
  createdAt: Date
  updatedAt: Date
}

const CategoryProductsPage = () => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })
  const [categorySelected, setCategorySelected] = useState<ICategoryProduct>(null)

  const handleCategorySelected = (cupon: ICategoryProduct) => {
    setCategorySelected(cupon)
    show()
  }

  const categoryProducts: ICategoryProduct[] = [
    {
      id: 9845,
      image: 'https://picsum.photos/640/640?r=104',
      title: 'Zapátos',
      description: 'lorem ipsum asdpka asdfkdsafoew mwoecmwe weom owefdmweo m',
      totalProducts: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4942,
      image: 'https://picsum.photos/640/640?r=104',
      title: 'Camisas',
      description: 'lorem ipsum asdpka asdfkdsafoew mwoecmwe weom owefdmweo m',
      totalProducts: 423,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 675,
      image: 'https://picsum.photos/640/640?r=104',
      title: 'Pantalones',
      description: 'lorem ipsum asdpka asdfkdsafoew mwoecmwe weom owefdmweo m',
      totalProducts: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  return (
    <>
      <Modal Portal={Portal} hide={hide}>
        <Card className='overflow-y-auto max-h-[590px] h-full'>
          <Flex justifyContent='between' alignItems='center'>
            <Title>Detalle de la Categoría</Title>

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
              <div className='bg-slate-100 p-2 rounded-md w-full'>
                <img
                  src={categorySelected?.image}
                  alt={categorySelected?.title}
                  height={160}
                  width={160}
                  className='rounded-md mx-auto'
                />
              </div>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconTicket size={22} className='mr-1' />

                <Text className='font-semibold'>ID:</Text>&nbsp;
                <Text>{ categorySelected?.id }</Text>
              </Flex>
            </ListItem>

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconCalendar size={22} className='mr-1' />

                <Text className='whitespace-normal'>
                  <span className='font-semibold'>Fecha de Creación:</span> { categorySelected?.createdAt.getUTCFullYear() }
                </Text>
              </Flex>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none flex-col justify-start items-start py-1'>
              <div className='space-y-1'>
                <Flex justifyContent='start' alignItems='center'>
                  <IconHeading size={22} className='mr-1' />

                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Título:</span> { categorySelected?.title }
                  </Text>
                </Flex>

                <Flex justifyContent='start' alignItems='start'>
                  <IconAlignJustified size={22} className='mr-1' />

                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Descripción:</span> { categorySelected?.description }
                  </Text>
                </Flex>
              </div>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconNumber size={22} className='mr-1' />

                <Text className='font-semibold'>Total de Productos:</Text>&nbsp;
                <Text>{ categorySelected?.totalProducts }</Text>
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
        <Title>Categorias de Productos</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <Grid numCols={6} className='mt-10 gap-x-6'>
          <Col numColSpan={6}>
            <Card>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell className='text-left w-36'>ID</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Imágen</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Título</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Descripción</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Nº de Productos</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Fecha de creacion</TableHeaderCell>
                    <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    categoryProducts.map((category) => (
                      <TableRow key={category.id} className='border-t border-t-slate-200'>
                        <TableCell>
                          <Text className='font-semibold truncate'># { category.id }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <div className='bg-slate-100 p-2 rounded-md'>
                            <img
                              src={category?.image}
                              alt={category?.title}
                              height={30}
                              width={30}
                              className='rounded-md mx-auto'
                            />
                          </div>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{ category.title }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text className='truncate w-56'>{ category.description }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text className='font-semibold'>{ category.totalProducts }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{ category.createdAt.getUTCFullYear() }</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Button
                            onClick={() => handleCategorySelected(category)}
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

CategoryProductsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Categorias de Productos</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default CategoryProductsPage
