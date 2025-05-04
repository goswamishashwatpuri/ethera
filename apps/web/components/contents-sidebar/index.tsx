import React from 'react'
import Link from 'next/link'

type Props = {}

function ContentsSidebar({ }: Props) {
  return (
    <ul>
      <h2 className='text-foreground text-sm mb-2'>On This Page</h2>
      <li>
        <Link href="#" className='py-1 flex gap-2 h-full border-l border-primary'>
          <label className='ml-2 underline underline-offset-4 text-foreground text-sm'>Shshwat</label>
        </Link>
        <Link href="#" className='ml-2 py-1 flex gap-2 h-full border-l border-primary'>
          <label className='ml-2 underline underline-offset-4 text-foreground text-xs'>Shshwat</label>
        </Link>
        <Link href="#" className='ml-2 py-1 flex gap-2 h-full border-l border-primary'>
          <label className='ml-2 underline underline-offset-4 text-foreground text-xs'>Shshwat</label>
        </Link>
      </li>
      <li>
        <Link href="#" className='py-1 flex gap-2 h-full border-l border-primary'>
          <label className='ml-2 underline underline-offset-4 text-muted-foreground text-sm'>Shshwat</label>
        </Link>
      </li>
      <li>
        <Link href="#" className='py-1 flex gap-2 h-full border-l border-primary'>
          <label className='ml-2 underline underline-offset-4 text-muted-foreground text-sm'>Shshwat</label>
        </Link>
      </li>

    </ul>
  )
}

export default ContentsSidebar