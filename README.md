# react-trap

> Detect dom events inside or outside an element

[![NPM](https://img.shields.io/npm/v/react-trap.svg)](https://www.npmjs.com/package/react-trap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [Live Demo, playground & DOCS](https://sag1v.github.io/react-trap/)

## Install

```bash
npm install --save react-trap
```

## Usage

```jsx
import React from 'react'
import Trap from 'react-trap'

class App extends React.Component {
  render () {
    return (
      <Trap event="click">
        {
          (trapped, ref) => (
            <div ref={ref}>
              {trapped ? "I'm focused" : "I'm out of focus"}
            </div>
          )
        }
      </Trap>
    )
  }
}
```

## License

MIT © [sag1v](https://github.com/sag1v)
