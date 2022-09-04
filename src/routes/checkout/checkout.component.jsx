import { useSelector } from "react-redux";

import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripeButton";

import PaymentForm from "../../components/stripe-button/payment-form.component";
// import PaymentForm from "../../components/stripe-button/pay";

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from "./checkout.styles";
import Payment from "../payment/payment";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button/button.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const navigate = useNavigate();
    const goToPayment = () => {
        navigate('/payment')
      }

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total: ${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(cartTotal)}</Total>
            
            <Button onClick={goToPayment}>continue to payment</Button>

            {/* <StripeCheckoutButton /> */}
        </CheckoutContainer>
    );
};

export default Checkout;