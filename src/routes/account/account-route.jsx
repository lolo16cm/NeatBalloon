import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "../../store/orders/orders.action";
import { selectCurrentUser } from '../../store/user/user.selector';
import OrderHistory from "../../components/account-component/order-history";
import { selectOrderHistory } from "../../store/orders/orders.selector";


const Account = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const orderHistory = useSelector(selectOrderHistory);
  // const mapState = {
  //   currentUser: currentUser,
  //   orderHistory: orderHistory
  // };
  useEffect(() => {
    
      dispatch(
        getUserOrderHistory(currentUser.id)
      )

  }, []);

  return (
    // console.log(orderHistory),
    <div>
      <h1>
        Order History
      </h1>
      <OrderHistory orders={orderHistory} />
    </div>
  );
};
  
  export default Account;