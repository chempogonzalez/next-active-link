import type { ActiveLinkProps } from './ActiveLink'



const ACTIVE_MATCH_OPTIONS_DEFAULT: ActiveLinkProps['activeMatchOptions'] = {
  fragment: undefined,
  paths: undefined,
  queryParams: undefined,
}

export const isLinkActive = (
  linkUrl: string | URL,
  currentLink: string,
  activeMatchOptions: ActiveLinkProps['activeMatchOptions'] = {
    exact: true,
  },
): boolean => {
  const currentLinkObj = new URL(currentLink, location.href)
  const linkUrlObj = new URL(linkUrl, location.href)

  if ('exact' in activeMatchOptions) {
    return activeMatchOptions.exact
      ? currentLinkObj.href === linkUrlObj.href
      : currentLinkObj.href.includes(linkUrlObj.pathname)
  } else {
    let isActive = false
    const { fragment, paths, queryParams } = { ...ACTIVE_MATCH_OPTIONS_DEFAULT, ...activeMatchOptions }

    if (fragment) {
      isActive = currentLinkObj.hash === linkUrlObj.hash
    }

    if (paths) {
      const pathList = currentLinkObj.pathname.split('/')
      const linkPathList = linkUrlObj.pathname.split('/')

      isActive = paths === 'exact'
        ? currentLinkObj.pathname === linkUrlObj.pathname
        : pathList.some((path) => linkPathList.includes(path))
    }

    if (queryParams) {
      const currentQueryParams = Object.fromEntries(currentLinkObj.searchParams.entries())
      const linkQueryParams = Object.fromEntries(linkUrlObj.searchParams.entries())

      isActive = queryParams === 'exact'
        ? currentLinkObj.search === linkUrlObj.search
        : Object.entries(currentQueryParams).some(([key, value]) => {
          return linkQueryParams[key] === value
        })
    }
    return isActive
  }
}
