import "./RoomCard.css";
import { Room } from "../../clients/getRooms";
import RoomInfo from "../RoomInfo/RoomInfo";
import NeighborhoodDetails from "../NeighborhoodDetails/NeighborhoodDetails";

interface RoomCardProps {
  name: string;
  details: string;
  rating: number;
  review_count: number;
  neighborhood: string;
  price: number;
  michelin_stars: number;
  serve_style: string;
  photo: string;
  allRooms: Room[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  updateParent: (obj: Room | undefined) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  url?: string;
}

const RoomCard = ({
  name,
  details,
  rating,
  review_count,
  neighborhood,
  price,
  michelin_stars,
  serve_style,
  photo,
  allRooms,
  updateParent,
  onMouseEnter,
  onMouseLeave,
}: RoomCardProps) => {
  const handleUpdate = () => {
    const objArr = allRooms;

    objArr.forEach((room) => (room.isClicked = false));

    const obj = objArr.find((obj) => obj.name === name);
    if (obj && obj.isClicked === true) {
      obj.isClicked = false;
    } else if (obj) {
      obj.isClicked = true;
    }
    updateParent(obj);
  };

  return (
    <div
      className="RoomCard"
      onClick={handleUpdate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="CardImageContainer">
        <img src={photo} alt="Restaurant" width="240px" height="160px" />
      </div>
      <div className="InfoContainer">
        <p className="RoomName">{name}</p>
        <RoomInfo
          rating={rating}
          review_count={review_count}
          serve_style={serve_style}
          price={price}
          michelin_stars={michelin_stars}
        />
        <NeighborhoodDetails neighborhood={neighborhood} />
        <div className="InfoRow RoomDetailsContainer">
          <span>{details}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
