import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import { Text, Title, Button, Grid, Col, Badge } from '@tremor/react'
import { IProduct } from '@/lib/types'
import Link from 'next/link'

export const ProductCard = ({ title, price, images, id, category }: IProduct) => {
  return (
    <article className='relative w-full text-left ring-1 bg-white shadow border-blue-500 ring-gray-200 rounded-lg'>
      <section className='relative'>
        <Link href={`/tienda/productos/${id}`}>
          <img
            src={images[0] || '#'}
            alt={title}
            width={640}
            height={480}
            className='rounded-lg'
          />
        </Link>

        <Badge className='absolute bottom-2 right-2 bg-opacity-95' color='green'>
          {category.name}
        </Badge>
      </section>

      <section className='px-6 pb-6 pt-4'>
        <Link href={`/tienda/productos/${id}`}>
          <Title className='truncate hover:text-blue-500'>{ title }</Title>
        </Link>

        <Text className='text-xl font-bold'>
          <span className='text-green-600'>$</span> {price}
        </Text>

        <Grid numCols={1} numColsSm={2} className='sm:gap-x-2 mt-4'>
          <Link href={`/tienda/productos/${id}/editar`}>
            <Button className='w-full' variant='secondary' size='xs' icon={IconPencil} color='yellow'>
              Edit
            </Button>
          </Link>

          <Button className='w-full mt-2 sm:mt-0' variant='secondary' size='xs' icon={IconTrash} color='red'>
            Delete
          </Button>

          <Col numColSpan={1} numColSpanSm={2} className='mt-2 mx-0'>
            <Link href={`/tienda/productos/${id}`}>
              <Button className='w-full' variant='primary' size='xs' icon={IconEye}>
                Ver Producto
              </Button>
            </Link>
          </Col>
        </Grid>
      </section>
    </article>
  )
}
