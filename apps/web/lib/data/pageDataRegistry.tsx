import type { pageData } from "../types"


export const blocksPageDataRegistry: any = {
  'hero-section': {
    name: 'Hero Section',
    slug: 'hero-section',
    thumbnail: '',
    title: 'Hero Section',
    description: 'Hero Section',
    variantSections: {
      'hero-section-unstyled': {
        name: 'Hero Section Unstyled',
        slug: 'hero-section-unstyled',

        title: 'Hero Section',
        description: 'Hero Section',
        importComponentPath: () => import('@/app/(sections)/layout'),
        usageCode: `
        
        `,
        dependencies: 'This is 1',
        sourceCode: `This First`,
      },
      'hero-section-unstywled': {
        name: 'Hero Section Unstyled',
        slug: 'hero-section-unstywled',

        title: 'Hero Section',
        description: 'Hero Section',
        importComponentPath: () => import('@/app/(landing)/page'),
        usageCode: `<div>`,
        dependencies: 'This is 2',
        sourceCode: "import { getDataFromPageDataRegistry } from '@/actions/registry-actions'\r\n\r\nimport ComponentPreview from '@/components/component-preview'\r\nimport ContentsSidebar from '@/components/contents-sidebar'\r\nimport { pageData } from '@/lib/types'\r\n\r\nimport { generateMappedData } from '@/components/documentation/mapper'\r\n\r\ntype Props = {\r\n  params: {\r\n    slug: string\r\n  }\r\n}\r\n\r\nconst Blocks: React.FC<Props> = async ({ params }) => {\r\n  const slug = (await params).slug\r\n  const pageData = getDataFromPageDataRegistry(slug)\r\n  const RenderableComponentsArray = generateMappedData(pageData)\r\n  // console.log(R  enderableComponentsArray)\r\n  function getTableOfContentsArray(pageData: pageData) {\r\n    return Object.values(pageData.variantSections)\r\n      .map((item, idx) => {\r\n        return {\r\n          name: item.name,\r\n          slug: item.slug\r\n        }\r\n      })\r\n  }\r\n\r\n  return (\r\n    <div className='flex py-6 justify-between' >\r\n      {/* Main Content */}\r\n      <div className='w-full xl:max-w-[80%]'>\r\n        {/* <div className='w-full h-screen px-2' >\r\n           <h1 className='text-3xl font-bold mb-2'>This is a component</h1>\r\n          <p className='text-base text-muted-foreground'>This is the component descrtiption</p>\r\n          <ComponentPreview src={`http://localhost:3000/preview?itemSlug=zero-section&variantSlug=hero-section-unstyled`} />\r\n        </div> */}\r\n        {RenderableComponentsArray}\r\n      </div>\r\n\r\n      {/* Contents Sidebar */}\r\n      <div className='hidden xl:block max-w-[19%] relative'>\r\n        <ContentsSidebar tableOfContentsArray={getTableOfContentsArray(pageData!)} />\r\n      </div >\r\n\r\n    </div >\r\n  )\r\n}\r\n\r\nexport default Blocks"
      },
      'hero-section-unstwled': {
        name: 'Hero Section Unstyled',
        slug: 'hero-section-unstwled',

        title: 'Hero Section',
        description: 'Hero Section',
        importComponentPath: () => import('@/app/(landing)/page'),
        usageCode: `<div>`,
        dependencies: 'This is 3',
        sourceCode: "import { getDataFromPageDataRegistry } from '@/actions/registry-actions'\r\n\r\nimport ComponentPreview from '@/components/component-preview'\r\nimport ContentsSidebar from '@/components/contents-sidebar'\r\nimport { pageData } from '@/lib/types'\r\n\r\nimport { generateMappedData } from '@/components/documentation/mapper'\r\n\r\ntype Props = {\r\n  params: {\r\n    slug: string\r\n  }\r\n}\r\n\r\nconst Blocks: React.FC<Props> = async ({ params }) => {\r\n  const slug = (await params).slug\r\n  const pageData = getDataFromPageDataRegistry(slug)\r\n  const RenderableComponentsArray = generateMappedData(pageData)\r\n  // console.log(R  enderableComponentsArray)\r\n  function getTableOfContentsArray(pageData: pageData) {\r\n    return Object.values(pageData.variantSections)\r\n      .map((item, idx) => {\r\n        return {\r\n          name: item.name,\r\n          slug: item.slug\r\n        }\r\n      })\r\n  }\r\n\r\n  return (\r\n    <div className='flex py-6 justify-between' >\r\n      {/* Main Content */}\r\n      <div className='w-full xl:max-w-[80%]'>\r\n        {/* <div className='w-full h-screen px-2' >\r\n           <h1 className='text-3xl font-bold mb-2'>This is a component</h1>\r\n          <p className='text-base text-muted-foreground'>This is the component descrtiption</p>\r\n          <ComponentPreview src={`http://localhost:3000/preview?itemSlug=zero-section&variantSlug=hero-section-unstyled`} />\r\n        </div> */}\r\n        {RenderableComponentsArray}\r\n      </div>\r\n\r\n      {/* Contents Sidebar */}\r\n      <div className='hidden xl:block max-w-[19%] relative'>\r\n        <ContentsSidebar tableOfContentsArray={getTableOfContentsArray(pageData!)} />\r\n      </div >\r\n\r\n    </div >\r\n  )\r\n}\r\n\r\nexport default Blocks",
      },
      'hero-sectin-unstywled': {
        name: 'Hero Section Unstyled',
        slug: 'hero-sectin-unstywled',

        title: 'Hero Section',
        description: 'Hero Section',
        importComponentPath: () => import('@/app/(landing)/page'),
        usageCode: `<div>`,
        dependencies: 'This is 4',
        sourceCode: `This is source code`,
      },
    }
  }
}

// add more page data registries here.
export const pageDataRegistry = {
  ...blocksPageDataRegistry,
}