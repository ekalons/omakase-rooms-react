import "./HamMenu.css";

interface HamMenuProps {
  isOpen: boolean;
}

const HamMenu = ({ isOpen }: HamMenuProps) => {
  return (
    <div className="ButtonContainer">
      <div className={`HamburgerMenu ${isOpen ? "Cross" : ""}`}>
        <div className="Bar" id="Bar1"></div>
        <div className="Bar" id="Bar2"></div>
      </div>
    </div>
  );
};

export { HamMenu };
