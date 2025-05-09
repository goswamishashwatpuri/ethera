"use client"

import { useState } from "react"
import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
type NavMainDataType = {
  navMainData: Array<{
    sectionName: string
    sectionSlug: string
    sectionIcon: LucideIcon
    isActive: boolean
    items?: {
      name: string
      slug: string
    }[]
  }>
}

export function NavMain({ navMainData }: NavMainDataType) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {navMainData.map((section) => {
          const [isOpen, setIsOpen] = useState(false)
          return (
            <Collapsible key={section.sectionName} asChild
              defaultOpen={section.isActive}
            >
              <SidebarMenuItem>
                <div
                  className={`group sticky top-0 z-10 rounded-md 
                    ${(pathname.includes(section.sectionSlug) || isOpen) ? "bg-background bg-gradient-to-r from-primary/20 to-primary-gradient/30" : ""}`}
                >
                  <SidebarMenuButton asChild tooltip={section.sectionName} >
                    <a href={`/${section.sectionSlug}`}>
                      <section.sectionIcon />
                      <span>{section.sectionName}</span>
                    </a>
                  </SidebarMenuButton>
                  {section.items?.length && (
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction
                        className="data-[state=open]:rotate-90"
                        onClick={() => setIsOpen((prev) => !prev)}
                      >
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                  )}
                </div>
                {section.items?.length ? (
                  <CollapsibleContent>
                    {section.items?.length && (
                      <SidebarMenuSub>
                        {section.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.name}>
                            <SidebarMenuSubButton asChild>
                              <a href={`/${section.sectionSlug}/${subItem.slug}`}>
                                <span>{subItem.name}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </CollapsibleContent>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
