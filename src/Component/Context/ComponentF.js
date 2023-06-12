import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF() {
  return (
    <UserConsumer>
    {
    (value)=>{
        return <div>ComponentF{value.name}</div>
    }
  }
 </UserConsumer>
    
  )
}

export default ComponentF