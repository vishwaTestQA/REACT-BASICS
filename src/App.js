
import React, { Component } from 'react';
import './App.css';
import ExampleCss1 from './Component/css/ExampleCss1';
import Greet from './Component/Greet';
import GreetClass from './Component/GreetClass';
import GreetState from './Component/GreetState'
import NameList from './Component/NameList';
import PractiseThisFunction from './Component/PractiseThisFunction';
import PractisThis from './Component/PractisThis';
import WelcomeSetState from './Component/WelcomeSetState'
import style from './Component/css/myApp.module.css'
import './Component/css/myApp.css'
import ExampleCss2 from './Component/css/ExampleCss2';
// import ParentComponent from './Component/PureComponent-Memo/ParentComponent';
import ParentRef from './Component/Ref/ParentRef';
import ClickCounter from './Component/HOC-Render_props/ClickCounter';
import HoverCounter from './Component/HOC-Render_props/HoverCounter';
import ClickCounterRender from './Component/HOC-Render_props/RenderProps/ClickCounterRender';
import ExampleRenderProps from './Component/HOC-Render_props/RenderProps/ExampleRenderProps';
import CounterRender from './Component/HOC-Render_props/RenderProps/ClickCounterRender';
import ComponentD from './Component/Context/ComponentD';
import ComponentF from './Component/Context/ComponentF';
import {UserProvider} from './Component/Context/UserContext'
import ComponentC from './Component/Context/ComponentC';
import CompoAA from './Component/Reference/CompoAA';
import KeyDown from './Component/HOC-Render_props/KeyDown';
import HooksShowHide from './Component/Hooks/useEffects/HooksShowHide';
import UnmountEffect from './Component/Hooks/useEffects/UnmountEffect';
// import LocalReducer from './Component/Hooks/useRe3ducer/LocalReducer';
import ParentComponent from './Component/Hooks/useCallback/beforeUseCalback/ParentComponent';
import CounterMemo from './Component/Hooks/useMemo/CounterMemo';



// import './Component/css/myApp.css'

// function App() {
//   return (
//     <div className="App"> 
//      <Greet/>
//      <GreetClass></GreetClass>
//      <GreetState/>
//     </div>
//   );
// }

class App extends Component{
  render(){
    // const arr=["tom","jerry"]
    // const obj ={name:'tom',age:27}
    return(
          <div className="App"> 
          <CounterMemo/>

          {/* <ParentComponent/> */}

{/* <LocalReducer/> */}

          {/* <UnmountEffect/>  */}
            {/* <HooksShowHide/>   */}

           {/* <ClickCounter/>
          <HoverCounter/>
          <KeyDown/> */}

          {/* <ExampleRenderProps render={()=>'vishwa'}/>

              <CounterRender render={(count,incrementCount) => (
                  <ClickCounterRender count={count} incrementCount={incrementCount}/> )
          } /> */}

          {/* <CompoAA/> */}
   
   {/* <UserProvider value={arr}>
   <ComponentD />
   </UserProvider> */}

       {/* <UserProvider value={obj}>
       <ComponentC />
       </UserProvider> */}

             {/* <CounterRender>
              {(count,incrementCount1) => 
             <ClickCounterRender count={count} incrementCount1={incrementCount1}/>
              }
              </CounterRender> */}

      
    
 {/* <ExampleRenderProps name={'vishwa'} name123={()=>'mani'}/> 
  // <ExampleRenderProps render = {() =>'vishwa'}/> */}


          {/* <ParentRef></ParentRef> */}
         {/* <ParentComponent/> */}

          {/* <h1 className='primary'>hi-app</h1>
          <ExampleCss1/>
          <h2 className={style.primary}>hi-app</h2>
          <ExampleCss2/> */}
           
          {/* <NameList/> */}
           {/* <Greet/>
           <GreetClass></GreetClass>
           <GreetState/>
           <WelcomeSetState nameOne='5'/> */}
           {/* <PractisThis/> */}
           {/* <PractiseThisFunction/> */}

          </div>
    )
  }
}

export default App;
