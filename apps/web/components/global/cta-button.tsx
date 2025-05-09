import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

function CtaButton({ children, className, ...props }: Props) {
  return (
    <Button
      asChild
      className={cn("relative group px-6 py-2 h-11 bg-transparent hover:bg-transparent border-0", className)}
      {...props}
    >
      <div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50 blur-sm opacity-0 group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50" />
        <div className="absolute inset-[1px] rounded-lg bg-black" />
        <div className="relative z-10 text-white group-hover:text-primary/90 transition-colors flex items-center justify-center">
          {children}
        </div>
      </div>
    </Button>
  )
}

export default CtaButton