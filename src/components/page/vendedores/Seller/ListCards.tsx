import { Grid } from '@tremor/react'
import { ReactNode } from '@/lib/types'

export const SellerListCards = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <Grid numCols={1} numColsSm={2} numColsLg={4} className={`${className}`}>
      {children}
    </Grid>
  )
}
