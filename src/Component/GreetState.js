import React, { Component } from "react";
import {Fragment} from 'react'
  class GreetState extends Component{

  
    constructor(){
        super()
        this.state = {message:'welcome visitor'};
    }

   // let flag=false;
    changeMessage(){  
  this.setState({
      message:'Hi'
  })
}




    render(){
        return(
            <Fragment>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>

            </Fragment>
        )
    }
} 

export default GreetState;
