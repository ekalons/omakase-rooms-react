import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import './Header.css';


const Header = () => {


    return (
        <div className="Header">
            <div className="HeaderLogo">
                <h1>お任せ</h1>
            </div>
            <NavBar />
        </div>
        )
}

export default Header;
