import React, { useEffect } from 'react'
import { useState } from 'react'

const Func = () => {

    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount((count) => count + 1)
    //     }, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }



    // }, [])

    const [count, setCount] = useState(0)
    // const [message, setMessage] = useState(null)
    // const [notification, setNotification] = useState([])

    console.log("This is bhadra class // render method")

    useEffect(() => {
        console.log("Component mounted")

        return () => {
            console.log(" Component will unmount")
        }
    }, [])

    useEffect(() => {
        console.log("Count updated", count)

    }, [count])

    const increment = () => {
        setCount(count + 1)

    }

    return (
        <div>
            {/* <h2>Collect: {count}</h2> */}

            <h3>Count: {count}</h3>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
        </div>
    )
}

export default Func