import React from 'react';
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = (props) => {
    const {monsters} = props;
    const mapMonsters = monsters.map(monster=> (
    <Card key={monster.id} data={monster}/>
        )
    )    
    return (
        <div className="card-list">
            {mapMonsters}
        </div>
    )
}

export default CardList;