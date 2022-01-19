import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import './Header.css';


const Header = () => {


    return (
        <div className="header">
            <div className="header__logo">
                <h1>お任せ</h1>
            </div>
            <NavBar className="navBar"/>
        </div>
        )
}

export default Header;
