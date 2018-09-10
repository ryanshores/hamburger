import React, { Component } from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  render() { 
    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(key => {
      return (
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
        </li>
      )
    });
  return ( 
    <Aux>
      <h3>Your order</h3>
      <p>A yummy burger with the following ingredients.</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total: ${this.props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={this.props.cancel} btnType='Danger'>CANCEL</Button>
      <Button clicked={this.props.submit} btnType='Success'>CONTINUE</Button>
    </Aux>
   );
  }
}
 
export default OrderSummary;