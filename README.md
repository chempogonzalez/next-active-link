# ✅ next-active-link

> Active link component for Next.JS, wrapping next/link component

`next/link` wrapper which automatically add the provided class to the link element.

## 📦 Installation
```zsh
# Install the component
$ npm install next-active-link
```

## 🚀 Usage
The usage is the same as the `next/link` component. More information in [Official docs](https://nextjs.org/docs/api-reference/next/link)

The only difference is that the _**next-active-link**_ component has an `activeClassName` attribute .
```tsx
import { ActiveLink } from 'next-active-link';

function MyPage() {
  return (
    <ActiveLink href="/" activeClassName="active-link">
      <a>Home</a>
    </ActiveLink>



    {
      /** Add 'active-link' className to "a" tag
      * if the current page is '/contact'
      */
    }
    <ActiveLink href="/contact" activeClassName="active-link">
      <a>Contact</a>
    </ActiveLink>
  )
}
```
