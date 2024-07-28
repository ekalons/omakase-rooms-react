import "./MapItem.css";
import { useNavigate } from "react-router-dom";
import navigationMap from "../../assets/navigationMap.png";

interface MapItemProps {
  backgroundColor: string;
}

const MapItem = ({ backgroundColor }: MapItemProps) => {
  let navigate = useNavigate();

  const goToRooms = () => {
    navigate("/rooms");
  };

  return (
    <div className="Item" style={{ backgroundColor: backgroundColor }}>
      <div
        className="ItemContainer"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="MapPhotoContainer" onClick={goToRooms}>
          <img src={navigationMap} alt="Navigation map" />
        </div>
      </div>
    </div>
  );
};

export default MapItem;
