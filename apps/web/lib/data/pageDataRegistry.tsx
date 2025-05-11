import type { pageData } from "../types"


export const blocksPageDataRegistry: Record<string, pageData> = {
  'hero-section': {
    name: 'Hero Section',
    slug: 'hero-section',
    thumbnail: '',
    pageTitle: 'Hero Section',
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
      'hero-section-unstyl': {
        name: 'Hero Section Unstyled',
        slug: 'hero-section-unstyl',

        title: 'Hero Section',
        description: 'Hero Section',
        importComponentPath: () => import('@/app/(sections)/layout'),
        usageCode: `
        
        `,
        dependencies: 'This is 1',
        sourceCode: `This First`,
      },
    }
  }
}

// add more page data registries here.
export const pageDataRegistry = {
  ...blocksPageDataRegistry,
}