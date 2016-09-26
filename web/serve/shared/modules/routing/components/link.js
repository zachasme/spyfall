import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pushLocation } from '../actions'

@connect()
export default class Link extends Component {
  handleClick = event => {
    event.preventDefault()
    this.props.dispatch(pushLocation(this.props.pathname))
  }

  render() {
    return <a href={this.props.pathname} onClick={this.handleClick}>{this.props.children}</a>
  }
}
