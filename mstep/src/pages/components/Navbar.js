import React from 'react'
import logo from "../../images/codeabc.jpg"
import { Container } from '../../styles/Common.Styled'
import { Navigation } from '../../styles/Navbar.Styled'
export default function Navbar() {
  return (
    <Container>
        <Navigation>
            <div>
            <img src={logo} alt='logo'/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Navigation>
    </Container>
  )
}
