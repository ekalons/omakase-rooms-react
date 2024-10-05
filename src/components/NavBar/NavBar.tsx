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

  const handleLinkClick = () => {
    setAnimate(false);
  };

  return (
    <div>
      <div
        className={`NavbarContainer ${animate ? "TransitionIn" : ""} ${
          isTransparent ? "transparent" : ""
        }`}
      >
        <ul className="navBar">
          <li className={`${animate ? "ShowItem" : "HideItem"}`}>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className={`${animate ? "ShowItem" : "HideItem"}`}>
            <Link to="/rooms" onClick={handleLinkClick}>
              Rooms
            </Link>
          </li>
          <li className={`${animate ? "ShowItem" : "HideItem"}`}>
            <Link to="/etiquette" onClick={handleLinkClick}>
              Etiquette
            </Link>
          </li>
        </ul>
      </div>

      <div className="HamButtonContainer" onClick={handleClick}>
        <HamMenu isOpen={animate} />
      </div>
    </div>
  );
};

export { NavBar };
