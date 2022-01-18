import React from 'react';
import './HamMenu.css';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {NavBar} from '../NavBar/NavBar';



const HamMenu = () => {

    return (
        <button className="hamburger">
            <HamburgerIcon className="hamburgerIcon"/>
        </button>
        )
}

export { HamMenu };
