import React, { Component } from 'react'
import ComponentD from './ComponentD'
import { UserConsumer } from './UserContext'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentD/>
        <UserConsumer>
        {
            (arr)=>{
            return <div>ComponentC {arr.name} {arr.age}</div>
            }
        }
      
      </UserConsumer>
        <div>Componentc</div>
      </div>
    )
  }
}

export default ComponentC