import React, { useState } from 'react'

function CounterMemo() {
    const[counter1,setCounter1] = useState(0)
    const[counter2,setCounter2] = useState(0)

    const incrementCounter1  = () =>{
         setCounter1(counter1+1)    
    }

    const incrementCounter2  = () =>{
        setCounter2(counter2+2)    
   }

   const isEven = () => {
    let i = 0
    while(i<200000000000000) i++
    return counter1 % 2 == 0
   }

  return (
    <div>CounterMemo
        <div>
        {counter1}
            <button onClick={incrementCounter1}> increment1</button>
             <span>{isEven() ? 'Even' : 'odd'}</span>
        </div>
        <div>
        {counter2}
         <button onClick={incrementCounter2}> increment2</button>
        </div>
    </div>
  )
}

export default CounterMemo