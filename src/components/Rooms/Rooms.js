// General
import React, { useState, useEffect } from 'react';

// Styles
import './Rooms.css';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RoomCard from '../RoomCard/RoomCard';
import Mapbox from '../Mapbox/Mapbox';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const fetchData = (url) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => setRooms(data)
        );
    };

    useEffect(() => {
        // Temporary API -> Public w/o security
        fetchData("https://api.npoint.io/a627d9c124f01677cafd");
    }, []);
    console.log(rooms.results);

    return (
        <div className="Rooms">
            <Header />
            <section>
                <h2 className="CityName">Rooms in New York City</h2>
                <div className="Parameters">
                    <p>Neighborhood</p>
                    <p>Price</p>
                    <p>Bar / Table</p>

                </div>
                <div className="RoomResults">
                    {rooms.results?.map(
                        ({ id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo }
                        ) => (
                            <RoomCard
                                key={id}
                                name={name}
                                details={details}
                                rating={rating}
                                review_count={review_count}
                                neighborhood={neighborhood}
                                price={price}
                                michelin_stars={michelin_stars}
                                serve_style={serve_style}
                                coordinates={coordinates}
                                photo={photo}
                            />
                        )
                    )}
                </div>
            </section>
            <section>
                <div className="MapContainer">
                    {/*<Mapbox className="MapView"/>*/}

                </div>

            </section>
            {/*<Footer />*/}
        </div>
    )
}

export default Rooms;

