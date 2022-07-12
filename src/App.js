import './App.css'
import React,{useRef} from 'react';
const App=()=>{
  let inputRef=useRef(null);
  function handleInput(){
    // console.log("clicked")
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }
  return(
    <div className='App'>
      <h1>useRef In React js</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={()=>{handleInput()}}>Handle Input</button>
    </div>
  ); 

}

export default App;