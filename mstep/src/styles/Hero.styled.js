import styled from 'styled-components'
export const Herosection=styled.div`
display: flex;
justify-content: space-between;
padding: 0;
img{
    width: 580px;
    height: 280px;
    text-align:right;
}
h2{
    font-size: 54px;
    font-weight: 700;
    color: ${({theme})=>theme.color.black};
 max-width: 500px;
}
span{
    color: rgba(81, 86, 217, 1);  
}

@media (max-width:${({theme})=>theme.mobile}){
    flex-direction: column;
    h2
    {
        font-size: 34px;
        font-weight: 700;
        color: ${({theme})=>theme.color.black};
        max-width: 400px;
        text-align:center;
        margin-top: 50px;
   }
   img{
    width: 380px;
    height: 280px;
    text-align:right;
}

}

`
