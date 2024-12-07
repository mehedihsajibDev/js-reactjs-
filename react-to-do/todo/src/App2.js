import { useState } from 'react';
import Addlist from './Addlist';
import './App.css';
import Modal from './Modal';

let data=[
    {
      id:1,
      title:"I love Php",
      startDate:"20/2/2023"
    },
    {
      id:2,
      title:"I love Js",
      startDate:"21/3/2023"
    },
    {
      id:3,
      title:"I love Python",
      startDate:"22/4/2023"
    }
]


function App() {
  let [showmodal,setShowModal]= useState(false);
  let [list, setItem]=useState(data);
  let handleDelete=(id)=>{
    let filterList=list.filter(item=>item.id!==id)
    setItem(filterList)

    console.log(' :', filterList);
  }
 
  

  return (
    <div className="App">
      <div className='container'>
      {
      list.map(item =>(
        <div onClick={()=>handleDelete(item.id)} key={item.id} className="card1">
          <h2>{item.title}</h2>
          <h3>{item.startDate}</h3>
        </div>
      ))
     }
     <div className='add-btndiv'>
      <button className='btn' onClick={(e)=>setShowModal(true)}>Add Data</button>
     </div>

      {
        showmodal &&
        <Modal>
         <Addlist setItem={setItem} setShowModal={setShowModal}/>
         <div className='add-btndiv2'>
          <button className='btn' onClick={(e)=>setShowModal(false)}>Close Modal</button>
        </div>
        </Modal>
      }
      </div>
    </div>
  );
}
export default App;

