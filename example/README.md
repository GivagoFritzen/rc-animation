# rc-animation

> react package animations

[![NPM](https://img.shields.io/npm/v/rc-animation.svg)](https://www.npmjs.com/package/rc-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-animation
```

### Example
[PlayGround](https://codesandbox.io/s/9o00jr9kxo)

## Usage

```jsx
import React, { Component } from 'react'

import {
  BarLoading, CircleBallLoading, DefaultLoading, HorizontalLoading,
  DepthText, GhostText, ShinyText, JumpText, LoadingText, NeonText, PerspectiveText, TranslateUpText
} from 'rc-animation'

import './index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* LOADINGS */}
        <BarLoading backgroundColor='red' height={20} />
        <BarLoading animated reverse slower />
        <CircleBallLoading />
        <CircleBallLoading delay />
        <DefaultLoading />
        <HorizontalLoading />

        {/* TEXT */}
        <DepthText text='Teste' />
        <GhostText transitionTime={1}>
          <GhostText.Text text='C' />
          <GhostText.Text text='L' />
          <GhostText.Text text='I' />
          <GhostText.Ghost text='I' />
          <GhostText.Ghost text='I' />
          <GhostText.Text text='C' />
          <GhostText.Text text='K' />
          <GhostText.Ghost text='H' />
          <GhostText.Ghost text='i' />
        </GhostText>
        <ShinyText text='Teste' transitionTime={4} />
        <JumpText text='Teste' transitionTime={0.1} />
        <JumpText text='Teste' transitionTime={0.3} delay />
        <LoadingText text='Teste' transitionTime={1} />
        <NeonText backgroundColor='#cfa518' text='Teste' transitionTime={1} />
        <PerspectiveText>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </PerspectiveText>

        <TranslateUpText height={40} transitionTime={10}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </TranslateUpText>
      </div>
    )
  }
}

```

## License

MIT © [Givago Fritzen](https://github.com/Givago Fritzen)
