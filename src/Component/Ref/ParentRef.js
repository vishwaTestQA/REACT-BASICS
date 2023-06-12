import React, { Component, Fragment } from 'react'
import ChildRef from './ChildRefClass'


export class ParentRef extends Component {

    constructor(props) {
      super(props)
      this.compRef = React.createRef()
      
    }

    clickHandler = () =>{
     this.compRef.current.focusInput()
     console.log(this.compRef)
        }

  render() {
    return (
        <Fragment>
            <ChildRef ref={this.compRef}/>
           <div>ParentRef</div>
           <button onClick={this.clickHandler}>focus button</button>
        </Fragment>
      
    )
  }
}

export default ParentRef