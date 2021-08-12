import React, {useState, useEffect} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    // checks if count is greater than 0
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(increment, 1000)
        return (() => {
            clearInterval(interval)
        })
    }, [count])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button id="increment" onClick={increment}>+</button>
            <button id="decrement" onClick={decrement}>-</button>
            <button>Like</button>
            <button>||</button>
        </div>
    )
}