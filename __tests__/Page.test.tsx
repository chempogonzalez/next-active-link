import { describe, test } from 'vitest'
import { renderWithNextRouter, screen, userEvent } from 'vitest-react'

import Home from '../test-page/pages'



describe('[ActiveLink] >>', () => {
  test('- active class when link is clicked and navigated to', async ({ expect }) => {
    renderWithNextRouter(<Home />)
    const link = screen.getByText('Test Link')
    expect(link).not.toHaveClass('active-link')

    await userEvent.click(link)
    expect(link).toHaveClass('active-link')
  })



  test('- active class when accessing directly to the test link route', async ({ expect }) => {
    renderWithNextRouter(<Home />, { url: '/test' })
    const testLink = screen.getByText('Test Link')
    const contactLink = screen.getByText('Contact Link')

    expect(testLink).toHaveClass('active-link')
    expect(contactLink).not.toHaveClass('active-link')
  })



  test('- active class navigating to other link', async ({ expect }) => {
    renderWithNextRouter(<Home />, { url: '/test' })
    const testLink = screen.getByText('Test Link')
    const contactLink = screen.getByText('Contact Link')

    expect(testLink).toHaveClass('active-link')
    expect(contactLink).not.toHaveClass('active-link')

    await userEvent.click(contactLink)
    expect(contactLink).toHaveClass('active-link')
    expect(testLink).not.toHaveClass('active-link')
  })



  test('- wrapped link', async ({ expect }) => {
    renderWithNextRouter(<Home />, { url: '/wrapped-link' })
    expect(screen.getByText('Wrapped Link').parentElement).toHaveClass('active-link')
  })
})
