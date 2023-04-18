import { Title, Text, Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Flex, Button, Grid, Col, Divider, ListItem, List, Badge } from '@tremor/react'
import { IconShoppingCart, IconEye, IconCreditCard, IconUserCircle, IconCalendar, IconCash, IconTruckDelivery, IconShoppingBag, IconBrandPaypal, IconX } from '@tabler/icons-react'
import usePortal from 'react-cool-portal'
import { useState } from 'react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { Modal } from '@/components/layout/Modal'
import Link from 'next/link'

type TLabelPaymentMethods = 'Master Card' | 'VISA' | 'Paypal' | 'Cash'

interface ITransaction {
  id: number
  delivery: {
    deliveryUser: {
      id: number
      firstName: string
      lastName: string
      phone: string
      email: string
    }
    deliveryAddres: {
      municipality: string
      avenueOrStreet: string
      aditionalInfo: string
    }
    price: number
  } | null
  purchasedProduct: {
    id: number
    title: string
    price: number
    image: string
    quantity: number
  },
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  },
  date: string
  paid: number
  paymentMehotd: {
    iconCard: string
    label: TLabelPaymentMethods
  }
}

const TansactionsPage = () => {
  const { Portal, show, hide } = usePortal({ defaultShow: false })
  const [transactionSelected, setTransactionSelected] = useState<ITransaction>(null)

  const renderPaymentIcon = (paymentMethodLabel: TLabelPaymentMethods, withColor: boolean = true) => {
    if (paymentMethodLabel === 'Master Card') return <IconCreditCard className={`${withColor ? 'text-indigo-500' : ''}`} size={22} />
    if (paymentMethodLabel === 'VISA') return <IconCreditCard className={`${withColor ? 'text-indigo-500' : ''}`} size={22} />
    if (paymentMethodLabel === 'Paypal') return <IconBrandPaypal className={`${withColor ? 'text-blue-500' : ''}`} size={22} />
    if (paymentMethodLabel === 'Cash') return <IconCash className={`${withColor ? 'text-green-500' : ''}`} size={22} />
  }

  const renderPaymentLabel = (paymentMethodLabel: TLabelPaymentMethods) => {
    if (paymentMethodLabel === 'Cash') return 'Efectivo'
    return paymentMethodLabel
  }

  const handleTransactionSelected = (transaction: any) => {
    setTransactionSelected(transaction)
    show()
  }

  const transactions: ITransaction[] = [
    {
      id: 9845,
      delivery: null,
      purchasedProduct: {
        id: 745,
        title: 'Laptop Dell 16GB Ram',
        price: 243.12,
        quantity: 1,
        image: 'https://via.placeholder.com/100/6b7280'
      },
      customer: {
        firstName: 'Kevin',
        lastName: 'Blanco',
        email: 'kblanco349@gmail.com',
        phone: '+584125544458'
      },
      date: '28/04/2023',
      paid: 243.12,
      paymentMehotd: {
        iconCard: '#',
        label: 'Master Card'
      }
    },
    {
      id: 4942,
      delivery: {
        deliveryUser: {
          id: 657,
          firstName: 'Julio',
          lastName: 'Mendoza',
          phone: '+587891234',
          email: 'deliveryman@gmail.com'
        },
        deliveryAddres: {
          municipality: 'Libertador',
          avenueOrStreet: '23 de Enero',
          aditionalInfo: 'Frente al bloque 54'
        },
        price: 3.21
      },
      purchasedProduct: {
        id: 24,
        title: 'Iphone 14 Max Pro',
        price: 635,
        quantity: 2,
        image: 'https://via.placeholder.com/100/6b7280'
      },
      customer: {
        firstName: 'Mario',
        lastName: 'Peña',
        email: 'mappedev@gmail.com',
        phone: '+581231234'
      },
      date: '01/02/2023',
      paid: 1273.21,
      paymentMehotd: {
        iconCard: '#',
        label: 'Cash'
      }
    },
    {
      id: 675,
      delivery: {
        deliveryUser: {
          id: 8124,
          firstName: 'Rafael',
          lastName: 'Carrera',
          phone: '+585438765',
          email: 'rafaeldelivery@gmail.com'
        },
        deliveryAddres: {
          municipality: 'Chacao',
          avenueOrStreet: 'Fransico de Miranda',
          aditionalInfo: 'En la Torre Fransico de Miranda'
        },
        price: 4.00
      },
      purchasedProduct: {
        id: 5324,
        title: 'Audifonos Beyerdynamic',
        price: 235,
        quantity: 1,
        image: 'https://via.placeholder.com/100/6b7280'
      },
      customer: {
        firstName: 'Yosef',
        lastName: 'Blandin',
        email: 'yosefblandin@gmail.com',
        phone: '+589876543'
      },
      date: '10/03/2023',
      paid: 239,
      paymentMehotd: {
        iconCard: '#',
        label: 'Paypal'
      }
    }
  ]

  return (
    <>
      <Modal Portal={Portal} hide={hide}>
        <Card className='overflow-y-auto max-h-[590px] h-full'>
          <Flex justifyContent='between' alignItems='center'>
            <Title>Detalle de la Transacción</Title>

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
            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconShoppingCart size={22} className='mr-1' />

                <Text className='font-semibold'>ID:</Text>&nbsp;
                <Text>{ transactionSelected?.id }</Text>
              </Flex>
            </ListItem>

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconCalendar size={22} className='mr-1' />

                <Text className='whitespace-normal'>
                  <span className='font-semibold'>Fecha de la transacción:</span> { transactionSelected?.date }
                </Text>
              </Flex>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none flex-col justify-start items-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconUserCircle size={22} className='mr-1' />

                <Text className='font-semibold'>Cliente:</Text>
              </Flex>

              <div className='space-y-1 mt-2'>
                <Flex justifyContent='start' alignItems='center'>
                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Nombre y Apellido:</span> { transactionSelected?.customer?.firstName } { transactionSelected?.customer?.lastName }
                  </Text>
                </Flex>

                <Flex justifyContent='start' alignItems='center'>
                  <Text className='whitespace-normal'>
                    <span className='font-semibold'>Correo Electrónico:</span> { transactionSelected?.customer?.email }
                  </Text>
                </Flex>

                <Flex justifyContent='start' alignItems='center'>
                  <Text className='font-semibold'>Teléfono:&nbsp;</Text>
                  <Text>{ transactionSelected?.customer?.phone }</Text>
                </Flex>
              </div>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none flex-col justify-start items-start py-1'>
              <Flex className='space-y-1 flex-col sm:flex-row'>
                <Flex flexDirection='col'>
                  <Flex justifyContent='start' alignItems='center'>
                    <IconShoppingBag size={22} className='mr-1' />

                    <Text className='font-semibold'>Datos del Producto:</Text>
                  </Flex>

                  <List className='mt-2'>
                    <ListItem className='border-none justify-start py-1'>
                      <Text className='whitespace-normal'>
                        <span className='font-semibold'>Título:</span> { transactionSelected?.purchasedProduct.title }
                      </Text>
                    </ListItem>

                    <ListItem className='border-none justify-start py-1'>
                      <Text className='font-semibold'>Precio:&nbsp;</Text>
                      <Text>$ { transactionSelected?.purchasedProduct.price }</Text>
                    </ListItem>

                    <ListItem className='border-none justify-start py-1'>
                      <Text className='font-semibold'>Cantidad:&nbsp;</Text>
                      <Text>{ transactionSelected?.purchasedProduct.quantity }</Text>
                    </ListItem>

                    <Link
                      className='mt-1 font-medium underline text-blue-400 hover:text-blue-500 border-none py-1'
                      href={`/tienda/productos/${transactionSelected?.purchasedProduct.id}`}
                    >
                      Ver Producto
                    </Link>
                  </List>
                </Flex>

                <Flex className='mt-2 sm:mt-0' justifyContent='center' alignItems='center'>
                  <div className='bg-slate-100 p-2 rounded-md'>
                    <img
                      src={transactionSelected?.purchasedProduct.image}
                      alt={transactionSelected?.purchasedProduct.title}
                      height={100}
                      width={100}
                      className='rounded-md'
                    />
                  </div>
                </Flex>
              </Flex>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                { renderPaymentIcon(transactionSelected?.paymentMehotd?.label, false) }

                <Text className='font-semibold ml-1'>Metodo de Pago:</Text>&nbsp;
                <Text>{ renderPaymentLabel(transactionSelected?.paymentMehotd?.label) }</Text>
              </Flex>
            </ListItem>

            <ListItem className='border-none justify-start py-1'>
              <Flex className={`${transactionSelected?.delivery ? 'flex-col' : 'flex-row justify-start w-min'}`}>
                <Flex justifyContent='start' alignItems='center'>
                  <IconTruckDelivery size={22} className='mr-1' />
                  <Text className='font-semibold'>Delivery:</Text>&nbsp;
                </Flex>

                {
                  !transactionSelected?.delivery
                    ? (
                      <Badge color='red' size='sm' className='rounded-md text-xs'>
                        No Incluido
                      </Badge>
                    )
                    : (
                      <List className='mt-2'>
                        <ListItem className='border-none justify-start py-1'>
                          <Text className='whitespace-normal'>
                            <span className='font-semibold'>Municipio:</span> { transactionSelected.delivery.deliveryAddres.municipality }
                          </Text>
                        </ListItem>

                        <ListItem className='border-none justify-start py-1'>
                          <Text className='whitespace-normal'>
                            <span className='font-semibold'>Avenida o Calle:</span> { transactionSelected.delivery.deliveryAddres.avenueOrStreet }
                          </Text>
                        </ListItem>

                        <ListItem className='border-none justify-start items-start py-1'>
                          <Text className='whitespace-normal'>
                            <span className='font-semibold'>Informacion Adicional:</span> { transactionSelected.delivery.deliveryAddres.aditionalInfo }
                          </Text>
                        </ListItem>

                        <ListItem className='border-none justify-start items-start py-1'>
                          <Text className='whitespace-normal'>
                            <span className='font-semibold'>Precio del delivery:</span> ${ transactionSelected.delivery.price }
                          </Text>
                        </ListItem>
                      </List>
                    )
                }
              </Flex>
            </ListItem>

            <Divider className='my-2' />

            <ListItem className='border-none justify-start py-1'>
              <Flex justifyContent='start' alignItems='center'>
                <IconCash size={22} className='mr-1' />

                <Text className='font-semibold'>Total Pagado:</Text>&nbsp;
                <Text>$ { transactionSelected?.paid }</Text>
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
        <Title>Transacciones</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <Grid numCols={6} className='mt-10 gap-x-6'>
          <Col numColSpan={6}>
            <Card>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell className='text-left w-36'>ID</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Producto</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Delivery</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Precio</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Cliente</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Metodo de pago</TableHeaderCell>
                    <TableHeaderCell className='text-right'>Fecha</TableHeaderCell>
                    <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    transactions.map((transaction) => (
                      <TableRow key={transaction.id} className='border-t border-t-slate-200'>
                        <TableCell>
                          <Flex alignItems='center' justifyContent='start' className='gap-x-2 w-36'>
                            <div className='p-2 border border-slate-200 shadow-sm rounded-sm'>
                              <IconShoppingCart size={20} />
                            </div>

                            <Text className='font-semibold truncate'># {transaction.id}</Text>
                          </Flex>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{transaction.purchasedProduct.title}</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Badge color={ transaction.delivery ? 'green' : 'red' } size='sm' className='rounded-md text-xs'>
                            { transaction.delivery ? 'Incluido' : 'No Incluido' }
                          </Badge>
                        </TableCell>

                        <TableCell className='text-right flex justify-end items-center'>
                          <Text>$</Text>&nbsp;
                          <Text className='font-semibold'>{transaction.paid}</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text className='truncate'>{transaction.customer.firstName} {transaction.customer.lastName}</Text>
                          <Text className='truncate text-xs'>{transaction.customer.email}</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Flex alignItems='center' justifyContent='end' className='gap-x-2'>
                            { renderPaymentLabel(transaction.paymentMehotd.label) } { renderPaymentIcon(transaction.paymentMehotd.label) }
                          </Flex>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Text>{transaction.date}</Text>
                        </TableCell>

                        <TableCell className='text-right'>
                          <Button
                            onClick={() => handleTransactionSelected(transaction)}
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

TansactionsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Transacciones</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default TansactionsPage
