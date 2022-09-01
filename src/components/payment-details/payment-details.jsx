import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { PaymentDetailsContainer } from "./payment-details.styles";

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { apiInstance } from '../../utils/firebase/axios';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../../store/cart/cart.action";

const initialAddress ={
    line1:'',
    line2:'',
    city:'',
    state:'',
    postal_code:''
}



const PaymentDetails = () => {
    const total = useSelector(selectCartTotal);
    const dispacth = useDispatch();
    const stripe = useStripe();
    const elements = useElements();


    const [shippingAddress, setShippingAddress] =  useState({...initialAddress});
    const [billingAddress, setBillingAddress] =  useState({...initialAddress});
    const [recipientName, setRecipientName] =  useState('');
    const [nameOnCard, setNameOnCard] =  useState('');
    const [phoneNumber, setPhoneNumber] =  useState('');

    const handleFormSubmit = async event => {
        event.preventDefault();
        const cardElement = elements.getElement('card');

        if(
            // !stripe || !elements || 
            !shippingAddress.line1 || !shippingAddress.city || 
            !shippingAddress.state || !shippingAddress.postal_code || 
            !billingAddress.line1 || !billingAddress.city || 
            !billingAddress.state || !billingAddress.postal_code || 
            !recipientName || !nameOnCard
        ){
            return;
        }
        apiInstance.post('/payments/create', {
            amount: total * 100,
            shipping: {
                name: recipientName,
                address: {
                    ...shippingAddress
                }
            }
        }).then(({data: clientSecret}) => {
            stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_Details:{
                    name: nameOnCard,
                    addresss: {
                        ...billingAddress
                    }
                }
            }).then(({paymentMethod}) => {
                stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
                })
                .then(({ paymentIntent }) => {console.log(paymentIntent)});
            })
        });

    };


    const handleRecipient = (event) => {
        setRecipientName( event.target.value );
    };

    const handleTel = (event) => {
        setPhoneNumber( event.target.value );
    };

    const handleNameOnCard = (event) => {
        setNameOnCard( event.target.value );
    };

    const handleShipping = (event) => {
        const { name, value } = event.target;
        setShippingAddress({ ...shippingAddress, [name]: value });
      };

    const handleBilling = (event) => {
        const { name, value } = event.target;
    
        setBillingAddress({ ...billingAddress, [name]: value });
        };  


    const configCardElement = {
        iconStyle: 'solid',
        style: {
            base: { 
                fontSize: '16px'
            }
        },
        hidePostalCode: true
    }    

    return (
        <PaymentDetailsContainer>
            
            <form onSubmit={handleFormSubmit}>
                <div className="group-container">
                    <h2>
                        Shipping Address
                    </h2>

                    <FormInput
                    label="Recipient Name"
                    required
                    name="recipientName"
                    onChange={handleRecipient}
                    value={recipientName}
                    type="text" 
                    FormInput
                    />

                    <FormInput
                    label="Phone Number"
                    required
                    name="phoneNumber"
                    onChange={handleTel}
                    value={phoneNumber}
                    type="tel" 
                   
                    />

                    <FormInput
                    label="Address1"
                    required
                    name="line1"
                    onChange={handleShipping}
                    value={shippingAddress.line1}
                    type="text" 
                    />

                    <FormInput
                    label="Address2"
                    name="line2"
                    onChange={handleShipping}
                    value={shippingAddress.line2}
                    type="text" 
                    />

                    <FormInput
                    label="City"
                    required
                    name="city"
                    onChange={handleShipping}
                    value={shippingAddress.city}
                    type="text" 
                    />

                    <FormInput
                    label="State"
                    required
                    name="state"
                    onChange={handleShipping}
                    value={shippingAddress.state}
                    type="text" 
                    />

                    <FormInput
                    label="Postal Code"
                    required
                    name="postal_code"
                    onChange={handleShipping}
                    value={shippingAddress.postal_code}
                    type="text" 
                    />
                     
                </div>

                <div className="group-container">
                    <h2>
                    Billing Address
                    </h2>

                    <FormInput
                    label="Name on Card"
                    required
                    name="nameOnCard"
                    onChange={handleNameOnCard}
                    value={nameOnCard}
                    type="text" 
                    />

                    <FormInput
                    label="Address1"
                    required
                    name="line1"
                    onChange={handleBilling}
                    value={billingAddress.line1}
                    type="text" 
                    />

                    <FormInput
                    label="Address2"
                    name="line2"
                    onChange={handleBilling}
                    value={billingAddress.line2}
                    type="text" 
                    />

                    <FormInput
                    label="City"
                    required
                    name="city"
                    onChange={handleBilling}
                    value={billingAddress.city}
                    type="text" 
                    />

                    <FormInput
                    label="State"
                    required
                    name="state"
                    onChange={handleBilling}
                    value={billingAddress.state}
                    type="text" 
                    />

                    <FormInput
                    label="Postal Code"
                    required
                    name="postal_code"
                    onChange={handleBilling}
                    value={billingAddress.postal_code}
                    type="text" 
                    />
                </div>

                <div className="group-container">
                    <h2>
                    Card Details
                    </h2>
                    <CardElement options={configCardElement} />
                </div>
                
                <Button type="submit">Pay ${total} Now  </Button>
                
            </form>

        </PaymentDetailsContainer>
    );
};

export default PaymentDetails;