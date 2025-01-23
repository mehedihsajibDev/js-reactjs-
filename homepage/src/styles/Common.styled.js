import styled from 'styled-components';

export const Container=styled.div`
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
`
export const Gridthree=styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
gap: ${({gap})=>gap || "2rem"};
@media(max-width:${({theme})=>theme.mobile}){
  grid-template-columns: auto;
  }
`
