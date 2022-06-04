import React from 'react';
import ReactDOM from 'react-dom';

import './Card.css';

function CardTemplate(props) {
    return(
        <div>
            <div className='Card-div'>
                <div className='Card-img'>
                    <img id='Card-img-photo' src={`./Images/${props.item.imageLocation}`} className='Card-img'></img>
                </div>

                <div className='Card-data'>
                    <div className='Data-location'>
                        <span className='Location-pointer'>
                            <img id='Pointer-img' src='./Images/Fill 220.png'></img>
                        </span>
                        <span className='Location-country'>{`${props.item.location}`}</span>
                        <div className='Location-map'>
                            <a id='Map-url' href={`${props.item.googleMapsUrl}`} target='_blank'>View on Google Maps</a>
                        </div>
                    </div>

                    <div className='Data-title'>
                        {`${props.item.title}`}    
                    </div>

                    <div className='Data-dates'>
                        {`${props.item.startDate} - ${props.item.endDate}`}
                    </div>

                    <div className='Data-body'>
                        {`${props.item.description}`}
                    </div>
                </div>
            </div>

            <hr style={{width: '90%', height: '2px', background: '#F55A5A', border: '0px', borderRadius: '1px', marginTop: '40px', marginLeft: '20px', marginRight: '20px',}}></hr>
        </div>
    )
}

export default CardTemplate