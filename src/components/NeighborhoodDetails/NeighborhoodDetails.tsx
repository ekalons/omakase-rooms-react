import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./NeighborhoodDetails.css";

interface NeighborhoodDetailsProps {
  neighborhood: string;
}

const NeighborhoodDetails = ({ neighborhood }: NeighborhoodDetailsProps) => {
  return (
    <div className="NeighborhoodDetails InfoRow">
      <div className="IconContainer">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size="sm"
          className="LocationMarker"
        />
      </div>
      <span className="RoomNeighborhood">{neighborhood}</span>
    </div>
  );
};

export default NeighborhoodDetails;
