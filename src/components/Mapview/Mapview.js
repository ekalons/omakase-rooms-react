import { useState, useEffect } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';


// Styles
import './Mapview.css';

// Icons
import { ReactComponent as MichelinStar } from '../../assets/MichelinStar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const MapView = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState(null)

    // Transform searchResults props into latitude/longitude obj
    const coordinates = searchResults?.map((result) => ({
        longitude: result.coordinates.longitude,
        latitude: result.coordinates.latitude,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        latitude: 40.7266756,
        longitude: -73.9900,
        zoom: 12.3,
        width: '43vw',
        height: window.innerHeight - 52

    });

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

    return (
        <div>
            <Map
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                mapStyle="mapbox://styles/ekalons/ckyydwp4g002414pgg7qx58m1"
                {...viewport}
                onViewportChange={(newView) => setViewport(newView)}
                >
                {searchResults?.map(result => (
                    <div key={result.coordinates.longitude}>
                        <Marker
                            longitude={result.coordinates.longitude}
                            latitude={result.coordinates.latitude}
                        >
                            <div onClick={() => setSelectedLocation(result)} className="MarkerMapIcon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} color="red" size="lg"/>
                            </div>

                        </Marker>
                        {selectedLocation ? (
                            <Popup
                                latitude={selectedLocation.coordinates.latitude}
                                longitude={selectedLocation.coordinates.longitude}
                                offsetLeft={8}
                                offsetTop={-3}
                                closeButton={false}
                                onClose={() => {
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
