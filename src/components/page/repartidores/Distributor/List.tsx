import { Button, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react'
import { IconEye, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'

import { IDistributor } from '@/lib/types/distributors'

export const DistributorsList = ({ distributors }: { distributors: IDistributor[] }) => {
  return (
    <Card className='mt-10'>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className='text-left w-8'>ID</TableHeaderCell>
            <TableHeaderCell className='text-right'>Foto</TableHeaderCell>
            <TableHeaderCell className='text-right'>Nombre y Apellido</TableHeaderCell>
            <TableHeaderCell className='text-right'>Correo Electrónico</TableHeaderCell>
            <TableHeaderCell className='text-right'>Teléfono</TableHeaderCell>
            <TableHeaderCell className='text-right'>Nº de Entregas</TableHeaderCell>
            <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            distributors.map((distributor) => (
              <TableRow key={distributor.id} className='border-t border-t-slate-200'>
                <TableCell>
                  <Flex alignItems='center' justifyContent='start' className='gap-x-2 w-8'>
                    <Text className='font-semibold truncate'># { distributor.id }</Text>
                  </Flex>
                </TableCell>

                <TableCell className='text-right'>
                  <img
                    className='rounded-md w-10 h-10 bg-slate-500 m-auto object-cover'
                    src={distributor.picture}
                    alt={distributor.firstName}
                    height={64}
                    width={64}
                  />
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ distributor.firstName } { distributor.lastName }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ distributor.email }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>{ distributor.phone }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>{ distributor.ordersDeliveries.length }</Text>
                </TableCell>

                <TableCell>
                  <Flex justifyContent='end' alignItems='center' className='gap-x-2'>
                    <Link href={`/repartidores/${distributor.id}`}>
                      <Button variant='secondary' color='blue' size='xs'>
                        <IconEye size={18} />
                      </Button>
                    </Link>

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
