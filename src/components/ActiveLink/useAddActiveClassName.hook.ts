import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { cn } from 'tiny-cn'

import { isLinkActive } from './ActiveLink.helpers'

import type { ActiveLinkProps } from './ActiveLink'



interface Params {
  activeClassName: string
  childClassName: string
  linkUrl: string | URL
  activeMatchOptions: ActiveLinkProps['activeMatchOptions']
  onActiveChange: ActiveLinkProps['onActiveChange']
}

export const useAddActiveClassName = ({
  activeClassName,
  childClassName,
  linkUrl,
  activeMatchOptions,
  onActiveChange,
}: Params): string => {
  const [className, setClassName] = useState(childClassName)
  const { asPath, isReady } = useRouter()

  useEffect(() => {
    /** Whether the router fields are updated client-side and ready for use  */
    if (isReady) {
      const isActive = isLinkActive(linkUrl, asPath, activeMatchOptions)

      if (onActiveChange) onActiveChange(isActive)

      const newClassName = cn({
        [childClassName]: true,
        [activeClassName]: isActive,
      })

      const shouldUpdateLinkClassName = newClassName !== className

      if (shouldUpdateLinkClassName) setClassName(newClassName)
    }
  }, [
    asPath,
    isReady,
    linkUrl,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ])


  return className
}
