import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './NeonText.css'

export class NeonText extends Component {
  static defaultProps = {
    backgroundColor: '#ff0080',
    transitionTime: 0.3
  }

  static propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  getStyles() {
    const { backgroundColor, transitionTime } = this.props

    return {
      'animation': `${styles.rcAnimationNeon} ${transitionTime}s ease-in-out infinite alternate`,
      '--backgroundColor': `${backgroundColor}`
    }
  }

  render() {
    const { text } = this.props
    return <p style={this.getStyles()}>{text}</p>
  }
}
