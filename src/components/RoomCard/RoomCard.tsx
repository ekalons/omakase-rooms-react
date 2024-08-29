import "./RoomCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { MichelinStarIcon } from "../MichelinStar/MichelinStar";
import { Room } from "../../clients/getRooms";

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
        <div className="InfoRow">
          <div className="IconContainer">
            <FontAwesomeIcon
              icon={faStar}
              color="red"
              size="sm"
              className="Star"
            />
          </div>
          <p className="RoomRating">{rating}</p>
          <p className="RoomReviewCount">({review_count})</p>
          <p className="RoomServeStyle">
            {serve_style.toLowerCase() === "bar"
              ? "Counter"
              : "Counter & Table"}
          </p>
          <p className="RoomPrice">
            {price >= 250 ? "$$$$" : price < 250 && price >= 125 ? "$$$" : "$$"}
          </p>
          {michelin_stars >= 1 && (
            <div className="MichelinStarContainer">
              <MichelinStarIcon />
              {michelin_stars >= 2 && <MichelinStarIcon />}
              {michelin_stars === 3 && <MichelinStarIcon />}
            </div>
          )}
        </div>
        <div className="InfoRow">
          <div className="IconContainer">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="sm"
              className="LocationMarker"
            />
          </div>
          <p className="RoomNeighborhood">{neighborhood}</p>
        </div>
        <div className="InfoRow RoomDetailsContainer">
          <span>{details}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
