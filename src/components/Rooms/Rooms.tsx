import { useState, useEffect, useContext, useCallback } from "react";
import "./Rooms.css";
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
  const { rooms, fetchAndUpdateRoomsData, setClickedRoomCard, setHoveredRoom } =
    roomsContext;

  const [isPriceClicked, setIsPriceClicked] = useState<boolean>(false);
  const [isMichelinClicked, setIsMichelinClicked] = useState<boolean>(false);
  const [isBarTableClicked, setIsBarTableClicked] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [paginatedRooms, setPaginatedRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetchAndUpdateRoomsData();
  }, [fetchAndUpdateRoomsData]);

  const applyFilters = useCallback(() => {
    let result = [...rooms];

    if (isMichelinClicked) {
      result = result.filter((room) => room.michelin_stars >= 1);
    }

    if (isBarTableClicked) {
      result = result.filter((room) => room.serve_style !== "Bar");
    }

    if (isPriceClicked) {
      result.sort((a, b) => a.price - b.price);
    }

    setFilteredRooms(result);
  }, [rooms, isPriceClicked, isMichelinClicked, isBarTableClicked]);

  useEffect(() => {
    applyFilters();
  }, [
    rooms,
    isPriceClicked,
    isMichelinClicked,
    isBarTableClicked,
    applyFilters,
  ]);

  const updatePaginatedRooms = useCallback(() => {
    const startIndex = (currentPage - 1) * ROOMS_PER_PAGE;
    const endIndex = startIndex + ROOMS_PER_PAGE;
    setPaginatedRooms(filteredRooms.slice(startIndex, endIndex));
  }, [currentPage, filteredRooms]);

  useEffect(() => {
    updatePaginatedRooms();
  }, [currentPage, filteredRooms, updatePaginatedRooms]);

  const onPriceClick = () => {
    setIsPriceClicked(!isPriceClicked);
  };

  const onMichelinClick = () => {
    setIsMichelinClicked(!isMichelinClicked);
  };

  const onBarTableClick = () => {
    setIsBarTableClicked(!isBarTableClicked);
  };

  const updateRoomsState = (room: Room | undefined) => {
    if (room !== undefined) {
      setClickedRoomCard(room);
    }
  };

  const totalPages = Math.ceil(filteredRooms.length / ROOMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [isPriceClicked, isMichelinClicked, isBarTableClicked]);

  return (
    <div className="Rooms">
      <div className="PageContainer">
        <div className="RoomResultsContainer">
          <div className="ParameterContainer">
            <h2 className="CityName">Rooms in New York City</h2>
            <div className="Parameters">
              <p
                onClick={onPriceClick}
                style={{
                  backgroundColor: isPriceClicked ? "rgb(228 228 231)" : "",
                }}
              >
                Price
              </p>
              <p
                onClick={onMichelinClick}
                style={{
                  backgroundColor: isMichelinClicked ? "rgb(228 228 231)" : "",
                }}
              >
                Michelin stars
              </p>
              <p
                onClick={onBarTableClick}
                style={{
                  backgroundColor: isBarTableClicked ? "rgb(228 228 231)" : "",
                }}
              >
                Counter / Table
              </p>
            </div>
          </div>
          <div className="RoomResults">
            {paginatedRooms.map((room) => (
              <RoomCard
                key={room._id}
                name={room.name}
                details={room.details}
                rating={room.rating}
                review_count={room.review_count}
                neighborhood={room.neighborhood}
                price={room.price}
                michelin_stars={room.michelin_stars}
                serve_style={room.serve_style}
                coordinates={room.coordinates}
                photo={room.photo}
                allRooms={rooms}
                updateParent={updateRoomsState}
                onMouseEnter={() => setHoveredRoom(room)}
                onMouseLeave={() => setHoveredRoom(null)}
              />
            ))}
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
          <Mapview paginatedRooms={paginatedRooms} />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
