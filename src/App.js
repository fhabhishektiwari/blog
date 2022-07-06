// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

import Students from './Students';

// this is use when you direct export component
// import { Users } from './Users';

function App() {
  // useState=using for stored the data.
  const [name,setData]=useState("Nishant");    
  return (
    <div className='App'>
      <Students name={name} email={"abhishek.tiwari@firsthive.com"} others={{address:"U.P.",mobile:"555-555-5555"}}/>
      <button onClick={()=>{setData('Abhishek')}}>Click updateNewData</button>
    </div>
  ); 
}


export default App;

