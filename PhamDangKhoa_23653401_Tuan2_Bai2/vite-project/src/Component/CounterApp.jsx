import React, { useState } from 'react'

function CounterApp(props) {

    const [count, setCount] = useState(0);
    function checkMinus() {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(count - count)
        }
    }

    return (
        <div>
            <div>
                <p style={count > 10 ? overNumber : normal}>{count}</p>
                <hr />
            </div>
            <div>
                <button id='cong' onClick={() => { setCount(count + 1) }}>Cộng</button>
                <button id='tru' onClick={() => { checkMinus() }}>Trừ</button>
                <button id='reset' onClick={() => { setCount(0) }}>Reset</button>
            </div>
        </div>
    );
}

export default CounterApp;

const overNumber = { color: 'red' }
const normal = { color: 'black' }
