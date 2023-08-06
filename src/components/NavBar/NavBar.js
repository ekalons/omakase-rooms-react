import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {HamMenu} from '../HamMenu/HamMenu';
import './NavBar.css';


const NavBar = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => setAnimate(prevAnimate => !prevAnimate);


    return (

            <div >
                <div className={`${animate ? "NavbarContainer TransitionIn" : "NavbarContainer"}`}>
                        <ul className="navBar">
                            <li className={`${animate ? "ShowItem" : "HideItem"}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`${animate ? "ShowItem" : "HideItem"}`}>
                                <Link to="/rooms">Rooms</Link>
                            </li>
                            <li className={`${animate ? "ShowItem" : "HideItem"}`}>
                                <Link to="/etiquette">Etiquette</Link>
                            </li>

                        </ul>

                </div>

                <div className="HamButtonContainer" onClick={handleClick}>
                    <HamMenu className="hamburger"/>
                </div>
            </div>

        )
}

export {NavBar};
