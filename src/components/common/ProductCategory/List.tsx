import { Flex } from '@tremor/react'
import { ReactNode } from '@/lib/types'

export const ProductCategoryList = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      {children}
    </Flex>
  )
}
