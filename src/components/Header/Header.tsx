import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { NavBar } from "../NavBar/NavBar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`Header ${isHomePage ? "transparent" : ""}`}>
      <div className="HeaderLogo" onClick={() => navigate("/")}>
        <h1>お任せ</h1>
      </div>
      <NavBar isTransparent={isHomePage} />
    </div>
  );
};

export default Header;
