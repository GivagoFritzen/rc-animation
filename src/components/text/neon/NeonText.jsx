import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NeonText.css'

export class NeonText extends Component {
  static defaultProps = {
    transitionTime: 0.3
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  render() {
    const { text, transitionTime } = this.props
    return <p style={{ animation: `rc-animation-neon ${transitionTime}s ease-in-out infinite alternate` }}>{text}</p>
  }
}
