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
            page===2 &&  <Secondpage setpage={setpage}></Secondpage>
        }
         {
            page===3 && <ThirdPage setpage={setpage}></ThirdPage>
        }
         {
            page===4 && <Previewpage setpage={setpage}></Previewpage>
        }

        <Footer></Footer>
   </>
     
    
  
  )
}
