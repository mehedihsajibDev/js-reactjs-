import styled from 'styled-components'
export const Homesection1= styled.section`
    height: 30vh;
    padding: 0 20px;
    background: linear-gradient(180deg, #D1D2F1 0.47%, rgba(217, 217, 217, 0) 85.31%);
`
export const Homesection= styled.section`
  display: flex;
  flex-direction: column;
`

export const Featuresection= styled.section`
    background: linear-gradient(180deg, #FFFFFF 0.09%, #C9EFF1 100%);
`
export const Gridthree = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`
export const FeatureCard=styled.div`
padding: 50px 0;
img{
    width: 100%;
    height: 60%;
}
    .caption{
        background-color: ${({bgcolor})=>bgcolor};
        color: ${({color})=> color};
    }
    p{
        padding: 20px;
        font-size: 20px;
        font-weight: 600;
        margin-top: -5px;
    }
`
export const H2section=styled.section`
       h2{
        font-size: 45px;
        line-height: 1.6;
        text-align: center;
       }
`