import { useState, useMemo } from 'react'

function ExpensiveComponent({ num }) {
    const computeExpensiveValue = (num) => {
        console.log('Computing expensive value');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    };

    const expensiveValue = useMemo(() => computeExpensiveValue(num), [num]);

    return <div>Computed value: {expensiveValue}</div>;
}
function MemoComponent() {
    const [num, setNum] = useState(1);

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Increment</button>
            <ExpensiveComponent num={num} />
        </div>
    );
}

export default MemoComponent