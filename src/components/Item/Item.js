import React from 'react';
import './Item.css';

const Item = ({title, description, backgroundImg, photoLeft}) => {
    return (
        <div className="item" style={{
            // backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__details">
                    <p className="item__title">{title}</p>
                    <p className="item__description">{description}</p>
                </div>
                <div className="item__photo">
                    <img src={backgroundImg} alt=""/>
                </div>
            </div>


        </div>

        )
}

export default Item
