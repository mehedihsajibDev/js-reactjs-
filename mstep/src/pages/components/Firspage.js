import React from 'react'
import { Btnsection, Card, CardSection, Typography } from '../../styles/Common.Styled'

export default function Firspage() {
  return (
    <>
     <Typography>
      <h2>This is your First Page</h2>
     </Typography>

     <CardSection>
      <Card>
        <h2>Card One</h2>
      </Card>
      <Card>
        <h2>Card 2</h2>
      </Card>
      <Card>
        <h2>Card 3</h2>
      </Card>
     </CardSection>
     <Btnsection>
      <button className='prev'>Previous</button>
      <button className='next'>Next</button>
     </Btnsection>
    </>
  )
}
