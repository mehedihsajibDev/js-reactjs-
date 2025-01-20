import React from 'react'
import { Container, Navigation, Section } from '../../styles/product.Styled'

export default function Navitem({data}) {
  return (
    <Section>
      <Container>
        <Navigation>
          <ul>
            <li>All</li>
            {
              data.map(ilist=>(
                <li key={ilist.id}>{ilist.category}</li>
              ))
            }
            
          </ul>
        </Navigation>
      </Container>
    </Section>
  )
}
