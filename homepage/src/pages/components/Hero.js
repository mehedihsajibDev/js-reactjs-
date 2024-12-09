import React from 'react'
import { Container } from '../../styles/Common.styled'
import rightimg from '../../images/right.jpg'
import { Herosection } from '../../styles/Hero.styled'

export default function Hero() {
  return (
    <Container>
      <Herosection>
          <div>
            <h2>Learn Styled Component From <span>Code ABC</span></h2>
          </div>
          <div>
            <img src={rightimg} alt="rightimg"/>
          </div>
      </Herosection>
    </Container>
  )
}
