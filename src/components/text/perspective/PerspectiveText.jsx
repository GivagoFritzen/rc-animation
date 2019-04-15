import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PerspectiveText.css'

export class PerspectiveText extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired
  }

  render() {
    const { children } = this.props
    return (
      <div className='rc-animation-perspective-container'>
        {React.Children.map(children, el => {
          return React.cloneElement(el, {
            className: 'rc-animation-perspective'
          })
        })}
      </div>
    )
  }
}
