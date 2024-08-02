import { useId } from 'react'

function InputWithLabel() {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Username: </label>
            <input id={id} type="text" />
        </div>
    );
}

function IdComponent() {
    return (
        <div>
            <InputWithLabel />
        </div>
    )
}

export default IdComponent