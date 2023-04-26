import type { HTMLAttributes } from '@/lib/types'
import { cn } from '@/lib/utils'

function Skeleton ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton }
