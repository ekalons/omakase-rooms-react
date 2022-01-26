import React, { useState } from 'react';
import {HamMenu} from '../HamMenu/HamMenu';
import './NavBar.css';


const NavBar = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(prevAnimate => !prevAnimate);


    return (
        <div >
            <div className={`${animate ? "NavbarContainer TransitionIn" : "NavbarContainer"}`}>
                    <ul className="navBar">
                        <li className={`${animate ? "ShowItem" : "HideItem"}`}><a href="../App/App">Home</a></li>
                        <li className={`${animate ? "ShowItem" : "HideItem"}`}><a href="../Visualizer/Visualizer">Rooms</a></li>
                        <li className={`${animate ? "ShowItem" : "HideItem"}`}><a href="../Etiquette/Etiquette">Etiquette</a></li>

                    </ul>

            </div>

            <div className="HamButtonContainer" onClick={handleClick}>
                <HamMenu className="hamburger"/>
            </div>
        </div>
        )
}

export {NavBar};
