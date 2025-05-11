'use client'
import { getDataFromPageDataRegistry } from '@/actions/registry-actions'

import ComponentPreview from '@/components/component-preview'
import ContentsSidebar from '@/components/contents-sidebar'
import { pageData } from '@/lib/types'

import { generateMappedData } from '@/components/documentation/mapper'
import { notFound } from 'next/navigation'

const Blocks: React.FC<any> = ({ params }) => {
  const slug = (params).slug
  const pageData: pageData | null = getDataFromPageDataRegistry(slug) ?? null
  if (!pageData) return notFound()
  const RenderableComponentsArray = generateMappedData(pageData)

  function getTableOfContentsArray(pageData: pageData) {
    return Object.values(pageData.variantSections)
      .map((item: any, idx: number) => {
        return {
          name: item.name,
          slug: item.slug
        }
      })
  }

  return (
    <div className='flex justify-between py-6 px-[1rem] lg:px-[2rem] xl:px-[3rem] w-full' >
      {/* Main Content */}
      <div className='w-[80%]'>
        {/* <div className='w-full h-screen px-2' >
           <h1 className='text-3xl font-bold mb-2'>This is a component</h1>
          <p className='text-base text-muted-foreground'>This is the component descrtiption</p>
          <ComponentPreview src={`http://localhost:3000/preview?itemSlug=zero-section&variantSlug=hero-section-unstyled`} />
        </div> */}
        {RenderableComponentsArray}
      </div>

      {/* Contents Sidebar */}
      <div className='hidden xl:block relative'>
        <ContentsSidebar tableOfContentsArray={getTableOfContentsArray(pageData!)} />
      </div >

    </div >
  )
}

export default Blocks