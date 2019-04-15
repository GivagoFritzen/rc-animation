import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './JumpText.css'

export class JumpText extends Component {
  static defaultProps = {
    transitionTime: 0.3
  }

  static propTypes = {
    delay: PropTypes.bool,
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  state = {
    chars: []
  }

  componentDidMount() {
    const { delay, text } = this.props

    if (delay) {
      this._fragmentText()
    } else {
      this.setState(() => ({ chars: text }))
    }
  }

  _getStyle(timeDelay) {
    const { delay, transitionTime } = this.props

    let style
    if (delay) {
      style = {
        'WebkitAnimation': `rc-animation-jump-bounce ${transitionTime}s ease infinite alternate`,
        'WebkitAnimationDelay': `${(timeDelay)}s`
      }
    } else {
      style = { 'WebkitAnimation': `rc-animation-jump-bounce ${transitionTime}s ease infinite alternate` }
    }

    return style
  }

  _fragmentText() {
    const { text } = this.props

    const textArray = Array.from(text)
    this.setState(() => ({ chars: textArray }))
  }

  render() {
    return this.renderText()
  }

  renderText() {
    const { chars } = this.state

    let textAnimated = null

    if (typeof chars === 'string') {
      textAnimated = <p className='rc-animation-jump' style={this._getStyle()}>{chars}</p>
    } else {
      textAnimated = <p>
        {(
          chars.map((char, key) => {
            return <span className='rc-animation-jump' key={key} style={this._getStyle(key + 1)}> {char}</span>
          })
        )}
      </p>
    }

    return textAnimated
  }
}
