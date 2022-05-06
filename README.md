# ✅ next-active-link [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
<img src="https://img.shields.io/npm/v/next-active-link?style=for-the-badge" />

> Active link component for Next.JS

## 🔖 Description
`next/link` wrapper which automatically add the provided class to the link element.

## 📦 Installation
```zsh
# Install the component
$ npm install next-active-link
```

## 🚀 Usage
The usage is the same as the `next/link` component. More information in [Official docs](https://nextjs.org/docs/api-reference/next/link)

The difference is that the _**next-active-link**_ component has an `activeClassName` attribute .
```tsx
import { ActiveLink } from 'next-active-link';

function MyPage() {
  return (
    <ActiveLink href="/" activeClassName="active-link">
      <a>Home</a>
    </ActiveLink>


    {
      /** Adds 'active-link' className to "a" tag
      * if the current page is '/contact'
      */
    }
    <ActiveLink href="/contact" activeClassName="active-link">
      <a>Contact</a>
    </ActiveLink>
  )
}
```

## 🤓 Happy Code

> Created with Typescript! ⚡ and latin music 🎺🎵
