import React from 'react';
import './Item.css';

const Item = ({title, description, backgroundImg, backgroundColor, photoLeft}) => {
    return (
        <div className="Item" style={{backgroundColor: backgroundColor}}>
            <div className="ItemContainer" style={{backgroundColor: backgroundColor}}>
                <div className={`ItemDetails${photoLeft ? 'Left' : ''}`}>
                    <p className="ItemTitle" style={{backgroundColor: backgroundColor}}>{title}</p>
                    <p className="ItemDescription" style={{backgroundColor: backgroundColor}}>{description}</p>
                </div>
                <div className={`ItemPhoto${photoLeft ? 'Left' : ''}`} style={{backgroundColor: backgroundColor}}>
                    <img src={backgroundImg} alt=""/>
                </div>
            </div>


        </div>

        )
}

export default Item
