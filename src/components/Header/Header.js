// General
import { useNavigate } from 'react-router-dom';
// Style
import './Header.css';
// Components
import {NavBar} from '../NavBar/NavBar';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="Header">
            <div className="HeaderLogo" onClick={() => navigate('/')}>
                <h1>お任せ</h1>
            </div>
            <NavBar />
        </div>
        )
}

export default Header;
