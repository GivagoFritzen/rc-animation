import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './BarLoading.css'

export class BarLoading extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    reverse: PropTypes.bool,
    slower: PropTypes.bool
  }

  getClassEffect() {
    const { animated, reverse, slower } = this.props
    let effects = style.rcAnimationBarProgressBar + ' ' + style.rcAnimationStripes

    if (animated) {
      effects += ' ' + style.rcAnimationAnimated
    }
    if (reverse) {
      effects += ' ' + style.rcAnimationReverse
    }
    if (slower) {
      effects += ' ' + style.rcAnimationSlower
    }

    return effects
  }

  render() {
    return (
      <div>
        <div className={this.getClassEffect()} >
          <span className={style.rcAnimationBarProgressBarInner} />
        </div>
      </div >
    )
  }
}
