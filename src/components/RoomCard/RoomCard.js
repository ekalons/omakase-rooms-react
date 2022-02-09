// Styles
import './RoomCard.css';

// Icons
import { ReactComponent as MichelinStar } from '../../assets/MichelinStar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const RoomCard = ({ _id, name, details, rating, review_count, neighborhood, price, michelin_stars, serve_style, coordinates, photo, isClicked, allRooms, updateParent }) => {

    // onRoomCardClick callback func -> Update parent state
    const handleUpdate = () => {
    const objArr = allRooms

    objArr.forEach(room => room.isClicked = false)

    const obj = objArr.find(obj => obj.name === name);
    if (obj.isClicked === true) {
        obj.isClicked = false
    } else {
        obj.isClicked = true
    }
    updateParent(obj)
    }


    return (
        <div className="RoomCard" onClick={handleUpdate}>
            <div className="CardImageContainer">
                <img src={photo} alt="Restaurant" width="240px" height="160px"/>
            </div>
            <div className="InfoContainer">
                <p className="RoomName">{name}</p>
                <div className="InfoRow">
                    <div className="IconContainer">
                        <FontAwesomeIcon icon={faStar} color="red" size="sm" className="Star"/>
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
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="LocationMarker"/>
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

