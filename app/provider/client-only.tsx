import { useEffect, useState } from 'react'
import { AppLoading } from '~/component/app-component/app-loading'

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div>
        <AppLoading />
      </div>
    )
  }

  return <>{children}</>
}
