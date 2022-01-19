import React, { useState } from 'react';
import {HamMenu} from '../HamMenu/HamMenu';
import './NavBar.css';


const NavBar = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(prevAnimate => !prevAnimate);

    let isMobile;
    const mediaQuery = () => {
        if (window.matchMedia("(min-width: 721px)").matches) {
            isMobile = false;
            // setAnimate(true);
            return false
        }
    }
    mediaQuery();

    return (
        <div >
            <div className={`${animate ? "navBarContainer transitionIn" : "navBarContainer"}`}>
                {animate === true && (
                    <ul className="navBar">
                        <li><a href="../App/App">Home</a></li>
                        <li><a href="../Visualizer/Visualizer">Rooms</a></li>
                    </ul>
                )}
                {animate === false && (<></>)}

            </div>



            <div className="hamButtonContainer" onClick={handleClick}>
                <HamMenu className="hamburger"/>
            </div>
        </div>
        )
}

export {NavBar};
