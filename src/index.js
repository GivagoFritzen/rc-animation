import React, { Component } from 'react'

// import styles from './styles.css'

// eslint-disable-next-line no-unused-vars
import { DepthText, GhostText, ShinyText, JumpText, LoadingText, NeonText, PerspectiveText, TranslateUpText } from './components/index'

export default class RCAnimation extends Component {
  static DepthText = DepthText
  static GhostText = GhostText
  static ShinyText = ShinyText
  static JumpText = JumpText
  static LoadingText = LoadingText
  static NeonText = NeonText
  static PerspectiveText = PerspectiveText
  static TranslateUpText = TranslateUpText

  render() {
    return (
      <h1>TESTE</h1>
      //   <div className={styles.test}>
      //     <h1>Teste</h1>
      //     <DepthText text='Teste' />
      //     <GhostText transitionTime={1}>
      //       <GhostText.Text text='C' />
      //       <GhostText.Text text='L' />
      //       <GhostText.Text text='I' />
      //       <GhostText.Ghost text='I' />
      //       <GhostText.Ghost text='I' />
      //       <GhostText.Text text='C' />
      //       <GhostText.Text text='K' />
      //       <GhostText.Ghost text='H' />
      //       <GhostText.Ghost text='i' />
      //     </GhostText>
      //     <ShinyText text='Teste' transitionTime={4} />
      //     <JumpText text='Teste' transitionTime={0.1} />
      //     <JumpText text='Teste' transitionTime={0.3} delay />
      //     <LoadingText text='Teste' transitionTime={1} />
      //     <NeonText text='Teste' transitionTime={1} />
      //     <PerspectiveText>
      //       <p>Teste</p>
      //       <p>Teste</p>
      //       <p>Teste</p>
      //       <p>Teste</p>
      //       <p>Teste</p>
      //       <p>Teste</p>
      //     </PerspectiveText>

      //     <TranslateUpText height={40} transitionTime={10}>
      //       <span>1</span>
      //       <span>2</span>
      //       <span>3</span>
      //       <span>4</span>
      //     </TranslateUpText>
      // </div >
    )
  }
}
