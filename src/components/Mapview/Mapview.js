import { useState } from 'react';
import Map from 'react-map-gl';

const MapView = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.7266756,
        longitude: -74.0018095,
        zoom: 12.5,
        width: '43vw',
        height: window.innerHeight - 60

    });

    return (
        <div>
            <Map
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                mapStyle="mapbox://styles/ekalons/ckyydwp4g002414pgg7qx58m1"
                {...viewport}
                onViewportChange={(newView) => setViewport(newView)}
                >


            </Map>


        </div>
    )
}

export default MapView
