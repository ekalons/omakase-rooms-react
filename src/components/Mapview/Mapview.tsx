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
  const { rooms, deSelectRooms, clickedRoomCard } = roomsContext;

  const [viewState, setViewState] = useState<Viewport>(
    configuration.map.defaultViewportSettingsNYC
  );

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === "Escape") {
        deSelectRooms();
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [clickedRoomCard]);

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
              <div
                onClick={() => {
                  deSelectRooms();
                }}
                className="MarkerMapIcon"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={room.isClicked === true ? "gray" : "red"}
                  size="lg"
                />
              </div>
            </Marker>
            {clickedRoomCard?.isClicked === true ? (
              <Popup
                latitude={clickedRoomCard.coordinates.latitude}
                longitude={clickedRoomCard.coordinates.longitude}
                offset={11}
                onClose={() => {
                  deSelectRooms();
                }}
              >
                <div>
                  <h2 className="RoomName">{clickedRoomCard.name}</h2>
                  <div className="InfoRow">
                    <div className="IconContainer StarContainer">
                      <FontAwesomeIcon
                        icon={faStar}
                        color="red"
                        size="sm"
                        className="Star"
                      />
                    </div>
                    <p className="RoomRating">{clickedRoomCard.rating}</p>
                    <p className="RoomServeStyle">
                      {clickedRoomCard.serve_style}
                    </p>
                    <p className="RoomPrice">
                      {clickedRoomCard.price >= 250
                        ? "$$$$"
                        : clickedRoomCard.price < 250 &&
                          clickedRoomCard.price >= 125
                        ? "$$$"
                        : "$$"}
                    </p>
                    {clickedRoomCard.michelin_stars >= 1 && (
                      <div className="MichelinStarContainer">
                        <MichelinStarIcon />
                        {clickedRoomCard.michelin_stars >= 2 && (
                          <MichelinStarIcon />
                        )}
                        {clickedRoomCard.michelin_stars === 3 && (
                          <MichelinStarIcon />
                        )}
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
                    <p className="RoomNeighborhood">
                      {clickedRoomCard.neighborhood}
                    </p>
                  </div>
                </div>
              </Popup>
            ) : null}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
