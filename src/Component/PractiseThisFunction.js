import React from 'react'

function PractiseThisFunction() {
    
 function show(){
    console.log("vis",this); 
 }

 const newFumc =show.bind({video:'yt'});
(newFumc())

  return (
    <div>PractiseThisFunction</div>
  )
}

export default PractiseThisFunction