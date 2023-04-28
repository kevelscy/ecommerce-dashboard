import { Text, Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, Flex, Button } from '@tremor/react'
import { IconEye, IconTrash } from '@tabler/icons-react'
// import Link from 'next/link'

import { IUser, TRoles } from '@/lib/types/users'

type colors = 'blue' | 'green' | 'yellow' | 'indigo' | 'red' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'orange' | 'amber' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'

export const UsersList = ({ users }: { users: IUser[] }) => {
  const renderRoleColor = (role: TRoles): colors => {
    if (role === 'USER') return 'blue'
    if (role === 'MODERATOR') return 'green'
    if (role === 'DISTRIBUTOR') return 'yellow'
    if (role === 'SELLER') return 'indigo'
    if (role === 'ADMIN') return 'red'
  }

  const renderRoleLabel = (role: TRoles): string => {
    if (role === 'USER') return 'Usuario'
    if (role === 'MODERATOR') return 'Moderador'
    if (role === 'DISTRIBUTOR') return 'Distribuidor'
    if (role === 'SELLER') return 'Vendedor'
    if (role === 'ADMIN') return 'Administrador'
  }

  const rnederLocalDate = (date: Date) => {
    const formattedDate = date.toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    return formattedDate
  }

  return (
    <Card className='mt-10'>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className='text-left w-24'>ID</TableHeaderCell>
            <TableHeaderCell className='text-right'>Fecha de Registro</TableHeaderCell>
            <TableHeaderCell className='text-right'>Nombre</TableHeaderCell>
            <TableHeaderCell className='text-right'>Apellido</TableHeaderCell>
            <TableHeaderCell className='text-right'>Correo Electrónico</TableHeaderCell>
            <TableHeaderCell className='text-right'>Tipo de Usuario</TableHeaderCell>
            <TableHeaderCell className='w-24 text-right'>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            users.map((user) => (
              <TableRow key={user.id} className='border-t border-t-slate-200'>
                <TableCell className='w-24'>
                  <Text className='font-semibold truncate'>#{ user.id }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='font-semibold truncate'>{ rnederLocalDate(user.createdAt) }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ user.firstName }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ user.lastName }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Text className='truncate'>{ user.email }</Text>
                </TableCell>

                <TableCell className='text-right'>
                  <Badge color={renderRoleColor(user.roles[user.roles.length - 1])} size='sm' className='rounded-md capitalize'>
                    { renderRoleLabel(user.roles[user.roles.length - 1]).toLowerCase() }
                  </Badge>
                </TableCell>

                <TableCell>
                  <Flex justifyContent='end' alignItems='center' className='gap-x-2'>
                    {/* <Link href={`/tienda/productos/${user.id}`}> */}
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
