import { describe, test, expect } from 'vitest'

import { isLinkActive } from '../src/components/ActiveLink/ActiveLink.helpers'

import type { ActiveLinkProps } from '../src/components/ActiveLink/ActiveLink'



describe.only('[ActiveLink -- HELPERS] >>', () => {
  describe('>> isLinkActive', () => {
    test('- activeMatchOptions exact true', () => {
      const currentLink = '/contact'
      const linkUrl = '/contact'
      const activeMatchOptions = {
        exact: true,
      }

      const isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)
    })

    test('- activeMatchOptions exact false', () => {
      const currentLink = '/contact#fragment'
      let linkUrl = '/contact'
      const activeMatchOptions = {
        exact: false,
      }

      let isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)
      expect(isActive).toBe(true)

      linkUrl = '/cont'
      isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)
      expect(isActive).toBe(true)
    })


    test('- activeMatchOptions paths exact & partial', () => {
      const currentLink = '/contact/user'
      let linkUrl = '/contact/user'
      let activeMatchOptions: ActiveLinkProps['activeMatchOptions'] = {
        paths: 'exact',
      }

      let isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)

      linkUrl = '/contact'
      activeMatchOptions = {
        paths: 'partial',
      }

      isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)
    })


    test('- activeMatchOptions fragment exact and not', () => {
      const currentLink = '/contact/user#fragment'
      let linkUrl = '/contact/user#fragment'
      let activeMatchOptions: ActiveLinkProps['activeMatchOptions'] = {
        fragment: 'exact',
      }

      let isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)

      linkUrl = '/contact/user'
      activeMatchOptions = {
        paths: 'exact',
        fragment: undefined,
      }

      isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)
    })


    test('- activeMatchOptions queryParams exact and partial', () => {
      const currentLink = '/contact/user?id=1&name=John'
      let linkUrl = '/contact/user?id=1&name=John'
      let activeMatchOptions: ActiveLinkProps['activeMatchOptions'] = {
        queryParams: 'exact',
      }

      let isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)

      linkUrl = '/contact/user?name=John'
      activeMatchOptions = {
        queryParams: 'partial',
      }

      isActive = isLinkActive(linkUrl, currentLink, activeMatchOptions)

      expect(isActive).toBe(true)
    })
  })
})
