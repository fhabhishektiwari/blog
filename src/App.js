import './App.css'
import React,{useState} from 'react';
const App=()=>{
  const [val,setVal]=useState("0");//default value
  const [item,setItem]=useState("0");
  return(
    <div className='App'>
      <h1>Controlled Component</h1>
      {/* you can't modify the value*/}
    {/*<input type='text' value="100"/>*/}
    <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
    <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}/>

    <h3>Value: {val}</h3>
    <h3>Item: {item}</h3>

    </div>
  ); 

}

export default App;