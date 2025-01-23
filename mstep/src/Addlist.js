import React, { useState } from 'react'

export default function Addlist({setShowmodal, setlists}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const handlesubmit=(e)=>{
        e.preventDefault()
        const submitedList = {
            title,
            StartDate: date,
            id: Date.now()
        }
        setlists(prevState => [...prevState, submitedList])
        setShowmodal(false);
    }
    
    
  return (
    <form onSubmit={handlesubmit}>
        <div className='modal'>
        <div className='modal-card'>
            
            <label>
           
                <span>Which programming language do you love?</span>
                <input type="text" onChange={e => setTitle(e.target.value)}  placeholder="your title" />
            </label>

            <label>
                <span>Which programming language do you love?</span>
                <input type="date" onChange={e=>setDate(e.target.value)}></input>
            </label>
            <button class="cls" type='submit'>Add List</button>
            <button class="cls" onClick={e=>setShowmodal(false)}>Close Modal</button>
        </div>
    </div>
    </form>
  )
}
