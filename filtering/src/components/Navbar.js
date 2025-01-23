import React, { useState } from 'react'
import { Container } from '../styles/common.styled'
import { Navdiv } from '../styles/maincss.styled'


export default function Navbar({uncat,data,setallData}) {
  let [ cName, setCName] = useState("");
    let handlecatname=(name)=>{
      setCName(name);
      
    let filterdata=data.filter(item=>item.category===name)
    if(filterdata.length){
      setallData(filterdata)
    }else{
      setallData(data)
    }
  }
  console.log('cname:', cName);
  return (
       <Container>
          <Navdiv>
              <div className='navbar'>
                <div className='item' onClick={()=>handlecatname("")} style={{ backgroundColor: cName === "" ? "#fd6d06" : "" }}>
                  All
                </div>
                  {
                    uncat.map((name,index)=>(
                      <div className='item' onClick={()=>handlecatname(name)} key={index} style={{backgroundColor: name===cName?"#fd6d06": ""}}>
                       {name}
                      </div>
                    ))
                  }
              </div>
          </Navdiv>
       </Container>    
  )
}
