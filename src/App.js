// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

import Students from './Students';
import NewStudent from './NewStudent';

// this is use when you direct export component
// import { Users } from './Users';

function App() {
  // useState=using for stored the data.
  const [name,setData]=useState("Nishant");
  const[stu2,setData2]=useState("Nima");    
  return (
    <div className='App'>
      <Students name={name} email={"abhishek.tiwari@firsthive.com"} others={{address:"U.P.",mobile:"555-555-5555"}}/>
      <button onClick={()=>{setData('Abhishek');setData2('Nirmala')}}>Click updateNewData</button>
      <NewStudent name={stu2}/>
    </div>
  );
}


export default App;

