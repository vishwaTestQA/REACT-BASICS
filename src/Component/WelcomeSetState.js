import React, { Component, Fragment } from 'react'

class WelcomeSetState extends Component {
    constructor(props){
        super(props)
        this.state={
           count:0
        }
         
    }

    // increment(){
    //   //  this.state.count+=1;
    //   this.setState({
    //     count: this.state.count+1
    //   },()=>{console.log(this.state.count);
    //     console.log('increment');  })
       
    // }

    increment(){
      //  this.state.count+=1;
      this.setState((prevState)=>({
         count: prevState.count+1
      }))  
    }

    incrementByUser(){
      const{nameOne} = this.props;
      console.log(nameOne);
      this.setState(
        {
          count: this.state.count+Number(nameOne)
        }
      )

      
    }
    incrementByUser1(){
      const{nameOne} = this.props;
      console.log(nameOne);
      this.setState(
        {
          count: this.state.count+Number(nameOne)
        }
      )

      
    }

    incrementByUser2(){
      const{nameOne} = this.props;
      console.log(nameOne);
      this.setState(
        {
          count: this.state.count+Number(nameOne)
        }
      )
      
    }

    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }
    
    
    // incrementByUserFive(){
    //   this.incrementByUser()
    //   this.incrementByUser()
    //   this.incrementByUser()
    //   this.incrementByUser()
    //   this.incrementByUser()
    // }

    incrementByUserTwo(){
      this.incrementByUser1()
      this.incrementByUser2()

    }
   

  render() {
   
    return (
        <Fragment>
      <div>SetStateClass</div>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.incrementByUserTwo()}>state</button>
      </Fragment>
    )
  }
}

export default WelcomeSetState