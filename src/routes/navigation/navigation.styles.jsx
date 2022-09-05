import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 400px) {
    font-size: 9px;
    
  }
 
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;

  @media screen and (max-width: 650px) {
    margin-left: -50px;
    transform: scale(50%, 50%);

  }
  @media screen and (max-width: 450px) {
    margin-left: -50px;
    transform: scale(35%, 30%);

  @media screen and (max-width: 350px) {
    margin-left: -50px;
    transform: scale(25%, 30%);

  }
 
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    transform: scale(0.9);;
     
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

// .navigation {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
  
//     .logo-container {
//       height: 100%;
//       width: 70px;
//       padding: 0px;
//     }
  
//     .nav-links-container {
//       height: 100%;
//       width: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer;
//       }
//     }
//   }
  