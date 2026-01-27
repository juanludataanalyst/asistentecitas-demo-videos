import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../../lib/utils'

const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    data-slot='separator'
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
      className
    )}
    {...props}
    ref={ref}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
