import { useState } from "react";

interface ClickCounterProps{
    title: string;
    messageon10click ?: string;
    messageonMouse ?: string;
}

const ClickCounter = ({title, messageon10click = "Master !", messageonMouse = "CLIIIICK"}: ClickCounterProps)=>{
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false)

    return(
        <div>
            <h4>{title}</h4>
            {isHovered ? messageonMouse : null}
            <button
            onClick={()=> setCount((count)=> count+1)}
            onMouseEnter={()=>setIsHovered(!isHovered)}
            onMouseLeave={()=>setIsHovered(!isHovered)}>
                count is {count}
            </button>
            {count >= 10 ? messageon10click : null}
        </div>
    )
}

export default ClickCounter;