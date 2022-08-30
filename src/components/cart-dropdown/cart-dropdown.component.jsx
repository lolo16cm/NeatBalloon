// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';



const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  const goToAuthHandler = () => {
    navigate('/auth')
  }
  const currentUser = useSelector(selectCurrentUser);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      {currentUser ? (
        <Button onClick={goToCheckoutHandler}>VIEW MY CART</Button>
      ) : (
        <Button onClick={goToAuthHandler}>Signin To Continue</Button>
      )}

    </CartDropdownContainer>
  );
};

export default CartDropdown;