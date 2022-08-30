import { Fragment } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as BalloonLogo } from '../../assets/balloon-logo.svg';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
  // const { currentUser } = useContext(UserContext);

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <BalloonLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/about'>ABOUT</NavLink>
          {/* <NavLink to='/recovery'>forget</NavLink> */}
          {currentUser ? (
            <>

              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            </>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;