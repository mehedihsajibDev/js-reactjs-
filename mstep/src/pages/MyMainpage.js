import React, { useState } from 'react'
import Footer from './shared/Footer'
import MyHeader from './shared/MyHeader'
import Firspage from './components/Firspage'
import Secondpage from './components/Secondpage'
import ThirdPage from './components/Thirdpage'
import Previewpage from './components/Previewpage'

export default function MyMainpage() {
    let [page, setpage]=useState(1)
  return (
   <>
   
       <MyHeader></MyHeader>
       
        
        {
            page===1 && <Firspage setpage={setpage}></Firspage>
        }
         {
            page===2 &&  <Secondpage></Secondpage>
        }
         {
            page===3 && <ThirdPage></ThirdPage>
        }
         {
            page===4 && <Previewpage></Previewpage>
        }

        <Footer></Footer>
   </>
     
    
  
  )
}
