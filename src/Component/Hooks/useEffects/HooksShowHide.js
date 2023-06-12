import React, { useState , useEffect} from 'react'

function HooksShowHide() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const mouseLog = e =>{
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
    console.log('updateEverytime')
    window.addEventListener('mousemove',mouseLog)
    return()=>{
      window.removeEventListener('mousemove',mouseLog)
    }
  },[])


  return (
    <div>HooksShow-hide X- {x}  Y-{y}</div>
    
  )
}

export default HooksShowHide