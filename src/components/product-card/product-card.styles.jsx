
import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  padding-bottom:35px;
  display: flex;
  flex-direction: column;
  height: 90%x;
  align-items: center;
  position: relative;

  img {
    width: 90%;
    height: 80%;
    object-fit: fill;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 40%;
    display: none;
    font-size: 12px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;



export const Footer = styled.div`
  width:95%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
}

@media screen and (max-width: 350px) {
  font-size: 12px;
  
}
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
  color: #CC6666;
`;




// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;
//   // background-color: #EBE5FA;



//   img {
//     width: 90%;
//     height: 100%;
//     object-fit: contain;
//     margin-bottom: 5px;
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {

//       width: 90%;
//       margin-bottom: 15px;
//       padding-left: 20px;
//     }

//     .price {
//       width: 35%;
//       font-weight: 520;
//     }
//   }
// }