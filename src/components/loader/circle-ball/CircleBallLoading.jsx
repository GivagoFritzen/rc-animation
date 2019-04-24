import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './CircleBallLoading.css'

export class CircleBallLoading extends Component {
  static propTypes = {
    delay: PropTypes.bool
  }

  render() {
    const { delay } = this.props
    let component

    if (delay) {
      component = (
        <div className={style.rcAnimationCircleBallWithDelay}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )
    } else {
      component = (
        <div className={style.rcAnimationCircleBall}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )
    }

    return component
  }
}
