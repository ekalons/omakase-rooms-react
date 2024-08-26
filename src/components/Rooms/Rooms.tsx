import { useState, useEffect, useContext } from "react";
import "./Rooms.css";
import Header from "../Header/Header";
import RoomCard from "../RoomCard/RoomCard";
import Mapview from "../Mapview/Mapview";
import { Room } from "../../clients/getRooms";
import { RoomsContext } from "../../providers/RoomsProvider";
import Pagination from "../Pagination/Pagination";

const ROOMS_PER_PAGE = 10;

const Rooms = () => {
  const roomsContext = useContext(RoomsContext);
  if (!roomsContext) {
    throw new Error("useRoomsContext must be used within a Rooms");
  }
  const { rooms, setRooms, fetchAndUpdateRoomsData, setClickedRoomCard } =
    roomsContext;

  const [isPriceClicked, setIsPriceClicked] = useState<boolean>(true);
  const [isMichelinClicked, setIsMichelinClicked] = useState<boolean>(true);
  const [isBarTableClicked, setIsBarTableClicked] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchAndUpdateRoomsData();
  }, [fetchAndUpdateRoomsData]);

  const onPriceClick = () => {
    const ascendingPriceSort = (room_a: Room, room_b: Room) => {
      if (room_a.price < room_b.price) {
        return -1;
      }
      if (room_a.price > room_b.price) {
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

  const updateRoomsState = (room: Room | undefined) => {
    if (room !== undefined) {
      setClickedRoomCard(room);
    }
  };

  const totalPages = Math.ceil(rooms.length / ROOMS_PER_PAGE);

  const paginatedRooms = rooms.slice(
    (currentPage - 1) * ROOMS_PER_PAGE,
    currentPage * ROOMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            {paginatedRooms.map(
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
          <div className="PaginationContainer">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="MapContainer">
          <Mapview />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
