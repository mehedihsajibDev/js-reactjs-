import React from 'react'
import { Container } from '../../styles/Common.Styled'
import { Herosection } from '../../styles/Hero.styled'
import heroimg from "../../images/right.svg"

export default function Hero() {
  return (
    <Container>
      <Herosection>
       <h2> Learn Styled Component from <span>Code ABC</span></h2>
       <img src={heroimg} alt="heroimg"/>
      </Herosection>
    </Container>
  )
}
