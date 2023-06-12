import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const{count,incrementCount}=this.props;
    return (
      <div onMouseOver={this.props.incrementCount}>HoverCounter {count}</div>
    )
  }
}

export default withCounter(HoverCounter)