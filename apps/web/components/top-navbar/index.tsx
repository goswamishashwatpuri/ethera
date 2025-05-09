"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

import { getGlobalRegistryItemUsingSlug } from '@/actions/registry-actions'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeSwitcher from './theme-switcher'

function TopNavbar() {
  const pathname = usePathname().split('/').filter(Boolean)
  const pathnameItems = pathname.map((item) => {
    switch (item) {
      case 'blocks':
        return {
          name: 'Blocks',
          breadcrumbUrl: '/blocks'
        }
      case 'components':
        return {
          name: 'Components',
          breadcrumbUrl: '/components'
        }
      case 'inspiration':
        return {
          name: 'Inspiration',
          breadcrumbUrl: '/inspiration'
        }
    }
    const itemData = getGlobalRegistryItemUsingSlug(item)
    return {
      name: itemData?.name,
      breadcrumbUrl: itemData?.breadcrumbUrl
    }
  })
  return (
    <header className="flex items-center justify-between py-2  px-[1rem] lg:px-[2rem] xl:px-[3rem]">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            {/* insert map here. */}
            {pathnameItems.map((item, idx) => (
              <React.Fragment key={item.breadcrumbUrl}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.breadcrumbUrl}>
                    {item.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {idx < pathnameItems.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ThemeSwitcher />
    </header>
  )
}

export default TopNavbar