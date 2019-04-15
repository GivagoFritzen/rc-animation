import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './GhostText.css'

class Text extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props
    return <li className='rc-animation-ghost-li'>{text}</li>
  }
}

class Ghost extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    transitionTime: PropTypes.number
  }

  render() {
    const { text, transitionTime } = this.props
    return <li className='rc-animation-ghost-li ghost' style={{ transition: `all ${transitionTime}s ease-in-out` }}>{text}</li>
  }
}

export class GhostText extends Component {
  static Text = Text
  static Ghost = Ghost

  static defaultProps = {
    transitionTime: 0.5
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    transitionTime: PropTypes.number
  }

  state = {
    hidden: true
  }

  _getHidden() {
    const { hidden } = this.state

    let classHidden = ''
    if (hidden) {
      classHidden = 'hidden'
    }

    return classHidden
  }

  render() {
    const { children, transitionTime } = this.props

    return (
      <ul className={`rc-animation-ghost ${this._getHidden()}`} onClick={() => this.setState(() => ({ hidden: !this.state.hidden }))} >
        {React.Children.map(children, el => {
          if (el.type === Text || el.type === Ghost) {
            return React.cloneElement(el, {
              transitionTime
            })
          }
        })}
      </ul>
    )
  }
}
