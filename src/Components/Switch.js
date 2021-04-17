import { useState } from "react";
import "./Switch.css"

function Switch() {

    const [on, setOn] = useState(false);
    const switchClass = on ? "Switch--on" : "Switch--off"; 

    return (
        <div className={"Switch " + switchClass}>
            <h3>Switch</h3>
            <p>{on ? "ON" : "OFF"}</p>
            <p>
                { on ? (
                <button type="button" onClick={()=> setOn(false)}>Off</button>
                ) : (
                <button type="button" onClick={()=> setOn(true)}>On</button>
                )}
            </p>
        </div>
    );
}

export default Switch;