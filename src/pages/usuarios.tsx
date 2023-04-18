import { Title, Text } from '@tremor/react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { UsersList } from '@/components/page/usuarios/UsersList'
import { users } from '@/lib/utils/dummyData'

const UsersPage = () => {
  return (
    <div className='min-h-screen w-full h-full max-w-6xl m-auto'>
      <Title>Usuarios</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <UsersList users={users} />
    </div>
  )
}

UsersPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Usuarios</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default UsersPage
