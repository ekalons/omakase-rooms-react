// Styles
import './RoomCard.css';
// Michelin star svg
import { ReactComponent as MichelinStar } from '../../assets/MichelinStar.svg';

const RoomCard = ({ id, name, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo }) => {
    return (
        <div className="RoomCard">
            <div className="CardImageContainer">
                <img src={photo} alt="Restaurant photo" width="240px" height="160px"/>
            </div>
            <div className="InfoContainer">
                <p className="RoomName">{name}</p>
                <div className="InfoRow">
                    <div className="IconContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="Star" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
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

                <p className="RoomNeighborhood">{neighborhood}</p>
            </div>

        </div>
    )
}

export default RoomCard

