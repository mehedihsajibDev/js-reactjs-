import React from 'react'
import { Container } from '../styles/common.styled'
import { Navdiv } from '../styles/maincss.styled'


export default function Navbar({uncat}) {
  return (
       <Container>
          <Navdiv>
              <div className='navbar'>
                <div className='item'>
                  All
                </div>
                  {
                    uncat.map(name=>(
                      <div className='item'>
                       {name}
                      </div>
                    ))
                  }
              </div>
          </Navdiv>
       </Container>

        
 
    
  )
}
