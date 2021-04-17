import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [ count, setCount] = useState(0);

    function handleReset() {
        setCount(0); // use setCount to modify the state at runtime
    }

    function handleUp() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="Counter">
            <h3>Counter</h3>
            <p>{count}</p>
            <p>
                <button type="button" onClick={() => setCount(prev => prev - 1)}>Down</button>
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="button" onClick={handleUp}>Up</button>
            </p>
        </div>
    );

}

export default Counter;
