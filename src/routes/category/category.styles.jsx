import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
}

@media screen and (max-width: 400px) {
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
}
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;


// .category-container {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//     row-gap: 50px;
// }

// .category-title {
//     font-size: 38px;
//     padding-top: 25px;
//     margin-bottom: 35px;
//     text-align: center;
// }

