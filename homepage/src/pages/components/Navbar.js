import React from 'react'
import { Navigation } from '../../styles/Navigation.styled'
import logo from  "../../images/codeabc.jpg"
import { Container } from '../../styles/Common.styled'
export default function Navbar() {
  return (
    <Container>
    <Navigation>
        <div>
          <img src={logo} alt='logo'/>
        </div>
        <div>
            <ul>
                <li>
                    home
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
            </ul>
        </div>
    </Navigation>
        
    </Container>
  )
}
