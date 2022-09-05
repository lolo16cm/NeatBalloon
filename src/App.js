import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import About from './routes/about/about';
import Checkout from './routes/checkout/checkout.component';
import Recovery from './routes/authentication/forget-password';
import Footer from './components/footer/footer';
import PaymentDetails from './components/payment-details/payment-details';
import Payment from './routes/payment/payment';
import Account from './routes/account/account-route';
import Order from './routes/account/orderdetails-route'
import { checkUserSession } from './store/user/user.action';
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser
// } from './utils/firebase/firebase.utils';

import { GlobalStyle } from './global.styles';
import ErrorBoundary from './utils/firebase/errorboundary';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }

    //   dispatch(setCurrentUser(user));
    // });

    // return unsubscribe;
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='about' element={<About />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='recovery' element={<Recovery />} />
          <Route path='payment' element={<Payment />} />
          <Route path='/order/:orderID' element={<Order />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;