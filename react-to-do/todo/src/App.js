
import { useState } from 'react';
import './App.css';
import Title from './Title';

function App() {
  let [name,setName]= useState("Mehedi Hasan Sajib");
  let year=2019;
  let [number, setNumber]=useState(1);
  let handlenumber=()=>{
    setNumber(number+1);
  }
  return (
    <div className="App">
      <div>
        <h2>{number}</h2>
        <button onClick={handlenumber}>Increament</button>
      </div>
     <div>
       My name is {name}
     </div>
     <div>
      <button onClick={(e)=>setName("Dipjol")}>Button</button>
     </div>
      <Title year={year}></Title>
    </div>
  );
}
export default App;
