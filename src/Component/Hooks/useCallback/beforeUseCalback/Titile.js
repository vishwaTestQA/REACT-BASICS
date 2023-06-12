import React from 'react'

function Titile() {
    console.log(`title`)
  return (
    <h2>Titile useCallback</h2>
  )
}

export default React.memo(Titile)