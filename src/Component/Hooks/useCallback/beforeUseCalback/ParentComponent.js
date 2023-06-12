import React, { useCallback, useState } from 'react'
import Titile from './Titile'
import Count from './Count'
import Button from './Button'

function ParentComponent() {

     const[age,setAge]=useState(28)
     const[salary,setSalary]=useState(50000)

     const incrementAge = useCallback(() => {
        console.log('hi')
        setAge(age+1)
     },[age])

     const incrementSalary = () => {
        setSalary(salary+1000)
     }


  return (
    <div>
        <Titile/>
        <Count text="age" count={age}/>
        <Button incrementHandler={incrementAge}> Increment Age </Button>
        <Count text="salary" count={salary}/>
        <Button incrementHandler={incrementSalary}> Increment Salary </Button>
    </div>
  )
}

export default ParentComponent