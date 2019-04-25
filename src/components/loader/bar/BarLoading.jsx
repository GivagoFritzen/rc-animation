import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './BarLoading.css'

export class BarLoading extends Component {
  static defaultProps = {
    backgroundColor: '#34c2e3',
    height: 45
  }

  static propTypes = {
    animated: PropTypes.bool,
    backgroundColor: PropTypes.string,
    height: PropTypes.number,
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

  getStyles() {
    const { backgroundColor, height } = this.props

    return {
      '--backgroundColor': `${backgroundColor}`,
      '--height': `${height}px`
    }
  }

  render() {
    return (
      <div className={this.getClassEffect()} >
        <span className={style.rcAnimationBarProgressBarInner} style={this.getStyles()} />
      </div>
    )
  }
}
