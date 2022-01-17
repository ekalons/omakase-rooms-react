import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>OMAKASE</h1>
            </div>
            <div className="header__center">
                <p>What is omakase?</p>
                <p>Rooms</p>
            </div>
            <div className="header__right">
                <p>{/*dark mode icon will go here*/}</p>
            </div>
        </div>
        )
}

export default Header
