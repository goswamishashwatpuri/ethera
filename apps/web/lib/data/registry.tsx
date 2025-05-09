import { BlocksRegistry, InspirationRegistry, ComponentsRegistry } from "@/lib/types"

export const blocksRegistry: BlocksRegistry = [
  {
    name: "Zero Section",
    slug: "zero-section",
    breadcrumbUrl: "/blocks/zero-section",
  },
  {
    name: "Hero Section",
    slug: "hero-section",
    breadcrumbUrl: "/blocks/zero-section",
  }
]

export const inspirationRegistry: InspirationRegistry = [
]

export const componentsRegistry: ComponentsRegistry = [
]

export const globalRegistry = [
  ...blocksRegistry,
  ...inspirationRegistry,
  ...componentsRegistry,
]