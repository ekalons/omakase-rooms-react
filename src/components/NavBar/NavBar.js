import React, { useState } from 'react';
import {HamMenu} from '../HamMenu/HamMenu';
import './NavBar.css';




const NavBar = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(prevAnimate => !prevAnimate);


    return (
        <div>
            {animate === true && (
                <div className={animate ? "navBarContainer" : ""}>
                    <ul className="navBar">
                        <li><a href="../App/App">Home</a></li>
                        <li><a href="../Visualizer/Visualizer">Rooms</a></li>
                    </ul>
                </div>
            )}
            {animate === false && (<></>)}

            <div className="hamButtonContainer" onClick={handleClick}>
                <HamMenu className="hamburger"/>
            </div>
        </div>
        )
}

export {NavBar};
