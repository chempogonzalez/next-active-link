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
} & LinkProps






/**
 * A Link Component wrapper that adds an active class name when the link is active.
 */
export const ActiveLink = ({ children, activeClassName, ...props }: ActiveLinkProps): JSX.Element => {
  const child = Children.only(children)
  const childClassName = (child.props.className ?? '') as string

  /**
   * props.as => Dynamic routes and rewrites
   * props.href => Static routes
   */
  const url = (props.as || props.href) as URL

  const className = useAddActiveClassName({
    activeClassName,
    childClassName,
    linkUrl: url,
  })



  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}
