import Head from 'next/head'
import { cn } from 'tiny-cn'

import { ActiveLink } from '../../src/components/ActiveLink/ActiveLink'


import type { NextPage } from 'next'



const Link = ({ href, children, className }: any): JSX.Element => {
  return (
    <div className={cn({
      wrapper: true,
      [className]: className,
    })}
    >
      <a href={href}>{children}</a>
    </div>
  )
}


const Home: NextPage = () =>
  <>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <ActiveLink activeClassName='active-link' href='/test'>
        <a className='link-cn'>Test Link</a>
      </ActiveLink>

      <ActiveLink activeClassName='active-link' href='/contact'>
        <a className='link-cn'>Contact Link</a>
      </ActiveLink>

      <ActiveLink
        passHref
        activeClassName='active-link'
        href='/wrapped-link'
      >
        <Link href='/test'>Wrapped Link</Link>
      </ActiveLink>
    </main>
  </>

export default Home
