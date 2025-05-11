import {
  blocksRegistry,
  globalRegistry
} from "@/lib/data/registry"
import { pageDataRegistry } from "@/lib/data/pageDataRegistry"
import { pageData } from "@/lib/types"

export const getBlocksRegistry = () => {
  return blocksRegistry
}

export const getGlobalRegistry = () => {
  return globalRegistry
}

export const getGlobalRegistryItemUsingSlug = (slug: string) => {
  return globalRegistry.find((item) => item.slug === slug)
}

export const getComponentPathUsingSlug = (itemSlug: string, variantSlug: string) => {
  const item = pageDataRegistry[itemSlug]?.variantSections[variantSlug]
  if (!item) return null
  return item.importComponentPath
}

export const getDataFromPageDataRegistry = (itemSlug: string) => {
  const item = pageDataRegistry[itemSlug]
  if (!item) return null
  return item as pageData
}


