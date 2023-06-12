import React from 'react'
import withCounter from './withCounter'

function KeyDown(props) {
    return (
        <div tabIndex="1" onKeyDown={props.incrementCount}>keyDown {props.count}</div>
      )
}

export default withCounter(KeyDown)