import styled from 'styled-components'

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 10px;
  img{
    height: 90px;
    height: 90px;
    border-radius: 50%;
  }
  ul{
    display: flex;
    gap: 12px;
    padding: 0;
    list-style: none;
  }
  ul li{
    font-size: 18px;
    color: #464545ff;
  }
  @media (max-width:${({theme})=>theme.mobile}){
   flex-direction: column;
  }
`