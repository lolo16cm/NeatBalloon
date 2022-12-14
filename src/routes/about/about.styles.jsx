import styled from 'styled-components';


export const AboutWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    
    img{
        margin: 30px 0;
        width: 100%;
        diplay: block;
        border-radius: 30px;
        height: 500px;
        object-fit: cover;
    }

    p{
        line-height: 3;
        max-width: 65%;
        margin: 0 auto;
        margin-top: 30px;
        font-size: 20px;
        color: gray;

        @media screen and (max-width: 800px) {
            max-width: 80%;
            font-size: 18px;
            line-height: 2;
          }

        @media screen and (max-width: 500px) {
            max-width: 80%;
            font-size: 14px;
            line-height: 2;
          }


    }

    .title{
        text-align: center;
    }
    

    @media screen and (max-width: 990px){
        grid-templaate-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {

        flex-direction: column;
    
      }
` 