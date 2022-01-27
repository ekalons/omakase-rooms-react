// General
import React, { useState, useEffect } from 'react';

// Styles
import './Rooms.css';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RoomCard from '../RoomCard/RoomCard';

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
                    <p>Etiquette</p>

                </div>
                <div className="RoomResults">
                    {rooms.results?.map(
                        ({ id, name, rating, review_count, neighborhood, coordinates, photo }
                        ) => (
                            <RoomCard
                                key={id}
                                name={name}
                                rating={rating}
                                review_count={review_count}
                                coordinates={coordinates}
                                photo={photo}
                            />
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default Rooms;

// export async function getServerSideProps() {
//     const url = "https://api.npoint.io/a627d9c124f01677cafd";
//     const searchResults = await fetch(url)
//     .then(
//         (res) => res.json()
//     );

//     return {
//         props: {
//             searchResults,
//         },
//     };
// }
