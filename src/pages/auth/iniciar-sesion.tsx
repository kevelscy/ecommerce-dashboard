import { Card, Text } from '@tremor/react'
import Head from 'next/head'

export default function SignInPage () {
  return (
    <>
      <Head>
        <title>Iniciar Sesion</title>
      </Head>

      <div className='bg-slate-50 h-screen'>
        <Card>
          <Text>Iniciar Sesion</Text>
        </Card>
      </div>
    </>
  )
}
