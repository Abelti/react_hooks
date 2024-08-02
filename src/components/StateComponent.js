import { useState } from 'react'

function StateComponent() {
    // Defining the useState hook
    const [count, setCount] = useState("A");

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default StateComponent