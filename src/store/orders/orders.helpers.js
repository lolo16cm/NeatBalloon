// import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, addDoc } from 'firebase/firestore';

export const handleSaveOrder = async (order) => {

  console.log(order);
  // const items = order.orderItems[0];
  // console.log("items:",items)
  // const orderDocRef = collection(db, 'orders').doc(order.orderUserID)
  //   promises.push(
  //     orderDocRef.get()
  //     .then(data =>{
  //       const orderCreatedDate = order.orderCreatedDate
  //       const orderTotal = order.
  //     })
  //   )
 
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

// export const handleSaveOrder = async(order) => {
//   console.log(order);d
//   await setDoc(doc(db, 'orders'), order); 
//   // return new Promise((resolve, reject) => {
    
//       // .collection('orders')
//       // .set(order)
//       // .then(() => {
//       //   resolve();
//       // })
//       // .catch(err => {
//       //   reject(err);
//       // });
//   // });
// };

export const handleGetUserOrderHistory = async(uid) => {
    console.log("uid:",uid);
    const collectionRef = collection(db, 'orders').get().then((querySnapshot) => {
             
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          // setInfo(arr => [...arr , data]);
            console.log(data);
      });
    });
    // .orderBy('orderCreatedDate');
    collectionRef = collectionRef.where('orderUserID', '==', uid);
    console.log("orderUserID:", collectionRef.orderUserID);
    const q = query(collectionRef);

    console.log("collctRef: ", collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};



    // let ref = collectionRef.orderBy('orderCreatedDate');
    // ref = ref.where('orderUserID', '==', uid);

    // ref
    //   .get()
    //   .then(snap => {
    //     const data = [
    //       ...snap.docs.map(doc => {
    //         return {
    //           ...doc.data(),
    //           documentID: doc.id
    //         }
    //       })
    //     ];

    //     resolve({ data });
    //   })
    //   .catch(err => {
    //     reject(err);
    //   });


//   });
// };

// export const handleGetOrder = orderID => {
//   return new Promise((resolve, reject) => {
//     firestore
//       .collection('orders')
//       .doc(orderID)
//       .get()
//       .then(snap => {
//         if (snap.exists) {
//           resolve({
//             ...snap.data(),
//             documentID: orderID
//           })
//         }
//       })
//       .catch(err => {
//         reject(err);
//       })
//   })
// }