import React, { useState } from 'react';
import './HamMenu.css';


const HamMenu = () => {

    const [switchIcon, setSwitchIcon] = useState(false);
    const handleClick = () => setSwitchIcon(!switchIcon);


    return (
        <div className="buttonContainer">
            <div className={`hamburgerMenu ${switchIcon === true ? "cross" : ""}`} onClick={handleClick}>
                <div className="bar" id="bar1"></div>
                <div className="bar" id="bar2"></div>
            </div>
        </div>
        )
}

export { HamMenu };
