import React from 'react'
import { Container } from '../styles/common.styled'
import { Navdiv } from '../styles/maincss.styled'


export default function Navbar() {
  return (
       <Container>
          <Navdiv>
              <div className='navbar'>
                <div className='item'>
                  All
                </div>
                <div className='item'>
                  Fruits
                </div>
                <div className='item'>
                  Gadget
                </div>
                <div className='item'>
                  Cloth
                </div>
              </div>
          </Navdiv>
       </Container>

        
 
    
  )
}
