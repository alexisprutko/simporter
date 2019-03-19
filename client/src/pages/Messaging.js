import React, { Component } from 'react'
import { scrollTop } from '../helpers/scroll';

export default class Messaging extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
    return (
      <div>
          Messaging
      </div>
    )
  }
}
