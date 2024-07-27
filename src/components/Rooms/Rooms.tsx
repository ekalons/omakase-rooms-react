import React, { useState, useEffect } from "react";

import "./Rooms.css";

import Header from "../Header/Header";
import RoomCard from "../RoomCard/RoomCard";
import Mapview from "../Mapview/Mapview";
import { Room, getRooms } from "../../clients/getRooms";

const Rooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [clickedRoomCard, setClickedRoomCard] = useState(null);
  const [isPriceClicked, setIsPriceClicked] = useState(true);
  const [isMichelinClicked, setIsMichelinClicked] = useState(true);
  const [isBarTableClicked, setIsBarTableClicked] = useState(true);

  const fetchAndUpdateRoomsData = async () => {
    const roomsResponse = await getRooms();
    roomsResponse.forEach((room: any) => (room.isClicked = false));
    setRooms(roomsResponse);
  };

  useEffect(() => {
    fetchAndUpdateRoomsData();
  }, []);

  const onPriceClick = () => {
    const ascendingPriceSort = (a: any, b: any) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    };

    setIsPriceClicked(!isPriceClicked);

    if (isPriceClicked === true) {
      const arrToUpdate = rooms;
      const priceSortArr = arrToUpdate?.sort(ascendingPriceSort);
      setRooms(priceSortArr);
    } else if (isPriceClicked === false) {
      fetchAndUpdateRoomsData();
    }
  };

  const onMichelinClick = () => {
    setIsMichelinClicked(!isMichelinClicked);

    if (isMichelinClicked === true) {
      const arrToUpdate = rooms;
      const michelinArr = arrToUpdate.filter((el) => el.michelin_stars >= 1);
      setRooms(michelinArr);
    } else {
      fetchAndUpdateRoomsData();
    }
  };

  const onBarTableClick = () => {
    setIsBarTableClicked(!isBarTableClicked);

    if (isBarTableClicked === true) {
      const arrToUpdate = rooms;
      const barTableArr = arrToUpdate.filter(function (el) {
        return el.serve_style !== "Bar";
      });
      setRooms(barTableArr);
    } else {
      fetchAndUpdateRoomsData();
    }
  };

  const updateRoomsState = (obj: any) => {
    setClickedRoomCard(obj);
  };

  return (
    <div className="Rooms">
      <Header />
      <div className="HeaderBackground"></div>
      <div className="PageContainer">
        <div className="RoomResultsContainer">
          <div className="ParameterContainer">
            <h2 className="CityName">Rooms in New York City</h2>
            <div className="Parameters">
              <p
                onClick={onPriceClick}
                style={{
                  backgroundColor:
                    isPriceClicked === false ? "rgb(228 228 231)" : "",
                }}
              >
                Price
              </p>
              <p
                onClick={onMichelinClick}
                style={{
                  backgroundColor:
                    isMichelinClicked === false ? "rgb(228 228 231)" : "",
                }}
              >
                Michelin stars
              </p>
              <p
                onClick={onBarTableClick}
                style={{
                  backgroundColor:
                    isBarTableClicked === false ? "rgb(228 228 231)" : "",
                }}
              >
                Bar / Table
              </p>
            </div>
          </div>
          <div className="RoomResults">
            {rooms?.map(
              ({
                _id,
                name,
                details,
                rating,
                review_count,
                neighborhood,
                price,
                michelin_stars,
                serve_style,
                coordinates,
                photo,
              }) => (
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
                  allRooms={rooms}
                  updateParent={updateRoomsState}
                />
              )
            )}
          </div>
        </div>
        <div className="MapContainer">
          <Mapview searchResults={rooms} clickedElement={clickedRoomCard} />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
