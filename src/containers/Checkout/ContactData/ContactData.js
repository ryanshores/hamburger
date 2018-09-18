import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-order'

class ContactData extends Component {
    state = { 
        contactData: {
            name: '',
            email: '',
            address: {
                street: '',
                zipcode: ''
            }
        },
        loading: false
    }

    handleFormUpdate = () => {

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const burgerOrder = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                    name: 'Ryan Shores',
                    address: {
                        street: '5227 Summer Oak Dr',
                        zipcode: '77505'
                    },
                    email: 'ryan.shores@me.com',
                    delivery: 'fastest'
            }
        };
        axios.post('/orders.json', burgerOrder)
            .then(responce => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Name' />
                <input className={classes.Input} type='text' name='email' placeholder='Email' />
                <input className={classes.Input} type='text' name='street' placeholder='Street' />
                <input className={classes.Input} type='number' name='zipcode' placeholder='Zipcode' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;