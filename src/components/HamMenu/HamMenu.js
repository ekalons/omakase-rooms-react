import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './HamMenu.css';



const HamMenu = () => {

    const [switchIcon, setSwitchIcon] = useState(false);
    const handleClick = () => setSwitchIcon(!switchIcon);


    return (
        <div className={`buttonContainer ${!switchIcon ? "" : "adjustPosition"}`}>
            <button className={`${!switchIcon ? "hamburger" : "close"}`} onClick={handleClick}>
                {switchIcon === false && (
                    <HamburgerIcon className="hamburgerIcon"/>
                    )}
                {switchIcon === true && (
                    <CloseIcon className="closeIcon"/>
                    )}
            </button>
        </div>
        )
}

export { HamMenu };
