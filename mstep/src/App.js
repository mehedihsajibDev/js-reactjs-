
import { useState } from 'react';
import Addlist from './Addlist';
import './App.css';
import Modal from './Modal';

const data=[
  {
    id:1,
    title:"I Love Java",
    StartDate:"20/1/21"
  },
  {
    id:2,
    title:"I Love Html",
    StartDate:"20/1/22"
  },
  {
    id:3,
    title:"I Love Php",
    StartDate:"20/1/21"
  }
]
function App() {
 const [showmodal, setShowmodal]=useState(false);
 const [lists, setlists]=useState(data)
 const handleDelete=(id)=>{
  const filterList= lists.filter(item=> item.id!==id)
  setlists(filterList)
  console.log(' :', id);
 }
  return (
    <div className="App">
      <div className='cardp'>
      {
        lists.map(item=>(
          <div onClick={()=>handleDelete(item.id)} key={item.id} className='cards'>
            <h2>{item.title}</h2>
            <p>{item.StartDate}</p>
          </div>
        ))
      }
        <div>
          <button type="" onClick={(e)=>setShowmodal(true)}>Add List</button>
        </div>
        
      </div>

      {
         showmodal && <Modal>
         <Addlist setShowmodal={setShowmodal} setlists={setlists}></Addlist>
       </Modal>
      }

    </div>
  );
}

export default App;
