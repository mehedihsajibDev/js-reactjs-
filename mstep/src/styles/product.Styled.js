import styled from 'styled-components'

export const Section=styled.section`
  padding: 0;
  margin: 0 auto;
  width: 100%;
`
export const Container=styled.div`
  max-width: 1500px;
  padding: 20px;
  margin: 0 auto;
`

export const Navigation=styled.nav`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background-color: ${({theme})=> theme.color.navcolor};
  color: ${({theme})=>theme.color.white};

  ul{
    list-style: none; 
    display: flex;
    gap: 20px;
    li{
        text-decoration: none;
        color: aliceblue;
        font-size: 20px;
        font-weight: 500;
        background-color: coral;
        padding: 8px 25px;
        border-radius: 7px;
    }
  }
`
export const Cardlayout= styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const CardItem= styled.div`
  width:290px;
  border-radius: 7px;
  background-color: ${({theme})=>theme.color.white};
  
  img{
    width: 100%;
  }
`
