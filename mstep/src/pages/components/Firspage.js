import React from 'react'
import { Btnsection, Card, CardSection, Typography } from '../../styles/Common.Styled'

export default function Firspage({setpage}) {
  return (
    <>
     <Typography>
      <h2>Which Programming language do you like?</h2>
     </Typography>

     <CardSection>
      <Card>
        <h2>Php</h2>
      </Card>
      <Card>
        <h2>Javascript</h2>
      </Card>
      <Card>
        <h2>Pythone</h2>
      </Card>
     </CardSection>
     <Btnsection>
      <button className='prev'onClick={()=>setpage(1)}>Previous</button>
      <button className='next' onClick={()=>setpage(2)}>Next</button>
     </Btnsection>
    </>
  )
}
