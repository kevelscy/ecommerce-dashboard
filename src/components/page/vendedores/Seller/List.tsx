import { Button, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react'
import { IconEye, IconTrash } from '@tabler/icons-react'
// import Link from 'next/link'

import { ISeller } from '@/lib/types'

export const SellersList = ({ sellers }: { sellers: ISeller[] }) => {
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
            <TableHeaderCell className='text-right'>Nº de Ventas</TableHeaderCell>
            <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            sellers.map((seller) => (
              <TableRow key={seller.id} className='border-t border-t-slate-200'>
                <TableCell>
                  <Flex alignItems='center' justifyContent='start' className='gap-x-2 w-8'>
                    <Text className='font-semibold truncate'># { seller.id }</Text>
                  </Flex>
                </TableCell>

                <TableCell className='text-right'>
                  <img
                    className='rounded-md w-10 h-10 bg-slate-500 m-auto object-cover'
                    src={seller.picture}
                    alt={seller.firstName}
                    height={64}
                    width={64}
                  />
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ seller.firstName } { seller.lastName }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ seller.email }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>{ seller.phone }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text>{ seller.soldProducts.length }</Text>
                </TableCell>

                <TableCell>
                  <Flex justifyContent='end' alignItems='center' className='gap-x-2'>
                    {/* <Link href={`/vendedores/${seller.id}`}> */}
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
