import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoFunc from './MemoFunc'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'first'
      }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:'first'
            })
        },5000)
    }
  render() {
    console.log('parent');
    return (
        <>  
      <div>ParentComponent {this.state.name}</div>
      {/* <PureComp name={this.state.name}/>
      <RegularComp name={this.state.name}/> */}
      <MemoFunc name={this.state.name}/>
      </>
    )
  }
}

export default ParentComponent