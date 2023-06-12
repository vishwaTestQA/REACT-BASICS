import React, { Component } from 'react'
import style from './ref.module.css'
class ChildRefClass extends Component {
    constructor(props) {
      super(props)
      this.inpRef = React.createRef()
     
    }

    focusInput(){
        this.inpRef.current.focus()
        console.log('hi');
    }

    render(){ 
         return (
          <div className={style.ipRef}>
         <input className='ip-ref' type='text' ref={this.inpRef}/>
        </div>
      )
    }
    }

export default ChildRefClass