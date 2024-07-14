import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}
function container({ children, className }: Props) {
  return (
    <div className={cn('container mx-auto max-w-7xl', className)}>
      {children}
    </div>
  )
}

export default container
