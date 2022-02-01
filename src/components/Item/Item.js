import React from 'react';
import './Item.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Item = ({title, description, backgroundImg, backgroundColor, photoLeft, first}) => {
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
            {first === true && (
                <div className="FirstItem">
                    <FontAwesomeIcon icon={faAngleDown} color="#393c41" size="lg" className="AngleDownIcon"/>
                </div>

                )}


        </div>

        )
}

export default Item
