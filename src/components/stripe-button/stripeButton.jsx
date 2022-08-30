import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";



const StripeCheckoutButton = () => {
    const priceForStripe = 1 * 100;
    const publishableKey = "pk_test_di8U5kwkIw2iMILBVvqjIriu";

    const onToken = token => {
        axios({
            url: '/.netlify/functions/create-payment-intent',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${priceForStripe}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;