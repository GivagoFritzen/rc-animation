import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DepthText.css'

export class DepthText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props

    return <h1 className='rc-animation-depth'>{text}</h1>
  }
}
