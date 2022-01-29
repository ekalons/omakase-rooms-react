// Styles
import './RoomCard.css';
// Michelin star svg
import { ReactComponent as MichelinStar } from '../../assets/MichelinStar.svg';
import StarSVG from '../SVGIcons/StarSVG';
import LocationSVG from '../SVGIcons/LocationSVG';

const RoomCard = ({ id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo }) => {
    return (
        <div className="RoomCard">
            <div className="CardImageContainer">
                <img src={photo} alt="Restaurant photo" width="240px" height="160px"/>
            </div>
            <div className="InfoContainer">
                <p className="RoomName">{name}</p>
                <div className="InfoRow">
                    <div className="IconContainer">
                        <StarSVG />
                    </div>
                    <p className="RoomRating">{rating}</p>
                    <p className="RoomReviewCount">({review_count})</p>
                    <p className="RoomServeStyle">{serve_style}</p>
                    <p className="RoomPrice">
                        {price >=250 ? "$$$$" : price <250 && price >=125 ? "$$$" : "$$"}
                    </p>
                    {michelin_stars >= 1 && (
                        <div className="MichelinStarContainer">
                            <MichelinStar className="MichelinStar"/>
                            {michelin_stars >= 2 && (
                                <MichelinStar className="MichelinStar"/>
                            )}
                            {michelin_stars === 3 && (
                                <MichelinStar className="MichelinStar"/>
                            )}

                        </div>
                    )}

                </div>
                <div className="InfoRow">
                    <div className="IconContainer">
                        <LocationSVG />
                    </div>
                    <p className="RoomNeighborhood">{neighborhood}</p>
                </div>
                <div className="InfoRow RoomDetailsContainer">
                    <span>{details}</span>
                </div>

            </div>

        </div>
    )
}

export default RoomCard

