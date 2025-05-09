import type { LucideIcon } from "lucide-react"

// component registry types
export type registryItem = {
  name: string,
  slug: string,
  breadcrumbUrl: string,
}
export type registry = registryItem[]

export type BlocksRegistryItem = registryItem
export type BlocksRegistry = BlocksRegistryItem[]

export type InspirationRegistryItem = registryItem
export type InspirationRegistry = InspirationRegistryItem[]

export type ComponentsRegistryItem = registryItem
export type ComponentsRegistry = ComponentsRegistryItem[]


/*
this is singular item
the buttons inside the collapsable
i.e. 1 item is 1 block/component - pricing block, features block - these are 2 individual sidebarSectionItems
*/
export type SidebarSectionItem = {
  name: BlocksRegistryItem["name"],
  slug: BlocksRegistryItem["slug"],
}

/*
this is the collapsable section
i.e. blocks, components, inspiration - these are 3 individual sidebarSections
*/
export type SidebarSection = {
  sectionName: string
  sectionSlug: string
  sectionIcon: LucideIcon
  isActive: boolean
  items: SidebarSectionItem[]
}

export type pageData = {
  name: string
  slug: string
  thumbnail?: string
  variantSections: Record<string, {
    name: string
    slug: string
    importComponentPath: () => Promise<{ default: React.ComponentType<any>;[key: string]: any }>;
    code: string
  }>
}