import React, { Component } from 'react'

export class CounterRender extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
        // this.incrementCount = this.incrementCount.bind(this)
      }
      incrementCount =()=>{
      //  console.log(this.state.count)
          this.setState((prevState)=>{
         return {count:prevState.count+1}
          })
      }
  render() {
  
    return (
      <div>{this.props.children(this.state.count ,this.incrementCount)}</div>
    )
  }
}

export default CounterRender