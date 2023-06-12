import React, { Component, Fragment } from 'react'

class CompoBB extends Component {

    constructor(props) {
      super(props)
   this.inputRef = React.createRef()
   this.count=0
    } 

    focusMethod() {
        this.inputRef.current.focus()
    }
render(){
  return (
    <Fragment>
    <input type='text' ref={this.inputRef}/>
    </Fragment>
  )
}
}

export default CompoBB