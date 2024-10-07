import React from 'react'
import { StyleProvider, createCache } from '@ant-design/cssinjs'

import type { FC, PropsWithChildren } from 'react'

const StyledComponentsRegistry: FC<PropsWithChildren> = ({ children }) => {
  const cache = React.useMemo(() => createCache(), [])

  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
