// import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';


const  App=()=> {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("useeffect");
  })
  return(
    <div>
      <h1>Hello {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  );
}
export default App;
