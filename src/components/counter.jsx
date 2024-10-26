import React, {useState}  from 'react';

function Counter () {
    const [counter, setCounter] = useState (0)
    function incrementCounter() {
        setCounter((prevCounter) => prevCounter + 1)
        console.log('incrementCounter()')
    }

    function decrementCounter () {
        setCounter((prevCounter) => prevCounter - 1)
        console.log('decrementCounter()')
    }

    return (
        <div>
            <button onClick={decrementCounter}></button>
            {0}
            <button onClick={incrementCounter}></button>
        </div>
    )
}

export default Counter; 