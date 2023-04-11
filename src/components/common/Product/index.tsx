import { Bold, Card, Text, Title } from '@tremor/react'
import { IProduct } from '@/lib/types'

export const ProductCard = ({ title, price, images, description }: IProduct) => {
  return (
    <Card>
      <img
        src={images[0]}
        alt={title}
        width={640}
        height={480}
      />

      <Title>{ title }</Title>
      <Text>{description}</Text>
      <Text><Bold>$</Bold> {price}</Text>
    </Card>
  )
}
