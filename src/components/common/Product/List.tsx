import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Dropdown, DropdownItem, Card } from '@tremor/react'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import type { NextRouter } from 'next/router'

import { IProduct } from '@/lib/types'

type TOptionsSeleted = 'GO_DETAIL' | 'EDIT' | 'DELETE'

export const ProductList = ({ products, router }: { products: IProduct[], router: NextRouter}) => {
  const handleActionsOptions = (optionSelected: TOptionsSeleted, productId: number) => {
    if (optionSelected === 'GO_DETAIL') router.push(`/tienda/productos/${productId}`)
    if (optionSelected === 'EDIT') console.log(`Edit Product${productId}`)
    if (optionSelected === 'DELETE') console.log(`Delete Product${productId}`)
  }

  return (
    <Card className='mt-10'>
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
                <Dropdown
                  onValueChange={(value) => handleActionsOptions(value as TOptionsSeleted, product.id)}
                  placeholder='Elija una opcion'
                >
                  <DropdownItem value='GO_DETAIL' text='Ver Detalle' icon={IconEye} />
                  <DropdownItem value='EDIT' text='Editar' icon={IconPencil} />
                  <DropdownItem value='DELETE' text='Borrar' icon={IconTrash} />
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
