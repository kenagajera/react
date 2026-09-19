import { useState, useEffect } from 'react';
import './pages.css';

function Color(){
    const [color, setColor] = useState('');
    
        useEffect(() => {
            document.body.style.backgroundColor = color; 
        }, [color]);
    
    return(
         <div className="palette-container">
                <div className="selected-color" style={{color: color,background: color === "Yellow" ? "black" : "white" }}>
                    You selected: {color} Color
                </div>

                <h3>Select a Color </h3>
                <div className="palette">
                    <div className="color-box red" onClick={() => setColor('Red')}></div>
                    <div className="color-box black" onClick={() => setColor('Black')}></div>
                    <div className="color-box yellow" onClick={() => setColor('Yellow')}></div>
                    <div className="color-box green" onClick={() => setColor('Green')}></div>
                    <div className="color-box purple" onClick={() => setColor('Purple')}></div>
                    <div className="color-box orange" onClick={() => setColor('Orange')}></div>
                </div>
            </div>
    );
}
export default Color;