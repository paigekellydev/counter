import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    // handleCountChange function increments count if button id matches increment
    // and decrements if button id matches decrement and count is higher than 
    const handleCountChange = (event) => {
        event.preventDefault()
        if (event.target.id === "increment") {
            setCount(count + 1)
        } else if (event.target.id === "decrement" && count > 0) {
            setCount(count - 1)
        }
        console.log(count)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button id="increment" onClick={handleCountChange}>+</button>
            <button id="decrement" onClick={handleCountChange}>-</button>
            <button>Like</button>
            <button>||</button>
        </div>
    )
}