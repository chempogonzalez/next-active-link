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

The differences are that the _**next-active-link**_ component has the following props `activeClassName` and `activeMatchOptions` .

### 🟢 ActiveClassName
_(Component prop)_ The class name to be added to the link element when the link is active.
```ts
const activeClassName: string = 'active-link'
```

### 🟢 ActiveMatchOptions
_(Component prop)_ The options to be used to match the link.
```ts
/**
 *  You have the following options:
 */
  const activeMatchOptions_Option_1 = {
    exact: true | false
  }

  const activeMatchOptions_Option_2 = {
    paths: 'exact' | 'partial'        // optional
    queryParams: 'exact' | 'partial'  // optional
    fragment: 'exact'                 // optional
  }
```

### 🟢 onActiveChange
_(Component `method` prop)_ The callback to be called when the link active state changes.
```ts
  const onActiveChange: (isActive: boolean) => {
    // ...
  }
```

## 🤓 Example
```tsx
import { ActiveLink } from 'next-active-link';

  function MyPage() {
  /**
   * Adds 'active-link' className to "a" tag
   * if the current page is '/contact'
  */
  return (
    <ActiveLink
      href="/contact"
      activeClassName="active-link"
      onActiveChange={(isActive) => console.log(isActive)}
      activeMatchOptions={{
        queryParams: 'exact'
      }}
    >
      <a>Contact</a>
    </ActiveLink>
  )
}
```

## 🤓 Happy Code

> Created with Typescript! ⚡ and latin music 🎺🎵
