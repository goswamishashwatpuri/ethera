"use client"

import * as React from "react"
import {
  Command,
  Send,
  Github,
  Boxes,
  Box,
  Lightbulb,
  Twitter,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavFooter } from "@/components/sidebar/nav-secondary"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { SidebarSection, SidebarSectionItem } from "@/lib/types"
import { getBlocksRegistry } from "@/actions/registry-actions"
import { usePathname } from "next/navigation"

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname()
  // sync function loading data from action.
  const blocksRegistry = getBlocksRegistry()
  const data = {
    navSections: [
      {
        sectionName: "Blocks",
        sectionSlug: "blocks",
        sectionIcon: Boxes,
        items: blocksRegistry as SidebarSectionItem[],
        isActive: pathname.includes("blocks")
      },
      {
        sectionName: "Components",
        sectionSlug: "components",
        sectionIcon: Box,
        items: blocksRegistry as SidebarSectionItem[],
        isActive: pathname.includes("components")
      },
      {
        sectionName: "Inspiration",
        sectionSlug: "inspiration",
        sectionIcon: Lightbulb,
        isActive: pathname.includes("inspiration"),
      },
    ] as SidebarSection[],
    navFooter: [
      {
        title: "Contribute on GitHub",
        url: "https://github.com/shashwatpuri/ethera",
        icon: Github,
      },
      {
        title: "X @WhyShashwat",
        url: "https://x.com/WhyShashwat",
        icon: Twitter,
      },
    ]
  }
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}
      className="[&>*]:bg-transparent"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
              <a href="/">
                <div className="bg-muted text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">ethera</span>
                  <span className="truncate text-xs text-foreground/50">UI blocks you'd love</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="customThinScrollbar">
        <NavMain navMainData={data.navSections} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter items={data.navFooter} className="mt-auto" />
      </SidebarFooter>
    </Sidebar>
  )
}
