import { useState } from 'react';
// Styles
import './Mapbox.css';
// Map
import Map from 'react-map-gl';

const Mapbox = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 40.7266756,
        longitude: -74.0018095,
        zoom: 11
    })

    return (
        <Map
            mapStyle="mapbox://styles/ekalons/ckyydwp4g002414pgg7qx58m1"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            {...viewport}>
        </Map>
    )
}

export default Mapbox
