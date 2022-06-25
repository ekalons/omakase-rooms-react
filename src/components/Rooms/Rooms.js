// General
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// Styles
import './Rooms.css';

// Components
import Header from '../Header/Header';
import RoomCard from '../RoomCard/RoomCard';
import Mapview from '../Mapview/Mapview';

const Rooms = () => {
    // Data state
    const [rooms, setRooms] = useState([]);
    const [clickedRoomCard, setClickedRoomCard] = useState(null);
    // Button states
    const [isPriceClicked, setIsPriceClicked] = useState(true);
    const [isMichelinClicked, setIsMichelinClicked] = useState(true);
    const [isBarTableClicked, setIsBarTableClicked] = useState(true);

    // Setting environment variables & getting data from server
    const url = process.env.REACT_APP_SERVER_ACCESS_TOKEN;

    const fetchData = () => {
        Axios.get(`${url}/api/rooms`).then((response) => {
            response.data.forEach((room) => room.isClicked = false)
            setRooms(response.data);
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

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
            const arrToUpdate = rooms;
            const priceSortArr = arrToUpdate?.sort(ascendingPriceSort)
            setRooms(priceSortArr);
        } else if (isPriceClicked === false) {
            fetchData();
        }
    }

    const onMichelinClick = () => {
        setIsMichelinClicked(!isMichelinClicked);

        if (isMichelinClicked === true) {
            const arrToUpdate = rooms;
            const michelinArr = arrToUpdate.filter(function (el) {
                return el.michelin_stars >= 1;
            });
            setRooms(michelinArr);
        } else {
            fetchData();
        }
    }

    const onBarTableClick = () => {
        setIsBarTableClicked(!isBarTableClicked);

        if (isBarTableClicked === true) {
            const arrToUpdate = rooms;
            const barTableArr = arrToUpdate.filter(function (el) {
                return el.serve_style !== 'Bar';
            });
            setRooms(barTableArr);
        } else {
            fetchData();
        }
    }

    // Updates clickedRoomCard state when RoomCard is clicked
    const updateRoomsState = (obj) => {
        setClickedRoomCard(obj);
    }

    return (
        <div className="Rooms">
            <Header />
            <div className="HeaderBackground"></div>
            <div className="MapContainer">
                <Mapview searchResults={rooms} clickedElement={clickedRoomCard}/>
            </div>
            <section>
                <h2 className="CityName">Rooms in New York City</h2>
                <div className="Parameters">
                    <p onClick={onPriceClick} style={{backgroundColor: isPriceClicked === false ? 'rgb(228 228 231)' : ''}}>Price</p>
                    <p onClick={onMichelinClick} style={{backgroundColor: isMichelinClicked === false ? 'rgb(228 228 231)' : ''}}>Michelin stars</p>
                    <p onClick={onBarTableClick} style={{backgroundColor: isBarTableClicked === false ? 'rgb(228 228 231)' : ''}}>Bar / Table</p>
                </div>
                <div className="RoomResults">
                    {rooms?.map(
                        ({ _id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo, isClicked }
                        ) => (
                            <RoomCard
                                key={_id}
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
                                updateParent={updateRoomsState}
                            />
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default Rooms;

