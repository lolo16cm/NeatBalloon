import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "../../store/orders/orders.action";
import OrderHistory from "../../components/account-component/order-history";

const mapState = ({ user, orders }) => ({
  currentUser: user.currentUser,
  orderHistory: orders.orderHistory.data
})

const Account = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);
  // const orderHistory = useSelector(selectOrderHistory);
  // const mapState = {
  //   currentUser: currentUser,
  //   orderHistory: orderHistory
  // };
  useEffect(() => {
    dispatch(
      getUserOrderHistory(currentUser.id)
    );

  }, []);

  console.log(orderHistory)

  return (
    <div>
      <h1>
        Order History
      </h1>

      <OrderHistory orders={orderHistory} />
    </div>
  );
};
  
  export default Account;