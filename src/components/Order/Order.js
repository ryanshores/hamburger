import React from 'react';

import classes from './Order.css'

const order = (props) => {
    const ingredients = Object.keys(props.order.ingredients).map(ingName => (
        <span 
            key={ingName}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>
            {ingName} ({props.order.ingredients[ingName]})
        </span>
    ));
    
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p><strong>USD {Number.parseFloat(props.order.price).toFixed(2)}</strong></p>
        </div>
    );
}
 
export default order;