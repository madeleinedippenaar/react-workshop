import { useState } from "react";
import Color from "./Color";
import "./ColorPicker.css"

const colors = ["red", "purple", "yellow", "green", "orange", "blue" ]

function ColorPicker() {
    const [pickedColor, setPickedColor] = useState("white");

    return (
        <div className="ColorPicker">
            <h3>Select Your Favorite Color</h3>
            <p>
                Your Choice: <Color color={pickedColor} />
            </p>
            {colors.map((color) => (
                <Color key={color} color={color} onClick={() => setPickedColor(color)}/>
            ))}
        </div>
    )
}

export default ColorPicker