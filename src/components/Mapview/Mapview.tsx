import { useState, useEffect, useContext } from "react";
import Map, { Marker, Popup, ViewStateChangeEvent } from "react-map-gl";
import "./Mapview.css";

import { MichelinStarIcon } from "../MichelinStar/MichelinStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { configuration } from "../../configurationProvider";
import { RoomsContext } from "../../providers/RoomsProvider";

interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}
const defaultStyleSettings: React.CSSProperties = {
  width: "50vw",
  height: window.innerHeight - 60,
};

const MapView = () => {
  const roomsContext = useContext(RoomsContext);
  if (!roomsContext) {
    throw new Error("useRoomsContext must be used within Rooms");
  }
  const { rooms, deSelectRooms, clickedRoomCard, hoveredRoom } = roomsContext;

  const [viewState, setViewState] = useState<Viewport>(
    configuration.map.defaultViewportSettingsNYC
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        deSelectRooms();
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [clickedRoomCard, deSelectRooms]);

  return (
    <div>
      <Map
        mapboxAccessToken={configuration.map.mapboxApiAccessToken}
        mapStyle={configuration.map.mapStyle}
        initialViewState={configuration.map.defaultViewportSettingsNYC}
        style={defaultStyleSettings}
        {...viewState}
        onMove={(newView: ViewStateChangeEvent) =>
          setViewState(newView.viewState)
        }
      >
        {rooms?.map((room) => (
          <div key={room.coordinates.longitude}>
            <Marker
              longitude={room.coordinates.longitude}
              latitude={room.coordinates.latitude}
            >
              <div className="MarkerMapIcon">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={
                    hoveredRoom && hoveredRoom._id === room._id ? "gray" : "red"
                  }
                  size="lg"
                  style={{
                    transform:
                      hoveredRoom && hoveredRoom._id === room._id
                        ? "scale(1.2)"
                        : "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                />
              </div>
            </Marker>
            {hoveredRoom && hoveredRoom._id === room._id && (
              <Popup
                latitude={room.coordinates.latitude}
                longitude={room.coordinates.longitude}
                offset={11}
                onClose={() => {
                  deSelectRooms();
                }}
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
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
