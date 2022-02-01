import './MapItem.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MapItem = ({backgroundColor, backgroundImg}) => {
    let navigate = useNavigate();

    const goToRooms = () => {
        navigate("/rooms");
    };



    return (
        <div className="Item" style={{backgroundColor: backgroundColor}}>
            <div className="ItemContainer" style={{backgroundColor: backgroundColor}}>
                <div className="MapPhotoContainer" onClick={goToRooms}>
                    <img src={require("../../assets/navigationMap.png")} alt="Navigation map"/>
                </div>
            </div>

        </div>
    )
}

export default MapItem
