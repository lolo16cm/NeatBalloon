// import { addDoc, collection } from "firebase/firestore";
import React from 'react';
import { db } from "../../utils/firebase/firebase.utils";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, addDoc, orderBy, where } from 'firebase/firestore';

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
  console.log('handleGetOrder');
    const collectionRef = doc(db, 'orders', orderID);
    console.log('collectionRef:', collectionRef);
    const q = query(collectionRef);
    const orderDetails = await getDoc(q).then(snap => {
      if (snap.exists) {
        const data = ({
          ...snap.data(),
          documentID: orderID
        });
        console.log('orderDetails:',data);
        return( data );
      }
      // console.log('failed return object')
    }).catch(err => {
      console.log(err.message);
    })
    // console.log('detail-data',querySnapshot);
    // console.log('done handleGetOrder');
    return orderDetails;  
}