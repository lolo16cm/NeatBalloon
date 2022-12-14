import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  Button{
    @media screen and (max-width: 500px) {
    font-size: 9px;
}
@media screen and (max-width: 380px) {
  font-size: 7px;
}
}
  
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 450px) {
    font-size:10px;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 550px) {
    font-size:12px;
  }
  @media screen and (max-width: 450px) {
    font-size:10px;
  }

  @media screen and (max-width: 400px) {
    font-size:8px;
  }
  @media screen and (max-width: 300px) {
    font-size:6px;
  }
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

// .checkout-container {
//     width: 55%;
//     min-height: 90vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 50px auto 0;

//     .checkout-header {
//         width: 100%;
//         padding: 10px 0;
//         display: flex;
//         justify-content: space-between;
//         border-bottom: 1px solid darkgrey;

//         .header-block {
//             text-transform: capitalize;
//             width: 23%;

//             &:last-child {
//                 width: 8%;
//             }
//         }
//     }

//     .total {
//         margin-top: 30px;
//         margin-left: auto;
//         font-size: 36px;
//     }
// }