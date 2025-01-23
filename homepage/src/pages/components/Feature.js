import React from 'react'
import { FeatureCard, FeatureSection } from '../../styles/Hero.styled'
import { Container, Gridthree } from '../../styles/Common.styled'
import bootstrap from '../../images/bootstrap.jpg'
import tailwind from '../../images/tailwind.jpg'
import materialUI from '../../images/materialUI.jpg'
 
const data=[
    {
        id:1,
        bgcolor:"rgba(109, 67, 161, 0.3)",
        color:"rgba(109, 67, 161, 1)",
        name:"Bootstrap",
        img:bootstrap
    },
    {
        id:2,
        bgcolor:"rgba(61, 128, 247, 0.3)",
        color:"rgba(61, 128, 247, 1)",
        name:"Bootstrap",
        img:tailwind
    },
    {
        id:3,
        bgcolor:"rgba(66, 166, 178, 0.3)",
        color:"rgba(66, 166, 178, 1)",
        name:"Bootstrap",
        img:materialUI
    }
]

export default function Feature() {
  return (
    <FeatureSection>
        <Container>
            <h2>Others well known styling framework </h2>
                    <Gridthree gap="4rem">
                        {
                            data.map(features => (
                                <FeatureCard bgcolor={features.bgcolor} color={features.color}>
                                    <img src={features.img} alt="img"></img>
                                    <div className='caption'>
                                    <p>{features.name}</p> 
                                    </div>
                                </FeatureCard>
                            ))
                        }                  
                    </Gridthree>
        </Container>
    </FeatureSection>
  )
}
