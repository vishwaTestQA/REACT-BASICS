import React, { useState } from 'react'
import HooksShowHide from './HooksShowHide'

function UnmountEffect() {
  const[container,setContainer] = useState(true)
  // const setfun = ()=> setState(true)

  //  }

  return (
    <div>
    <div>unmountEffect</div>
    <button onClick={()=>setContainer(!container)}>button</button>
    {container && <HooksShowHide/>}
    </div>
  )
}

export default UnmountEffect