import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderDetailsStart } from '../../store/orders/orders.action'; 
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from './../../components/account-component/order-details';
import {OderIdHeader} from './order-details.styles';
const mapState = ({ orders }) => ({
  orderDetails: orders.orderDetails
});

const Order = () => {
  const { orderID } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;
   
  useEffect(() => {
    dispatch(
      getOrderDetailsStart(orderID)
    );    
  }, []);

  return (
    <div>

      <OderIdHeader>
        Order Number: {orderID}
      </OderIdHeader>
      
      <OrderDetails order={orderDetails} />

      <h3>
        Total: ${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(orderTotal)}
      </h3>

    </div>
  )

}

export default Order;