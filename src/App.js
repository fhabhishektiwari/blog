// import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

import Students from './Students';
import NewStudent from './NewStudent';

// this is use when you direct export component
// import { Users } from './Users';

function App() {
  // useState=using for stored the data.
  const [nameOne,setDataOne]=useState("Nishant");
  const [nameOneEmail,setDataOneEmail]=useState("nishant@gmail.com");
  const[nameTwo,setDataTwo]=useState("Nima");
  const[nameTwoEmail,setDataTwoEmail]=useState("nima@gmail.com");    
  return (
    <div className='App'>
      <Students name={nameOne} email={nameOneEmail} others={{address:"U.P.",mobile:"555-555-5555"}}/>
      <button onClick={()=>{setDataOne('Abhishek');setDataOneEmail("abhishektiwari@gmail.com");setDataTwo('Nirmala');setDataTwoEmail("nirmala@gmail.com")}}>Click updateNewData</button>
      <NewStudent name={nameTwo} email={nameTwoEmail}/>
    </div>
  );
}


export default App;

