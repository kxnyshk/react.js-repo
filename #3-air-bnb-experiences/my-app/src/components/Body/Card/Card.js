import React from 'react';
import ReactDOM from 'react-dom';

import './Card.css'
import Data from './Data'
import CardTemplate from './CardTemplate';

function Card() {

    const Cards = Data.map(item =>{
        return (
            <CardTemplate key={item.id}
            item = {item}
        />
        )
    })

    return (
        <section className='Cards-list'>
            {Cards}
        </section>
    )
}

export default Card