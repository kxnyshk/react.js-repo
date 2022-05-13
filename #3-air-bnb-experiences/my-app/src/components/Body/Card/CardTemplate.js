import React from 'react';
import ReactDOM from 'react-dom';

import './Card.css';
import Star from './images/Star 1.png'

function CardTemplate(props) {

    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className='Card-div'>
            {badgeText && <div className='Card-badge'>{badgeText}</div>}

            <div className='Card-img-div'>
                <img src={`./images/${props.item.coverImg}`} className='Card-img'></img>
            </div>

            <div className='Card-stats'>
                <img src={Star} className='Card-star'></img>
                <span className='Card-stats-info'>
                    <span>{props.item.stats.rating}</span>
                    <span className='Gray Card-stats-reviewCount'>({props.item.stats.reviewCount}) •</span>
                    <span className='Gray Card-stats-location'>{props.item.location}</span>
                </span>
            </div>

            <div className='Card-info'>
                <p className='Card-info-title'>{props.item.title}</p>
                <p className='Card-info-price'> <span className='Bold'>
                        From ${props.item.price}
                    </span> / person </p>
            </div>
        </div>
    )
}

export default CardTemplate