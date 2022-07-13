import './App.css'
import React,{useRef} from 'react';
const App=()=>{
  let inputField1=useRef(null);
  let inputField2=useRef(null);
  return(
    <div className='App'>
      <h1>Uncontrolled Component</h1>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={inputField1} /><br/><br/>
        <input type='text' ref={inputField2}/><br/><br/>
        <input type='text' id='inp3'/><br/><br/>
        <button onClick={()=>{
          document.getElementById('id1').innerHTML+=inputField1.current.value;
          document.getElementById('id2').innerHTML+=inputField2.current.value;
          let inp3= document.getElementById('inp3').value;
          document.getElementById('id3').innerHTML+=inp3;
        }}>Submit</button> 
      
      </form>



    <h3 id='id1'>First Name:</h3>
    <h3 id='id2'>Last Name:</h3>
    <h3 id='id3'>Age:</h3>

    </div>
  ); 

}

export default App;