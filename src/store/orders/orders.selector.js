// import { createSelector } from 'reselect';

// const selectOrderReducer = (state) => state.orders;

// export const selectOrderHistory = createSelector(
//     [selectOrderReducer],
//     (orders) => orders.orderHistory
// );
export const selectOrderHistory = (state) => state.orderHistory;