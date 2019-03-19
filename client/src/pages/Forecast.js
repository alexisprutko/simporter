import React, { Component } from 'react'
import { scrollTop } from '../helpers/scroll';

export default class Forecast extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
    return (
      <div>
        Forecast
      </div>
    )
  }
}
