// Styles
import './RoomCard.css';

const RoomCard = ({ id, name, rating, review_count, neighborhood, coordinates, photo }) => {
    return (
        <div className="RoomCard">
            <div className="CardImageContainer">
                <img src={photo} alt="Restaurant photo" width="240px" height="160px"/>
            </div>


        </div>
    )
}

export default RoomCard
