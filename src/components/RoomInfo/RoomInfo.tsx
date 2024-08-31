import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { MichelinStarIcon } from "../MichelinStar/MichelinStar";
import "./RoomInfo.css";

interface RoomInfoProps {
  rating: number;
  review_count: number;
  serve_style: string;
  price: number;
  michelin_stars: number;
}

const RoomInfo = ({
  rating,
  review_count,
  serve_style,
  price,
  michelin_stars,
}: RoomInfoProps) => {
  return (
    <div className="InfoRow">
      <div className="IconContainer">
        <FontAwesomeIcon icon={faStar} color="red" size="sm" className="Star" />
      </div>
      <p className="RoomRating">{rating}</p>
      <p className="RoomReviewCount">({review_count})</p>
      <p className="RoomServeStyle">
        {serve_style.toLowerCase() === "bar" ? "Counter" : "Counter & Table"}
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
  );
};

export default RoomInfo;
