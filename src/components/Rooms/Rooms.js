// General
import React, { useState, useEffect } from 'react';

// Styles
import './Rooms.css';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RoomCard from '../RoomCard/RoomCard';
import Mapview from '../Mapview/Mapview';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [isPriceClicked, setIsPriceClicked] = useState(true);
    // Public API -> Public data
    const address = "https://api.jsonbin.io/b/61f69701fb3ece3ad7ce5fa3";

    const fetchData = (url) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Adding isClicked properety to every room obj
                data.results?.forEach(room => room.isClicked = false)
                setRooms(data)}
        );
    };

    useEffect(() => {

        fetchData(address);
    }, []);

    // onParameterClick handlers
    const onPriceClick = () => {
        const ascendingPriceSort = ( a, b ) => {
            if ( a.price < b.price ) {
                return -1;
            }
            if ( a.price > b.price ) {
                return 1;
            }
            return 0;
        }

        setIsPriceClicked(!isPriceClicked);

        if (isPriceClicked === true) {
            const arrToUpdate = rooms.results;
            arrToUpdate?.sort(ascendingPriceSort)
            const objToPass = {results: arrToUpdate}
            setRooms(objToPass);
        } else if (isPriceClicked === false) {
            fetchData(address);
        }

    }



    return (
        <div className="Rooms">
            <Header />
            <div className="HeaderBackground"></div>
            <div className="MapContainer">
                <Mapview searchResults={rooms.results}/>
            </div>
            <section>
                <h2 className="CityName">Rooms in New York City</h2>
                <div className="Parameters">
                    <p>Neighborhood</p>
                    <p onClick={onPriceClick} style={{backgroundColor: isPriceClicked === false ? 'rgb(228 228 231)' : ''}}>Price</p>
                    <p>Bar / Table</p>
                    <p>Michelin</p>

                </div>
                <div className="RoomResults">
                    {rooms.results?.map(
                        ({ id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo, isClicked }
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
                                isClicked={isClicked}
                                allRooms={rooms}
                                updateRoom={setRooms}
                            />
                        )
                    )}
                </div>
                <div className="RoomsFooter">
                    <Footer />
                </div>
            </section>





        </div>
    )
}

export default Rooms;

