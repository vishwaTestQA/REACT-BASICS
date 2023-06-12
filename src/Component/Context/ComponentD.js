import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import ComponentF from './ComponentF'

class ComponentD extends Component {
  render() {
    return (
        <div>
        <UserConsumer>
        {
            (arr)=>{
            return <div>ComponentD {arr.name} {arr.age}</div>
            }
        }
      
      </UserConsumer>
      <ComponentF/>
      </div>
    )
  }
}

export default ComponentD