import { useState, useEffect, useContext, useCallback } from "react";
import Map, {
  Marker,
  ViewStateChangeEvent,
  MapLayerMouseEvent,
} from "react-map-gl";
import "./Mapview.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { configuration } from "../../configurationProvider";
import { RoomsContext } from "../../providers/RoomsProvider";
import { Room } from "../../clients/getRooms";
import MapPopup from "../MapPopup/MapPopup";

interface MapViewProps {
  paginatedRooms: Room[];
}

interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

const defaultStyleSettings: React.CSSProperties = {
  width: "50vw",
  height: window.innerHeight - 60,
};

const MapView: React.FC<MapViewProps> = ({ paginatedRooms }) => {
  const roomsContext = useContext(RoomsContext);
  if (!roomsContext) {
    throw new Error("useRoomsContext must be used within Rooms");
  }
  const { deSelectRooms, clickedRoomCard, hoveredRoom, setHoveredRoom } =
    roomsContext;

  const [viewState, setViewState] = useState<Viewport>(
    configuration.map.defaultViewportSettingsNYC
  );
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [clickedMarker, setClickedMarker] = useState<string | null>(null);

  const handleMapClick = useCallback(
    (event: MapLayerMouseEvent) => {
      if (
        event.originalEvent.target instanceof HTMLElement &&
        event.originalEvent.target.closest(".MarkerMapIcon")
      ) {
        return;
      }
      setSelectedRoom(null);
      setClickedMarker(null);
      deSelectRooms();
    },
    [deSelectRooms]
  );

  const handleMarkerClick = useCallback((room: Room) => {
    setSelectedRoom(room);
    setClickedMarker(room._id);
  }, []);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedRoom(null);
        setClickedMarker(null);
        deSelectRooms();
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [clickedRoomCard, deSelectRooms, setSelectedRoom]);

  const getMarkerColor = useCallback(
    (room: Room) => {
      if (clickedMarker === room._id) return "red";
      if (hoveredRoom && hoveredRoom._id === room._id) return "red";
      return "gray";
    },
    [hoveredRoom, clickedMarker]
  );

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
        onClick={handleMapClick}
      >
        {paginatedRooms?.map((room) => (
          <div key={room.coordinates.longitude}>
            <Marker
              longitude={room.coordinates.longitude}
              latitude={room.coordinates.latitude}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                handleMarkerClick(room);
              }}
            >
              <div
                className="MarkerMapIcon"
                onMouseEnter={() => setHoveredRoom(room)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color={getMarkerColor(room)}
                  size="lg"
                  style={{
                    transform:
                      (hoveredRoom && hoveredRoom._id === room._id) ||
                      clickedMarker === room._id
                        ? "scale(1.2)"
                        : "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                />
              </div>
            </Marker>
            {selectedRoom && selectedRoom._id === room._id && (
              <MapPopup
                room={room}
                onClose={() => {
                  setSelectedRoom(null);
                  setClickedMarker(null);
                  deSelectRooms();
                }}
              />
            )}
          </div>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
