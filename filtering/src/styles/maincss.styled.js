import styled from 'styled-components';
export const Navdiv=styled.div`
   height: 8vh;
   background-color: #ff8686;
   display: flex;
   align-items: center;
   justify-content: center;
  .navbar{
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }
  .item{
    padding: 6px 15px;
    background-color: #ffd1d1;
    font-size: 18px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
  }
`
export const Display=styled.div`
   background-color: #edd4d4;
   display: flex;
   justify-content: space-evenly;
   gap: 30px;
   padding: 50px 0;
`
export const Card=styled.div`
   border: 1px solid #dcdcdc;
   box-shadow: 10px 10px 5px #aaaaaa;
   border-radius: 8x;

   img{
    width: 200px;
    height: 200px;
    border-radius: 6px;
   }
   .info{
    padding: 10px 10px;
   }
   .info p{
    font-size: 17px;
   }
   .info p span{
    font-size: 17px;
    font-weight: bold;
   }

`