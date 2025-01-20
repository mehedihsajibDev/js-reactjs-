import React from 'react'
import { CardItem, Cardlayout, Container, Section } from '../../styles/product.Styled'

export default function ItemCard({data}) {
  return (
    
    <Section>
      <Container>
        <Cardlayout>
          {
            data.map((item,index)=>(
              <CardItem key={index}>
                <img src={item.img} alt="img"/>
                <h3>{item.title}</h3>
                <p>Price:{item.price}</p>
              </CardItem>
            ))
          }
        </Cardlayout>
      </Container>
    </Section>
  )
}
