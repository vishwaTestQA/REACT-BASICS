import React ,{useReducer} from 'react'

const initialState=0;
const secondState={
    state1:0,
    state2:0
};
const reducer = (state,action)=>{
    switch(action.type){
      case 'increment':
        return state+1
        case 'increment2':
        return {...state,state1: secondState.state1+1};
        case 'increment3':
        return {...state,state2: secondState.state2+action.value};
    }
}



function LocalReducer() {
    const [count,dispatch] = useReducer(reducer,secondState)
    const [count1,dispatch1] = useReducer(reducer,initialState)
  return (
    <div>localReducer  count1-{count1} count2 - {count.state1} , count3 - {count.state2}
          <button onClick={() => dispatch1('increment')}>Increment</button>
          <button onClick={() => dispatch({ type: 'increment2'})}> Increment </button>
          <button onClick={() => dispatch({ type: 'increment3' , value:10})}>Increment</button>
    </div>
  )
}

export default LocalReducer