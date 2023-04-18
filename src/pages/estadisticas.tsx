import { Card, Tab, TabList, Text, Title } from '@tremor/react'
import { useState } from 'react'
import Head from 'next/head'

import { AuthenticatedLayout } from '@/layouts/Authenticated'

import CardExample from '@/components/common/CardExample'
import TableView from '@/components/common/TableView'
import ChartView from '@/components/common/ChartView'

const StatisticsPage = () => {
  const [selectedView, setSelectedView] = useState('1')

  return (
    <div>
      <Title>Estadisticas</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

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

StatisticsPage.getLayout = function getLayout (page) {
  return (
    <AuthenticatedLayout>
      <Head>
        <title>Estadisticas</title>
      </Head>

      {page}
    </AuthenticatedLayout>
  )
}

export default StatisticsPage
