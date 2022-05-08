import Link from 'next/link'
import { Children, cloneElement } from 'react'

import { useAddActiveClassName } from './useAddActiveClassName.hook'

import type { LinkProps } from 'next/link'


/**
 * A link that adds an active class name when the link is active.
 */
export type ActiveLinkProps = {
  /**
   * It must be a Single Component to be rendered (Child).
   *
   * NOTE: If you are using a Custom component instead of <a></a>,
   *       remember to use 'passHref' prop to propagate href
   */
  children: JSX.Element


  /**
   * Active class name to be added.
   */
  activeClassName: string


  /**
   * A set of options which specify how to determine if a url is active
   */
  activeMatchOptions?: {
    exact: boolean
  } | {
    paths?: 'exact' | 'partial'
    queryParams?: 'exact' | 'partial'
    fragment?: 'exact'
  }


  /**
   * You can use the output onActiveChange to get notified
   * each time the link becomes active or inactive.
   */
  onActiveChange?: (isActive: boolean) => unknown
} & LinkProps






/**
 * A Link Component wrapper that adds an active class name when the link is active.
 */
export const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps): JSX.Element => {
  const child = Children.only(children)
  const childClassName = (child.props.className ?? '') as string

  /**
   * as => Dynamic routes and rewrites
   * href => Static routes
   */
  const { as, href, activeMatchOptions, onActiveChange } = props
  const url = (as || href) as URL

  const className = useAddActiveClassName({
    activeClassName,
    childClassName,
    linkUrl: url,
    activeMatchOptions,
    onActiveChange,
  })



  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}
