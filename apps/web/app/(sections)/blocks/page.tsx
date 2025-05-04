'use client'
import ComponentPreview from '@/components/component-preview'
import ContentsSidebar from '@/components/contents-sidebar'
import { AppSidebar } from '@/components/sidebar/app-sidebar'
import React from 'react'
import Hero from '@/app/(landing)/page'

type Props = {}


function Blocks({ }: Props) {
  return (
    <div className='flex justify-between'>

      {/* Main Content */}
      <div className='w-full h-screen px-2'>
        <h1 className='text-3xl font-bold mb-2'>This is a component</h1>
        <p className='text-base text-muted-foreground'>This is the component descrtiption</p>

        {/* Code Preview Block */}
        <ComponentPreview src={`http://localhost:3000/preview?component=Hero`} />
      </div>

      {/* Contents Sidebar */}
      <div className='hidden xl:block w-1/6'>
        <ContentsSidebar />
      </div>

    </div>
  )
}

export default Blocks