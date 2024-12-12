import React from 'react'
import { Container } from '../styles/common.styled'
import { Card, Display } from '../styles/maincss.styled'
export default function Cards({data}) {
  return (
    <Container>
      <Display>
        {
            data.map(items=>(
              <Card>
                <div className='img'>
                  <img src={items.img} alt="cloths"/>
                </div>
                <div className='info'>
                  <p>{items.title}</p>
                  <p>Price:<span>{items.price}</span></p>
                </div>
              </Card>
            ))
        }
      </Display>
    </Container>
  )
}
