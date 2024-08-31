import React from "react";
import { Popup } from "react-map-gl";
import { Room } from "../../clients/getRooms";
import RoomInfo from "../RoomInfo/RoomInfo";
import NeighborhoodDetails from "../NeighborhoodDetails/NeighborhoodDetails";
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
    <div className="popup-content">
      <h2 className="RoomName">{room.name}</h2>
      <RoomInfo
        rating={room.rating}
        review_count={room.review_count}
        serve_style={room.serve_style}
        price={room.price}
        michelin_stars={room.michelin_stars}
      />
      <NeighborhoodDetails neighborhood={room.neighborhood} />
    </div>
  </Popup>
);

export default MapPopup;
