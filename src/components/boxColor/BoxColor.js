import React from "react";

const BoxColor = ({ r, g, b }) => {
    
    return(            
        <div 
            style={{
                background: `rgb(${r}, ${g}, ${b})`,
                height: '250',
                width: '50%',
                border: '2px solid black',
            }}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor;