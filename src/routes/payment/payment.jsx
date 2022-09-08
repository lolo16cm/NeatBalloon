import React from 'react';
import PaymentDetails from '../../components/payment-details/payment-details';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from '../../utils/stripe/stripe.utils';


export const stripePromise = loadStripe(publishableKey);

const Payment = () => {
    return(
        // <Elements stripe={stripePromise}>
            <PaymentDetails />
        // </Elements>
            
        
    ); 

};

    export default Payment; 