import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action';

import { ProductCartContainer, Footer, Name, Price, Inventory } from './product-card.styles';


const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  // const inventoryHandler = () => {
  // if (`${inStock}`) {
  //   lbl = 'add to cart';
  //   // (<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card
  //   // </Button>);
  // }
  // else {
  //   lbl = 'Out of stock';
  //   // (<Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Out of Stock </Button>); }
  // };


  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>


      {product.inStock ? (<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> Add To Cart</Button>) : (<Button>Sold Out</Button>)}




    </ProductCartContainer>
  );
};


export default ProductCard;