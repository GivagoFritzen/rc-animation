import React, { Component } from 'react'

import style from './HorizontalLoading.css'

export class HorizontalLoading extends Component {
  render() {
    return (
      <div className={style.rcAnimationHorizontalLoading}>
        <div className={style.rcAnimationHorizontalLoadingRect1} />
        <div className={style.rcAnimationHorizontalLoadingRect2} />
        <div className={style.rcAnimationHorizontalLoadingRect3} />
        <div className={style.rcAnimationHorizontalLoadingRect4} />
        <div className={style.rcAnimationHorizontalLoadingRect5} />
      </div>
    )
  }
}
