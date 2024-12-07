import React from 'react';
import { useState } from 'react';

export default function Addlist({setItem,setShowModal}) {
  let [title,setTile] = useState("")
  let [date,setDate] = useState("")

  let handlesubmit=(e)=>{
     e.preventDefault();
     let submitedList = {
      title:title,
      startDate: date,
      id: Date.now()
    }
    setItem(prevState => [...prevState, submitedList])
    setShowModal(false)
    console.log(' :', submitedList);

  }
  return (
    <form onSubmit={handlesubmit}>
         
        <label>
            <span>which programming language do you love?</span>
            <input type="text" onChange={(e)=>setTile(e.target.value)} placeholder="Your title"/>
        </label>
        <label>
            <span>When did you start this language</span>
            <input type="date" onChange={(e)=>setDate (e.target.value)} placeholder="Your date" />
        </label>
        <button className='btn'>Submit</button>
       
    </form>
  )
}

