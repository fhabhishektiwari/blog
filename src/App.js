import './App.css'
import React from 'react';
import UserSeven from './UserSeven';
const App=()=>{
  const [count,setCount]=React.useState(0);
  return(
    <div className='App'>
    <h1>Previous Props with Hooks</h1>
    <UserSeven count={count}/>
    
    <button onClick={()=>{
      setCount(Math.floor(Math.random()*10));
    }}>Update</button>

    </div>
  );
}


export default App;