import React, { useState } from 'react'
import { CurrentPageContext } from '../contexts/current-page-context'
import { registryItem } from '@/lib/types'

type Props = {
  children: React.ReactNode
}

function CurrentPageContextProvider({ children }: Props) {
  const [currentPageData, setCurrentPageData] = useState<registryItem>({} as registryItem)
  return (
    <CurrentPageContext.Provider value={{ currentPageData, setCurrentPageData }}>
      {children}
    </CurrentPageContext.Provider>
  )
}

export default CurrentPageContextProvider