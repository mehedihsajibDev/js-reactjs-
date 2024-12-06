import React from 'react'

export default function Addlist({setShowModal}) {
  return (
    <div className='form'>
        <label>
            <span>which programming language do you love?</span>
            <input type="text" placeholder="Your title"/>
        </label>
        <label>
            <span>When did you start this language</span>
            <input type="date"  placeholder="Your date" />
        </label>
        <button className='btn' onClick={(e)=>setShowModal(false)}>Submit</button>
       
      
    </div>
  )
}
