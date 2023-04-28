import { Text, Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, Flex, Button } from '@tremor/react'
import { IconShoppingCart, IconEye, IconTrash } from '@tabler/icons-react'
// import Link from 'next/link'

export const OrdersList = ({ orders }: { orders: any[] }) => {
  return (
    <Card className='mt-10'>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className='text-left w-36'>ID</TableHeaderCell>
            <TableHeaderCell className='text-right'>Cliente</TableHeaderCell>
            <TableHeaderCell className='text-right'>Delivery</TableHeaderCell>
            <TableHeaderCell className='text-right'>Fecha</TableHeaderCell>
            <TableHeaderCell className='text-right'>Estado</TableHeaderCell>
            <TableHeaderCell className='text-right'>Precio</TableHeaderCell>
            <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            orders.map((order) => (
              <TableRow key={order.id} className='border-t border-t-slate-200'>
                <TableCell>
                  <Flex alignItems='center' justifyContent='start' className='gap-x-2 w-36'>
                    <div className='p-2 border border-slate-200 shadow-sm rounded-sm'>
                      <IconShoppingCart size={20} />
                    </div>

                    <Text className='font-semibold truncate'>#{order.id}</Text>
                  </Flex>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{order.customer.firstName} {order.customer.lastName}</Text>
                  <Text className='truncate text-xs'>{order.customer.email}</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Badge color={order.delivery ? 'green' : 'red'} size='sm' className='rounded-md'>
                    { order.delivery ? 'Incluido' : 'No Incluido' }
                  </Badge>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>{order.date}</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Badge color={order.status === 'PENDING' ? 'yellow' : 'green' } size='sm' className='rounded-md'>
                    { order.status === 'PENDING' && 'Pendiente' }
                    { order.status === 'DELIVERED' && 'Entregado' }
                  </Badge>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>$ {order.price}</Text>
                </TableCell>

                <TableCell>
                  <Flex justifyContent='end' alignItems='center' className='gap-x-2'>
                    {/* <Link href={`/tienda/productos/${order.id}`}> */}
                    <Button variant='secondary' color='blue' size='xs'>
                      <IconEye size={18} />
                    </Button>
                    {/* </Link> */}

                    <Button variant='secondary' color='red' size='xs'>
                      <IconTrash size={18} />
                    </Button>
                  </Flex>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Card>
  )
}
