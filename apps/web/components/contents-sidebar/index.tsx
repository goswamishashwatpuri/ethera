'use client'
import { useState } from 'react'
import Link from 'next/link'

type Props = {
  tableOfContentsArray: {
    name: string
    slug: string
  }[]
}

function ContentsSidebar({ tableOfContentsArray }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
    <div className='place-self-end sticky top-10'>
      <h2 className='text-foreground text-lg mb-4 font-medium'>On This Page</h2>
      <ul>
        {tableOfContentsArray.map((item, index) => (
          <li key={index}
            className='mb-1 hover:cursor-pointer'
            onClick={() => setActiveIndex(index)}
          >
            <Link href={`#${item.slug}`}>
              <label className={`text-foreground ${index === activeIndex ? 'text-foreground' : 'text-muted-foreground'} hover:cursor-pointer`}>
                {item.name}
              </label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentsSidebar