import React from 'react'

function Button({incrementHandler,children}) {
    console.log(`buttonClick ${children}`)
  return (
    <button onClick={incrementHandler}>
        {children}
    </button>
  )
}

export default React.memo(Button)