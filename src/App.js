// import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserThree from './UserThree';


const  App=()=>{
  const [name,setName]=React.useState("Nishant");
    return(
      <div>
        <h1>Render Method in react</h1>
        <UserThree name={name}/>
        <button onClick={()=>{setName("Bhatnagar")}}>update data</button>
      </div>
    );
  }

export default App;
