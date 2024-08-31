import { useState } from "react";
import { Link } from "react-router-dom";
import { HamMenu } from "../HamMenu/HamMenu";
import "./NavBar.css";

interface NavBarProps {
  isTransparent: boolean;
}

const NavBar = ({ isTransparent }: NavBarProps) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => setAnimate((prevAnimate) => !prevAnimate);

  return (
    <div>
      <div
        className={`NavbarContainer ${animate ? "TransitionIn" : ""} ${
          isTransparent ? "transparent" : ""
        }`}
      >
        <ul className={`navBar ${isTransparent ? "transparent" : ""}`}>
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
        <HamMenu />
      </div>
    </div>
  );
};

export { NavBar };
