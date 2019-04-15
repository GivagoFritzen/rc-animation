import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ShinyText.css'

export class ShinyText extends Component {
  static defaultProps = {
    transitionTime: 3
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  render() {
    const { text, transitionTime } = this.props

    return <p className='rc-animation-shiny-text' style={{ animation: `rc-animation-shiny-text ${transitionTime}s linear infinite` }}>{text}</p>
  }
}
