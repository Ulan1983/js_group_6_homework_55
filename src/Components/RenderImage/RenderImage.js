import React from 'react';
import nanoid from 'nanoid';
import './RenderImage.css';

const fillings = (arr) => {
    let arrDiv = [];
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].count; j++){
            let div = <div className={arr[i].name} key={nanoid()}/>;
            arrDiv.push(div);
        }
    }
    return arrDiv;
};
const RenderImage = props => {
    return (
      <div className="result">
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {fillings(props.ingredientCount)}
            <div className="BreadBottom"></div>

        </div>
          <div className="total">
           Price: {props.totalPrice} сом
          </div>
      </div>
    );
};

export default RenderImage;