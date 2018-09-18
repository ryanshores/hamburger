import React, { Component } from 'react';

import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state = { 
        orders: [],
        loading: true
     }
    componentDidMount() {
        axios.get('/orders.json')
            .then(responce => {
                const orders = Object.keys(responce.data).map(key => {
                    let object = responce.data[key];
                    object.id = key;
                    return object;
                });
                console.log(orders);
                this.setState({loading: false, orders})
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }
    render() { 
        const orders = this.state.orders.map(order => (
            <Order key={order.id} order={order}/>
        ));
        return ( 
            <div>
                {orders}
            </div>
         );
    }
}
 
export default withErrorHandler(Orders, axios) ;