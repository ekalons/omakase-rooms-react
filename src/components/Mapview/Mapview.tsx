import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "./Mapview.css";

import { MichelinStarIcon } from "../MichelinStar/MichelinStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { Room } from "../../clients/getRooms";
import { configuration } from "../../configurationProvider";

interface MapViewProps {
  searchResults: Room[];
  clickedElement: Room | undefined;
}

interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
  width: string;
  height: number;
}
const MapView = ({ searchResults, clickedElement }: MapViewProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Room | undefined>(
    clickedElement
  );
  const [viewport, setViewport] = useState<Viewport>(
    configuration.map.defaultViewportSettings
  );

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === "Escape") {
        setSelectedLocation(undefined);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const toggleIsClicked = (room: Room) => {
    if (room.isClicked === true) {
      room.isClicked = false;
    } else {
      room.isClicked = true;
    }
  };

  return (
    <div>
      <Map
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLES_TOKEN}
        {...viewport}
        onViewportChange={(newView: Viewport) => setViewport(newView)}
      >
        {searchResults?.map((result) => (
          <div key={result.coordinates.longitude}>
            <Marker
              longitude={result.coordinates.longitude}
              latitude={result.coordinates.latitude}
            >
              <div
                onClick={() => {
                  searchResults?.forEach(
                    (result) => (result.isClicked = false)
                  );
                  toggleIsClicked(result);
                  setSelectedLocation(result);
                }}
                className="MarkerMapIcon"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={result.isClicked === true ? "gray" : "red"}
                  size="lg"
                />
              </div>
            </Marker>
            {selectedLocation?.isClicked === true ? (
              <Popup
                latitude={selectedLocation.coordinates.latitude}
                longitude={selectedLocation.coordinates.longitude}
                offsetLeft={8}
                offsetTop={-3}
                closeButton={false}
                onClose={() => {
                  searchResults?.forEach(
                    (result) => (result.isClicked = false)
                  );
                  setSelectedLocation(undefined);
                }}
              >
                <div>
                  <h2 className="RoomName">{selectedLocation.name}</h2>
                  <div className="InfoRow">
                    <div className="IconContainer StarContainer">
                      <FontAwesomeIcon
                        icon={faStar}
                        color="red"
                        size="sm"
                        className="Star"
                      />
                    </div>
                    <p className="RoomRating">{selectedLocation.rating}</p>
                    <p className="RoomServeStyle">
                      {selectedLocation.serve_style}
                    </p>
                    <p className="RoomPrice">
                      {selectedLocation.price >= 250
                        ? "$$$$"
                        : selectedLocation.price < 250 &&
                          selectedLocation.price >= 125
                        ? "$$$"
                        : "$$"}
                    </p>
                    {selectedLocation.michelin_stars >= 1 && (
                      <div className="MichelinStarContainer">
                        <MichelinStarIcon />
                        {selectedLocation.michelin_stars >= 2 && (
                          <MichelinStarIcon />
                        )}
                        {selectedLocation.michelin_stars === 3 && (
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
                      {selectedLocation.neighborhood}
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
