/* eslint-disable comma-dangle */
/* eslint-disable no-multi-spaces */
import { Card, Tab, TabList, Text, Title } from '@tremor/react'
// import { CountUp } from 'use-count-up'
import { useState } from 'react'
import Head from 'next/head'
import { Dialog } from '@/components/layout/Dialoog'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

import CardExample from '@/components/common/CardExample'
import TableView from '@/components/common/TableView'
import ChartView from '@/components/common/ChartView'

const DashboardPage = () => {
  const [selectedView, setSelectedView] = useState('1')
  return (
    <div>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      {/* <div className='text-xl text-black font-bold'>
        <CountUp thousandsSeparator='.' decimalSeparator=',' isCounting end={13_323_533.53} duration={3.2} />
      </div> */}

      <Dialog />

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>

      {
        // eslint-disable-next-line multiline-ternary
        selectedView === '1'
          ? (
            <>
              <CardExample />

              <div className="mt-6">
                <Card>
                  <ChartView />
                </Card>
              </div>
            </>
          )
          : <TableView />
      }
    </div>
  )
}

DashboardPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default DashboardPage
