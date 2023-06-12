import React, { Component } from 'react'

// class ClickCounterRender extends Component {
    
//   render() {
  function ClickCounterRender(props){
    return (
      <div>
       <button onClick={props.incrementCount}>Button {props.count}</button>
       </div>
    )
  }
// }

export default ClickCounterRender