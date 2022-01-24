import React, { useState } from 'react';
import {HamMenu} from '../HamMenu/HamMenu';
import './NavBar.css';


const NavBar = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(prevAnimate => !prevAnimate);


    return (
        <div >
            <div className={`${animate ? "navBarContainer transitionIn" : "navBarContainer"}`}>
                    <ul className="navBar">
                        <li className={`${animate ? "showItem" : "hideItem"}`}><a href="../App/App">Home</a></li>
                        <li className={`${animate ? "showItem" : "hideItem"}`}><a href="../Visualizer/Visualizer">Rooms</a></li>
                        <li className={`${animate ? "showItem" : "hideItem"}`}><a href="../Etiquette/Etiquette">Etiquette</a></li>

                    </ul>

            </div>

            <div className="hamButtonContainer" onClick={handleClick}>
                <HamMenu className="hamburger"/>
            </div>
        </div>
        )
}

export {NavBar};
