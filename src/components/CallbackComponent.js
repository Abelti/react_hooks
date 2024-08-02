import { useState, useCallback } from 'react'

function Child({ onClick }) {
    console.log('Child component rendered');
    return <button onClick={onClick}>Click me</button>;
}

function CallbackComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <Child onClick={handleClick} />
            </div>
        </div>
    )
}

function CallbackComponent1() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <Child onClick={handleClick} />
            </div>
        </div>
    )
}

export default { CallbackComponent, CallbackComponent1 }