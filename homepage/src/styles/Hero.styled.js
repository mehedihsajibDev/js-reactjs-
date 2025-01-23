import styled from 'styled-components';
export const Herosection=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
   >div{
    flex: 1;
   }
  h2{
    font-size: 4.0rem;
    font-weight: 700;
    span{
        color: #5156D9;
      }
  }
  @media(max-width:${({theme})=>theme.mobile}){
   flex-direction : column;
   gap: 10px;
   text-align: center;
   margin: 40px 0;
   
   h2{
    font-size: 28px;
    max-width: 300px;
   }
  }
`

export const TopSection = styled.section`
   background: linear-gradient(180deg, #D1D2F1 0.47%, rgba(217, 217, 217, 0) 85.31%);
`
export const FeatureSection = styled.section`
   background: linear-gradient(180deg, #FFFFFF 0.09%, #C9EFF1 100%);
   h2{
      text-align: center;
      color: #5156D9;
      font-weight: 700;
      font-size: 36px;
      margin: 80px 0;
   }
`
export const FeatureCard = styled.div`

   img{
    width: 100%;
    height: 200px;
    margin-bottom:-4px;
   }
   .caption{
      background-color: ${({bgcolor})=>bgcolor};
      color:${({color})=>color};
   }
   .caption p{
      margin: 0;
      padding: 0;
      padding: 25px;
      text-align: center;
      font-size: 20px;
   }
`