import React from 'react';
import nanoid from 'nanoid';
import './RenderIngr.css';
import bacon from '../Images/bacon.png';
import cheese from '../Images/cheese.png';
import meat from '../Images/meat.png';
import salad from '../Images/salad.png';



let Ingredients = [

    {name: 'Meat', price: 50, image: <img src={meat} alt="meat" />},
    {name: 'Cheese', price: 20, image: <img src={cheese} alt="cheese" />},
    {name: 'Salad', price: 5, image: <img src={salad} alt="salad" />},
    {name: 'Bacon', price: 30, image: <img src={bacon} alt="bacon" />}

];

const RenderIngr = props => {
    return (
        <div className="menu">
            {Ingredients.map((ingr, index) => {
                return <div className="box" key={nanoid()}>
                    <div className="cursor" onClick={() => props.onAdd(ingr)}>{ingr.image}</div>
                    <span>{ingr.name} </span>
                    <span>{ingr.price} Сом</span>
                    <span> x {props.ingredientApp[index].count}</span>

                    {props.ingredientApp[index].count > 0 ?
                      <i className='far fa-trash-alt' onClick={() => props.onRemove(ingr)} /> : null}
                </div>
            })}
        </div>
    );
};

export default RenderIngr;
