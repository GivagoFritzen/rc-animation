import React, { Component } from 'react'

import style from './DefaultLoading.css'

export class DefaultLoading extends Component {
  render() {
    return (
      <div className={style.rcAnimationLdsSpinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    )
  }
}
