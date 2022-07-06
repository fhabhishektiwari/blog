// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [status,setStatus]=useState(true);
  return (
    <div className='App'>
      
      <button onClick={()=>{
       setStatus(false);
      }}>Hide</button>
      <button onClick={()=>{
        setStatus(true);
      }}>Show</button>
      <button onClick={()=>{
        setStatus(!status);
      }}>Toggle</button>
      {
        status?
        <h1>Text</h1>
        :null
      }
    </div>  
  );
}


export default App;

