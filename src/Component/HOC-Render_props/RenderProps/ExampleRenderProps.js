import React, { Component } from 'react'

class ExampleRenderProps extends Component {
  render() {
    return (
    <>
      {/* <div>ExampleRenderProps {this.props.name} {this.props.name123()}</div> */}
      <p>this is function {this.props.render()}</p>
      </>
    )
  }
}

export default ExampleRenderProps