// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./card.style.css";
const Card = (props) => {
    const {data:{id,name,email}} = props;
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;

