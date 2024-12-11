import React from 'react'
import jacket from "../assets/jacket.jpg"
import { Container } from '../styles/common.styled'
import { Card, Display } from '../styles/maincss.styled'
export default function Cards() {
  return (
    <Container>
      <Display>
        <Card>
          <div className='img'>
            <img src={jacket} alt="cloths"/>
          </div>
          <div className='info'>
            <p>Title</p>
            <p>Price:<span>3000BDT</span></p>
          </div>
        </Card>
        <Card>
          <div className='img'>
            <img src={jacket} alt="cloths"/>
          </div>
          <div className='info'>
            <p>Title</p>
            <p>Price:<span>3000BDT</span></p>
          </div>
        </Card>
        <Card>
          <div className='img'>
            <img src={jacket} alt="cloths"/>
          </div>
          <div className='info'>
            <p>Title</p>
            <p>Price:<span>3000BDT</span></p>
          </div>
        </Card>
      </Display>
    </Container>
  )
}
