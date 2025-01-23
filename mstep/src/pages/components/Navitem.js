import React, { useState } from 'react'
import { Container, Navigation, Section } from '../../styles/product.Styled'

export default function Navitem({uniqueCategory, data, setdata}) {
  const [cName, setCname]=useState("");
  const handleCategoryName=(name)=>{
    setCname(name);
    const filterdata=data.filter(item=>(item.category===name))

   if(filterdata.length){
    setdata(filterdata)
   }else{
    setdata(data)
   }
    
    
    
  }
  return (
    <Section>
      <Container>
        <Navigation>
          <ul>
            <li onClick={() => handleCategoryName("")} style={{background: cName==="" ? "#cdcaca" : "" }}>All</li>
            {
              uniqueCategory.map((name,index)=>(
                <li key={index} onClick={() => handleCategoryName(name)} style={{background: cName===name? "#cdcaca" : "" }}>{name}</li>
              ))
            }
          </ul>
        </Navigation>
      </Container>
    </Section>
  )
}
