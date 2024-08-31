import React from "react";
import { Popup } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { MichelinStarIcon } from "../MichelinStar/MichelinStar";
import { Room } from "../../clients/getRooms";
import "./MapPopup.css";

interface MapPopupProps {
  room: Room;
  onClose: () => void;
}

const MapPopup: React.FC<MapPopupProps> = ({ room, onClose }) => (
  <Popup
    latitude={room.coordinates.latitude}
    longitude={room.coordinates.longitude}
    offset={11}
    onClose={onClose}
    closeButton={true}
    closeOnClick={false}
    className="custom-popup"
  >
    <div>
      <h2 className="RoomName">{room.name}</h2>
      <div className="InfoRow">
        <div className="IconContainer StarContainer">
          <FontAwesomeIcon
            icon={faStar}
            color="red"
            size="sm"
            className="Star"
          />
        </div>
        <p className="RoomRating">{room.rating}</p>
        <p className="RoomServeStyle">{room.serve_style}</p>
        <p className="RoomPrice">
          {room.price >= 250
            ? "$$$$"
            : room.price < 250 && room.price >= 125
            ? "$$$"
            : "$$"}
        </p>
        {room.michelin_stars >= 1 && (
          <div className="MichelinStarContainer">
            <MichelinStarIcon />
            {room.michelin_stars >= 2 && <MichelinStarIcon />}
            {room.michelin_stars === 3 && <MichelinStarIcon />}
          </div>
        )}
      </div>
      <div className="InfoRow">
        <div className="IconContainer">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="sm"
            className="LocationMarker"
          />
        </div>
        <p className="RoomNeighborhood">{room.neighborhood}</p>
      </div>
    </div>
  </Popup>
);

export default MapPopup;
