import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { cn } from 'tiny-cn'



interface Params {
  activeClassName: string
  childClassName: string
  linkUrl: string | URL
}

export const useAddActiveClassName = ({ activeClassName, childClassName, linkUrl }: Params): string => {
  const [className, setClassName] = useState(childClassName)
  const { asPath, isReady } = useRouter()

  useEffect(() => {
    /** Whether the router fields are updated client-side and ready for use  */
    if (isReady) {
      const linkPathname = new URL(linkUrl, location.href).pathname

      const currentPathname = new URL(asPath, location.href).pathname

      const isLinkPathnameActive = linkPathname === currentPathname

      const newClassName = cn({
        [childClassName]: true,
        [activeClassName]: isLinkPathnameActive,
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
