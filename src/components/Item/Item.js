import React from 'react';
import './Item.css';

const Item = ({title, description, backgroundImg, backgroundColor, photoLeft}) => {
    return (
        <div className="item" style={{backgroundColor: backgroundColor}}>
            <div className="item__container" style={{backgroundColor: backgroundColor}}>
                <div className={`item__details${photoLeft ? 'Left' : ''}`}>
                    <p className="item__title" style={{backgroundColor: backgroundColor}}>{title}</p>
                    <p className="item__description" style={{backgroundColor: backgroundColor}}>{description}</p>
                </div>
                <div className={`item__photo${photoLeft ? 'Left' : ''}`} style={{backgroundColor: backgroundColor}}>
                    <img src={backgroundImg} alt=""/>
                </div>
            </div>


        </div>

        )
}

export default Item
