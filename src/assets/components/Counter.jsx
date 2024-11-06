import React, { useReducer } from 'react'

import { reducer } from './Reducer'


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div className='container'>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })} className='btn btn-primary mx-2'>+</button>
            <button onClick={() => dispatch({ type: "decrement" })} className='btn btn-primary mx 2'>-</button>
            <h4>This is counter</h4>
        </div>

    )
}

export default Counter