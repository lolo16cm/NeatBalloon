// import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { doc, getDoc, collection, query, getDocs, addDoc, orderBy, where } from 'firebase/firestore';

export const handleSaveOrder = async (order) => { 
  const orderDocRef = collection(db, 'orders')
  addDoc(orderDocRef, {
      orderUserID: order.orderUserID,
      orderCreatedDate: order.orderCreatedDate,
      orderTotal: order.orderTotal, 
      orderItems: {...order.orderItems}
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err.message)
    })
    return orderDocRef;
  };

export const handleGetUserOrderHistory = async(uid) => {
  const collectionRef= collection(db, 'orders');
  const q = query(collectionRef, orderBy('orderCreatedDate'), where('orderUserID', '==', uid));
  const querySnapshot = await getDocs(q).then(snap => {
        const data = [
          ...snap.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];
        return({ data });
      });
  return querySnapshot;
};

export const handleGetOrder = async(orderID) => {
  return new Promise((resolve, reject) =>{
    const collectionRef = doc(db, 'orders', orderID);
    const q = query(collectionRef);
    getDoc(q)
    .then(snap => {
      if (snap.exists) {
        resolve({
          ...snap.data(),
          documentID: orderID
        })
      }
    })
    .catch(err => {
      reject(err);
    })
  })     
}