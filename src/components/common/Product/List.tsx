import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Card, Flex, Button } from '@tremor/react'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import type { NextRouter } from 'next/router'

import { IProduct } from '@/lib/types'
import Link from 'next/link'

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
                <Flex justifyContent='center' alignItems='center'>
                  <Link href={`/tienda/productos/${product.id}`}>
                    <Button icon={IconEye} />
                  </Link>

                  <Link href={`/tienda/productos/${product.id}/editar`}>
                    <Button icon={IconPencil} />
                  </Link>

                  <Button icon={IconTrash} />
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
