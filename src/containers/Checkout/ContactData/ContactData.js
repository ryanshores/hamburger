import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = { 
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'priority', displayValue: 'Priority'},
                        {value: 'economy', displayValue: 'Economy'},
                    ]
                },
                value: '',
                validation: {
                    required: false
                },
                touched: false
            },
        },
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedForm});
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }
        const burgerOrder = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        };
        console.log(burgerOrder)
        axios.post('/orders.json', burgerOrder)
            .then(responce => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            });
    };

    render() {
        const formElementsArray = Object.keys(this.state.orderForm)
            .map(key => {
                const object = {
                    ...this.state.orderForm[key],
                    id: key
                }
                return (<Input 
                    key={object.id}
                    elementType={object.elementType}
                    elementConfig={object.elementConfig}
                    value={object.value} 
                    changed={(event) => this.inputChangedHandler(event, object.id)}
                    invalid={!object.valid}
                    shouldValidate={object.validation.required}
                    touched={object.touched}
                    />)
            });

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray}
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