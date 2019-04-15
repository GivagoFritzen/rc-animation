import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TranslateUpText.css'

class Text extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props
    return <li>{text}</li>
  }
}

export class TranslateUpText extends Component {
  static Text = Text

  static defaultProps = {
    height: 40,
    transitionTime: 10
  }

  static propTypes = {
    height: PropTypes.number,
    transitionTime: PropTypes.number
  }

  render() {
    const { children, height, transitionTime } = this.props
    const styleContainer = {
      '--height': `${height}px`
    }
    const styleUL = {
      '--animationTime': `${transitionTime}s`
    }

    return (
      <div className='rc-animation-translate-up' style={styleContainer}>
        <ul className='rc-animation-translate-up-ul' style={styleUL}>
          {React.Children.map(children, el => {
            return <Text text={el} />
          })}
        </ul>
      </div>
    )
  }
}
