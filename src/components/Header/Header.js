import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1>お任せ</h1>
            </div>
            <div className="header__center">
                <nav>
                    <a href="../App/App">Home</a>
                    <a href="../Visualizer/Visualizer">Rooms</a>
                </nav>
            </div>
            <div className="header__right">
                <p>{/*dark mode icon will go here*/}</p>
            </div>
        </div>
        )
}

export default Header
