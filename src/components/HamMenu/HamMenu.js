import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {NavBar} from '../NavBar/NavBar';
import './HamMenu.css';



const HamMenu = () => {

    const [switchIcon, setSwitchIcon] = useState(false);
    const handleClick = () => setSwitchIcon(!switchIcon);


    return (
        <button className="hamburger" onClick={handleClick}>
            {switchIcon === false && (
                <HamburgerIcon className="hamburgerIcon"/>
                )}
            {switchIcon === true && (
                <CloseIcon className="closeIcon"/>
                )}
        </button>
        )
}

export { HamMenu };
