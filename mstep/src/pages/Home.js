import React from 'react'
import Topbar from './components/Topbar'
import {Homesection } from '../styles/Home.styled'
import Features from './components/Features'

export default function Home() {
  return (
    <Homesection>
        <Topbar></Topbar>
        <Features></Features>
    </Homesection>
   
  )
}
