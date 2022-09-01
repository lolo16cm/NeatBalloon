import React from 'react';
import PaymentDetails from '../../components/payment-details/payment-details';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

 
export const stripePromise = loadStripe('pk_test_di8U5kwkIw2iMILBVvqjIriu');

const Payment = () => {
    return(
        // <Elements stripe={stripePromise}>
            <PaymentDetails />
        // </Elements>git 
            
        
    );

};

    export default Payment; 