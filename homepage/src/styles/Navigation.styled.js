import styled from 'styled-components';
export const Navigation=styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  img{
    height: 90px;
    height: 90px;
  }

  ul{
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
    li{
      font-size: 1.2rem;
      line-height: 1.6em;
     }
  }
  
  @media(max-width:${({theme})=>theme.mobile}){
   flex-direction : column;
   gap: 10px;
  }

`

