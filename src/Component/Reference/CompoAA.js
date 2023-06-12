import React, { Fragment } from 'react'
import CompoBB from './CompoBB'
import CompCC from './CompCC'
import CompDD from './CompDD'


function CompoAA() {

    let refComp =  React.createRef()
    // let refComp2 =  React.createRef()

    let clickHandler = ()=>{
    refComp.current.focusMethod()
    console.log(refComp.current.count);
   // refComp.current.method_DD();
   }



  return (
    <Fragment>
    <button onClick={clickHandler}>CompoAA</button>
    <CompoBB ref={refComp}/>
    {/* <CompCC ref={refComp}/> */}
    {/* <CompDD  ref={refComp}/> */}
    </Fragment>
  )
}

export default CompoAA