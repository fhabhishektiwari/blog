import './App.css'
import React,{useRef} from 'react';
import NewChildComponent from './NewChildComponent';
const App=()=>{
  let inputRef=useRef(null);
  function updateInput(){
    inputRef.current.value="1000";
    inputRef.current.style.color="red";
    inputRef.current.focus();
  }
  return(
    <div className='App'>
      <h1>forwordRef In React js</h1>
      <NewChildComponent ref={inputRef}/>
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  ); 

}

export default App;