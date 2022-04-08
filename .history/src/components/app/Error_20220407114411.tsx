import React, { Component } from 'react'
import "./assets/error.scss"

export default class Error extends Component {
  render() {
    return (
      <div className='error'>
        <img className='log' src="https://vatanparvar.uz/Files/images/logo.gif"/>
        <img className="bk" src="https://vatanparvar.uz/img/error.svg"/>
        <img className="bk1" src="https://vatanparvar.uz/img/error2.svg"/>
      </div>
    )
  }
}
