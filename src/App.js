// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


const  App=()=> {
  const [data,setData]=useState("Nishant");
  return(
    <div>
      <h1>Hello {data}</h1>
      <button onClick={()=>{
        setData("Ketan");
      }}>Update Name</button>
    </div>
  );
}
export default App;
