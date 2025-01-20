import React from 'react'
import { Container } from '../../styles/Common.Styled'
import bootstrap from "../../images/bootstrap.jpg"
import materialUI from "../../images/materialUI.jpg"
import tailwind from "../../images/tailwind.jpg"
import { FeatureCard, Featuresection, Gridthree, H2section } from '../../styles/Home.styled'

const data=[
    {
        id:1,
        name:"Bootstrap",
        img:bootstrap,
        bgcolor: "#6D43A14D",
        color:"#6D43A1"
    },
    {
        id:2,
        name:"materialUI",
        img:materialUI,
        bgcolor: "#3D80F74D",
        color:"#3D80F7"
    },
    {
        id:3,
        name:"tailwind",
        img:tailwind,
        bgcolor: "#3D80F74D",
        color:"#3D80F7"
    },
]
export default function Features() {
  return (
    <Featuresection>
        <Container>
        
            <H2section>
             <h2 className='fe-tag'>Others well known styling framework </h2>
            </H2section>
                
                   <Gridthree>
                    {
                    
                      data.map(item=>(
                        <FeatureCard bgcolor={item.bgcolor} color={item.color}>
                            <img src={item.img} alt="img"/>
                            <div className='caption'>
                                <p>{item.nallme}</p>
                            </div>lll
                        </FeatureCard>
                      ))
                    }
                      
                    </Gridthree>
               
            
            
        </Container>
    </Featuresection>
  )
}
