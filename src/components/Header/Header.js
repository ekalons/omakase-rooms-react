import React from 'react';
import './Header.css';
import {NavBar} from '../NavBar/NavBar';
import {HamMenu} from '../HamMenu/HamMenu';


const Header = () => {

    const handleClick = ({ target }) => {
        const item = target.value;
    };

    return (
        <div className="header">
            <div className="header__logo">
                <h1>お任せ</h1>
            </div>
            <div className="header__center">
                <NavBar className="navBar"/>
            </div>
            <div className="header__right">
                <HamMenu className="hamburger" onClick={handleClick}/>
            </div>
        </div>
        )
}

export default Header;
