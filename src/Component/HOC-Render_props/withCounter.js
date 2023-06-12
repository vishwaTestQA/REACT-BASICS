import React ,{Component} from 'react'

function withCounter(WrappedComponent) {
    class WithCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
              incrementCount = ()=>{
                 this.setState((prevState)=>{
                  return {count:prevState.count+1}
                 },()=>console.log(this.state.count))
                
              }
              render(){
               const {count} = this.state;
           
                return(
                <WrappedComponent count={count} incrementCount={this.incrementCount}/>
                )
              }
    }
  return (
    WithCounter
  )
}

export default withCounter