// General
import { useState, useEffect } from 'react';

// Mapbox
import Map, {Marker, Popup} from 'react-map-gl';
import './Mapview.css';

// Mapbox-gl transpilation fix -> Lines 9-13
import mapboxgl from '!mapbox-gl';
/* eslint import/no-webpack-loader-syntax: off */
// import 'mapbox-gl/dist/mapbox-gl.css';
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

// Icons
import { ReactComponent as MichelinStar } from '../../assets/MichelinStar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const MapView = ({searchResults, clickedElement}) => {
    // States
    const [selectedLocation, setSelectedLocation] = useState(clickedElement);
    const [viewport, setViewport] = useState({
        latitude: 40.736,
        longitude: -73.9900,
        zoom: 12.2,
        width: '43vw',
        height: window.innerHeight - 52

    });

    // Environment variables
    const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const mapboxStyles = process.env.REACT_APP_MAPBOX_STYLES_TOKEN;

    // Close map popup with ESC key
    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedLocation(null);
            }
        };
        window.addEventListener("keydown", listener)
        return () => {
            window.removeEventListener("keydown", listener);
        }
    }, []);

    const toggleIsClicked = (obj) => {
        if (obj.isClicked === true) {
            obj.isClicked = false;
        } else {
            obj.isClicked = true
        }
    }

    return (
        <div>
            <Map
                mapboxApiAccessToken={mapboxToken}
                mapStyle={mapboxStyles}
                {...viewport}
                onViewportChange={(newView) => setViewport(newView)}
                >
                {searchResults?.map(result => (
                    <div key={result.coordinates.longitude}>
                        <Marker
                            longitude={result.coordinates.longitude}
                            latitude={result.coordinates.latitude}
                        >
                            <div
                            onClick={() => {
                                searchResults?.forEach(result => result.isClicked = false)
                                toggleIsClicked(result)
                                setSelectedLocation(result)

                            }}
                            className="MarkerMapIcon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} color={result.isClicked === true ? "gray" : "red"} size="lg"/>
                            </div>

                        </Marker>
                        {(selectedLocation?.isClicked === true) ? (
                            <Popup
                                latitude={selectedLocation.coordinates.latitude}
                                longitude={selectedLocation.coordinates.longitude}
                                offsetLeft={8}
                                offsetTop={-3}
                                closeButton={false}
                                onClose={() => {
                                    searchResults?.forEach(result => result.isClicked = false)
                                    setSelectedLocation(null);
                                }}>
                                <div>
                                    <h2 className="RoomName">{selectedLocation.name}</h2>
                                    <div className="InfoRow">
                                        <div className="IconContainer StarContainer">
                                            <FontAwesomeIcon icon={faStar} color="red" size="sm" className="Star"/>
                                        </div>
                                        <p className="RoomRating">{selectedLocation.rating}</p>
                                        <p className="RoomServeStyle">{selectedLocation.serve_style}</p>
                                        <p className="RoomPrice">
                                            {selectedLocation.price >=250 ? "$$$$" : selectedLocation.price <250 && selectedLocation.price >=125 ? "$$$" : "$$"}
                                        </p>
                                        {selectedLocation.michelin_stars >= 1 && (
                                            <div className="MichelinStarContainer">
                                                <MichelinStar className="MichelinStar"/>
                                                {selectedLocation.michelin_stars >= 2 && (
                                                    <MichelinStar className="MichelinStar"/>
                                                )}
                                                {selectedLocation.michelin_stars === 3 && (
                                                    <MichelinStar className="MichelinStar"/>
                                                )}

                                            </div>
                                        )}
                                    </div>
                                    <div className="InfoRow">
                                         <div className="IconContainer">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="LocationMarker"/>
                                        </div>
                                        <p className="RoomNeighborhood">{selectedLocation.neighborhood}</p>
                                    </div>


                                </div>

                            </Popup>
                            ) : null}
                    </div>
                    ))}


            </Map>


        </div>
    )
}

export default MapView
