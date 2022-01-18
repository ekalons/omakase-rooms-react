import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <ul className="navBar">
                <li><a href="../App/App">Home</a></li>
                <li><a href="../Visualizer/Visualizer">Rooms</a></li>
            </ul>
        </div>
        )
}

export {NavBar};
