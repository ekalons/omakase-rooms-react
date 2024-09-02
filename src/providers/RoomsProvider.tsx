import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Room, getRooms, getRoomsV2 } from "../clients/getRooms";
import { configuration } from "../configurationProvider";

interface RoomsContextType {
  rooms: Room[];
  clickedRoomCard: Room | undefined;
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  fetchAndUpdateRoomsData: () => Promise<void>;
  setClickedRoomCard: React.Dispatch<React.SetStateAction<Room | undefined>>;
  deSelectRooms: () => void;
  hoveredRoom: Room | null;
  setHoveredRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

const RoomsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [roomsData, setRoomsData] = useState<Room[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [clickedRoomCard, setClickedRoomCard] = useState<Room | undefined>(
    undefined
  );
  const [hoveredRoom, setHoveredRoom] = useState<Room | null>(null);

  const initializeRoomsData = useCallback(async (): Promise<Room[]> => {
    const roomsDataFromCall = configuration.migratedServer
      ? await getRoomsV2()
      : await getRooms();
    setRoomsData(roomsDataFromCall);
    return roomsDataFromCall;
  }, []);

  const fetchAndUpdateRoomsData = useCallback(async () => {
    const updatedRooms = addOnClickPropertyToRooms([...roomsData]);
    setRooms(updatedRooms);
  }, [roomsData]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const roomsDataFromCall = await initializeRoomsData();
      const updatedRooms = addOnClickPropertyToRooms([...roomsDataFromCall]);
      setRooms(updatedRooms);
    };

    fetchInitialData();
  }, [initializeRoomsData]);

  const addOnClickPropertyToRooms = (rooms: Room[]): Room[] => {
    return rooms.map((room) => ({
      ...room,
      isClicked: false,
    }));
  };

  const deSelectRooms = () => {
    rooms?.forEach((room) => (room.isClicked = false));
    setClickedRoomCard(undefined);
  };

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        fetchAndUpdateRoomsData,
        clickedRoomCard,
        setClickedRoomCard,
        deSelectRooms,
        hoveredRoom,
        setHoveredRoom,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};

export { RoomsContext, RoomsProvider };
