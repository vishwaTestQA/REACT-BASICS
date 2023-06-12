import React, { Fragment,Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

  render() {
    return (
     <Fragment>      
     <button onClick={this.props.incrementCount}>click button</button>
      <p> No of times clicked {this.props.count}</p>
      </Fragment>
    )
  }
}

export default withCounter(ClickCounter)