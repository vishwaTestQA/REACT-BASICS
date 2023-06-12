import React, { Component } from 'react'

class PractisThis extends Component {

show(){
console.log(this);
 }



  render() {
    this.show();
    return (
      <div>PractisThis</div>
    )
  }
}

export default PractisThis