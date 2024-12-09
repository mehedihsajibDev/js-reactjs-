import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { TopSection } from '../../styles/Hero.styled'

export default function Topbar() {
  return (
    <TopSection>
        <Navbar></Navbar>
        <Hero></Hero>
    </TopSection>
  )
}
