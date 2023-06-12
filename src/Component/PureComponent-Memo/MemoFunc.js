import React from 'react'

function MemoFunc({name}) {
    console.log('memoFunction')
  return (
    <>
    <div>MemoFunc</div>
    <h1>{name}</h1>
    </>
  )
}

export default React.memo(MemoFunc)