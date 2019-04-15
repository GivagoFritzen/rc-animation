import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './LoadingText.css'

export class LoadingText extends Component {
  static defaultProps = {
    transitionTime: 8
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  render() {
    const { text, transitionTime } = this.props
    const style = { '--animationTime': `${transitionTime}s` }

    return <p className='rc-animation-loading-text' style={style} data-text={text} >{text}</p>
  }
}
