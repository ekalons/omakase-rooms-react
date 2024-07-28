import { useState } from "react";
import "./HamMenu.css";

const HamMenu = () => {
  const [switchIcon, setSwitchIcon] = useState(false);
  const handleClick = () => setSwitchIcon(!switchIcon);

  return (
    <div className="ButtonContainer">
      <div
        className={`HamburgerMenu ${switchIcon === true ? "Cross" : ""}`}
        onClick={handleClick}
      >
        <div className="Bar" id="Bar1"></div>
        <div className="Bar" id="Bar2"></div>
      </div>
    </div>
  );
};

export { HamMenu };
