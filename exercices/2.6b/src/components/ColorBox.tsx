import { useState } from "react";
import "./ColorBox.css";


const colors = ["red", "green", "blue", "yellow", "purple"];


const ColorBox = () => {
    const [currentColorIndex,setCurrentColorIndex] = useState(0);
    
    return(
        <div className="div-color"
        style={{backgroundColor: colors[currentColorIndex]}}
        >

        <button className="button-color"
        onClick={()=>{
            setCurrentColorIndex((currentColorIndex+1)%colors.length);
        }}
        >
            {colors[(currentColorIndex+1)%colors.length]}
        </button>

        <h2>{colors[currentColorIndex]}</h2>

        </div>
    )
}

export default ColorBox;