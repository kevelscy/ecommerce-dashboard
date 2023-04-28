import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card, Flex, Button } from '@tremor/react'
import { IconEye, IconTrash } from '@tabler/icons-react'
import type { NextRouter } from 'next/router'

import { IProduct } from '@/lib/types'
// import Link from 'next/link'

export const ProductList = ({ products, router, className }: { products: IProduct[], router: NextRouter, className?: string }) => {
  return (
    <Card className={`mt-10 ${className}`}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Titulo</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Categoria</TableHeaderCell>
            <TableHeaderCell className='w-24'>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Text>{product.id}</Text>
              </TableCell>

              <TableCell>
                <Text>{product.title}</Text>
              </TableCell>

              <TableCell>
                <Text>{product.price}</Text>
              </TableCell>

              <TableCell>
                <Text>{product.category.name}</Text>
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
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
