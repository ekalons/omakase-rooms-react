import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Room, getRooms } from "../clients/getRooms";

interface RoomsContextType {
  rooms: Room[];
  clickedRoomCard: Room | undefined;
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  fetchAndUpdateRoomsData: () => Promise<void>;
  setClickedRoomCard: React.Dispatch<React.SetStateAction<Room | undefined>>;
  deSelectRooms: () => void;
}

const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

const RoomsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [roomsData, setRoomsData] = useState<Room[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [clickedRoomCard, setClickedRoomCard] = useState<Room | undefined>(
    undefined
  );

  const initializeRoomsData = async (): Promise<Room[]> => {
    const roomsDataFromCall = await getRooms();
    setRoomsData(roomsDataFromCall);
    return roomsDataFromCall;
  };

  const fetchInitialData = async () => {
    const roomsDataFromCall = await initializeRoomsData();
    const updatedRooms = addOnClickPropertyToRooms([...roomsDataFromCall]);
    setRooms(updatedRooms);
  };

  const fetchAndUpdateRoomsData = async () => {
    const updatedRooms = addOnClickPropertyToRooms([...roomsData]);
    setRooms(updatedRooms);
  };

  const addOnClickPropertyToRooms = (rooms: Room[]) => {
    rooms.forEach((room: any) => (room.isClicked = false));
    return rooms;
  };

  const deSelectRooms = () => {
    rooms?.forEach((room) => (room.isClicked = false));
    setClickedRoomCard(undefined);
  };
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        fetchAndUpdateRoomsData,
        clickedRoomCard,
        setClickedRoomCard,
        deSelectRooms,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};

export { RoomsContext, RoomsProvider };
